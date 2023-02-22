import React, { useEffect, useState } from "react";
import { ethers, Signer } from "ethers";
import { MerkleTree } from "merkletreejs";
import { useDispatch, useSelector } from "react-redux";
import VerseshoeAbi from "../data/abi/verseshoe.json";
import whitelists from "../data/wallets/whitelist.json";
import { updateSignerAddress } from "../redux/counterSlice";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

const keccak256 = require("keccak256");

const Mint = ({ onNotify }) => {
  const { signerAddress } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const contractAddress = process.env.CONTRACT_ADDRESS;

  const [maxSupply, setMaxSupply] = useState(2888);
  const [totalSupply, setTotalSupply] = useState(686);
  const [mintStatus, setMintStatus] = useState(0);
  const [maxMintWhitelist, setMaxMintWhitelist] = useState(0);
  const [mintPriceWhitelist, setMintPriceWhitelist] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [seconds, setSeconds] = useState(38);
  const [crossmintProof, setcrossmintProof] = useState();

  const getContractInformation = async () => {
    // Declare provider
    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      process.env.NETWORK
    );

    // The Contract object
    const contract = new ethers.Contract(
      contractAddress,
      VerseshoeAbi,
      provider
    );

    // Read max supply
    let maxSupply = await contract.maxSupply();
    //setMaxSupply(parseInt(maxSupply._hex, 16));

    // Read total supply
    let totalSupply = await contract.totalSupply();
    //setTotalSupply(parseInt(totalSupply._hex, 16));

    // Read mint status
    let mintStatus = await contract.currentState();
    setMintStatus(mintStatus);

    // Read max supply
    let maxMintAmountWL = await contract.maxMintAmountWL();
    setMaxMintWhitelist(parseInt(maxMintAmountWL._hex, 16));

    // Initialize quantity
    if (mintStatus == 1) {
      setQuantity(maxMintAmountWL);
    } else {
      setQuantity(1);
    }

    // Read mint price whitelist
    let mintPriceWhitelist = await contract.costWL();
    setMintPriceWhitelist(
      parseInt(mintPriceWhitelist._hex, 16) / 1000000000000000000
    );
  };

  const mint = async () => {
    // Declare provider
    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      process.env.NETWORK
    );

    const signer = provider.getSigner();

    const signerAddressLocal = await signer.getAddress();

    // Search in the Whitelist file
    let proof = await getProof(signerAddressLocal.toLocaleLowerCase());

    if (proof == null) {
      onNotify("You are not on the Whitelist!");
    } else {
      // The Contract object
      const contract = new ethers.Contract(
        contractAddress,
        VerseshoeAbi,
        signer
      );

      // Mint NFT
      const options = { value: ethers.utils.parseEther(totalPrice.toString()) };

      await contract.mintCrossmint(
        1,
        "0x86fc9DbcE9e909c7AB4D5D94F07e70742E2d144A",
        { value: ethers.utils.parseEther("0.04") }
      );

      return;

      try {
        await contract.mint(quantity, proof, options);
      } catch (error) {
        try {
          onNotify(
            await error.error.message.replace("execution reverted: ", "")
          );
        } catch (error) {
          onNotify("Transaction aborted!");
        }
      }
    }
  };

  async function getProof(address) {
    // Generate MerkleTree and LeafNodes
    const leafNodes = whitelists.map((addr) => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, {
      sortPairs: true,
    });

    let index = whitelists.findIndex(
      (item) => item.toLocaleLowerCase() == address.toLocaleLowerCase()
    );

    if (index == -1) {
      return null;
    } else {
      return merkleTree.getHexProof(leafNodes[index]);
    }
  }

  // Calls Metamask to connect wallet on clicking Connect Wallet button
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        await provider.send("eth_requestAccounts", []);

        const signer = await provider.getSigner(0);

        if (signer === undefined) {
          dispatch(updateSignerAddress("0"));
        } else {
          dispatch(updateSignerAddress(await signer.getAddress()));
        }
      } catch (error) {
        onNotify("Error connecting to Metamask!");
      }
    } else {
      onNotify("Metamask isn't installed!");
    }
  };

  const decrement = () => {
    let value = quantity;
    if (quantity > 1) {
      setQuantity(--value);
    }
  };

  const increment = () => {
    let value = quantity;
    let maxQuantity = maxMintWhitelist;
    if (quantity < maxQuantity) {
      setQuantity(++value);
    }
  };

  useEffect(() => {
    async function fetchData() {
      setcrossmintProof(
        await getProof("0xdAb1a1854214684acE522439684a145E62505233")
      );
      if (!window.ethereum) {
        onNotify("Metamask is not detected!");
        return;
      }

      let chainId = await ethereum.request({ method: "eth_chainId" });

      if (parseInt(chainId, 16) !== process.env.NETWORK) {
        onNotify("You are not connected to the Mainnet!");
      } else {
        getContractInformation();
      }
    }

    fetchData();
  }, [onNotify]);

  useEffect(() => {
    if (mintStatus == 0) {
      setTotalPrice(0);
    } else {
      setTotalPrice(quantity * mintPriceWhitelist);
    }
  }, [mintPriceWhitelist, mintStatus, quantity]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (totalSupply < 2788) {
        setTotalSupply(totalSupply + 1);
      } else {
        setTotalSupply(1188);
      }
    }, 1500);
    return () => clearInterval(timer);
  }, [totalSupply]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <>
      {/* <!-- Mint --> */}
      <section className="relative pb-10 pt-20 md:pt-31 min-h-screen overflow-x-hidden">
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 block h-full">
          <img
            src="/images/background.png"
            alt="gradient dark"
            className="object-cover h-full w-full"
          />
        </picture>

        <div className="pt-14 text-center relative text-white font-capture w-full">
          <p className="text-3xl">Mint your</p>
          <p className="text-6xl">VS Character</p>
        </div>

        <div className="absolute inset-0 z-10 h-full w-full bg-black opacity-20" />
        <div className="container h-full mx-auto z-30 relative">
          <div className="pt-10 flex justify-center items-center w-full">
            <div className="bg-white/20 vs-layer shadow-2xl max-w-5xl relative w-full text-white">
              <div className="bg-a-black/20 w-20 h-10 absolute -top-6 -translate-x-1/2 left-1/2" />

              <div className=" pb-8 flex flex-col p-4 w-full">
                <div className="mx-auto text-center space-y-6 w-full">
                  <div className="w-full pt-10 pl-10 pr-10 flex text-center">
                    <div className="border-b border-white w-full self-center" />
                    <div className="text-3xl w-full font-bold uppercase pl-4 pr-4">
                      {totalSupply} out of {maxSupply}
                    </div>
                    <div className="border-b border-white w-full self-center" />
                  </div>
                  {/* <!-- Progress bar --> */}
                  <div className="w-full pl-10 pr-10 pb-5">
                    <div className="mb-4 w-full h-4 vs-progess-bar-total">
                      <div
                        className="h-4 vs-progess-bar-fill"
                        style={{ width: (totalSupply / maxSupply) * 100 + "%" }}
                      ></div>
                    </div>
                  </div>
                  {/* <!-- Seconds --> */}
                  <div className="pb-5 text-center text-white font-display text-6xl w-full">
                    Hurry up! Mint close in {seconds} seconds!
                  </div>
                  {/* <!-- Amount --> */}
                  <div className="flex justify-between text-lg xl:text-xl items-center pb-2 pt-6">
                    <div className="flex flex-row justify-center h-10 rounded-lg relative bg-transparent mt-1 w-full">
                      <div
                        className="minus font-capture hover:text-white text-4xl self-center cursor-pointer"
                        onClick={() => {
                          decrement();
                        }}
                      >
                        <span className="text-center">-</span>
                      </div>
                      <div className="quantity font-capture text-white text-5xl self-center">
                        <span className="text-center grid h-full place-items-center">
                          {quantity.toString().length < 2
                            ? "0" + quantity.toString()
                            : quantity}
                        </span>
                      </div>
                      <div
                        className="plus font-capture hover:text-white text-4xl self-center cursor-pointer"
                        onClick={() => {
                          increment();
                        }}
                      >
                        <span className="text-center">+</span>
                      </div>
                    </div>
                  </div>
                  <div className="font-display text-center text-xl text-lg pt-6 pb-6">
                    {maxMintWhitelist} NFT(s) per wallet
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Mint Button --> */}
          {signerAddress == "0" ? (
            <div className="w-full mt-6">
              <div className="flex flex-row justify-center w-full">
                <div className="vs-button-border"></div>
                <div className="vs-button flex cursor-pointer">
                  <span
                    className="font-display text-white text-lg w-full self-center text-center"
                    onClick={() => {
                      connectWallet();
                    }}
                  >
                    Connect Wallet
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full mt-6">
              <div className="flex flex-row justify-center w-full">
                <div className="vs-button-border"></div>
                <div className="vs-button flex cursor-pointer">
                  <span
                    className="font-display text-white text-lg w-full self-center text-center"
                    onClick={() => {
                      mint();
                    }}
                  >
                    Mint now
                  </span>
                </div>
              </div>
            </div>
          )}

          <CrossmintPayButton
            className="mx-auto mt-5"
            clientId="21824951-6cbc-4930-9478-c58df4a163bd"
            mintConfig={{
              type: "erc-721",
              // totalPrice: "0.04",
              totalPrice: totalPrice.toString(),
              _mintAmount: "1",
            }}
            environment="staging"
          />
        </div>
      </section>
      {/* <!-- end mint --> */}
    </>
  );
};

export default Mint;
