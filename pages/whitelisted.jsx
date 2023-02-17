const Whtielisted = () => {
  return (
    <>
      {/* <!-- Mint --> */}
      <section className="relative pb-10 pt-20 md:pt-31 min-h-screen overflow-x-hidden">
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 block h-full">
          <img
            src="/images/wl-true.png"
            alt="gradient dark"
            className="object-cover h-full w-full"
          />
        </picture>

        <div className="pt-14 text-center relative text-white font-capture w-full">
          {/* <p className="text-3xl">Check your</p>
          <p className="text-6xl">Whitelist</p> */}
        </div>

        <div className="absolute inset-0 z-10 h-full w-full bg-black opacity-20" />
        <div className="container h-full mx-auto z-30 relative">
          <div className="pt-10 flex justify-center items-center w-full mt-24">
            <div className="bg-white/20 vs-layer shadow-2xl max-w-5xl relative w-full text-white">
              <div className="bg-a-black/20 w-20 h-10 absolute -top-6 -translate-x-1/2 left-1/2" />

              <div className=" pb-8 flex flex-col p-4 w-full">
                <div className="mx-auto text-center space-y-6 w-full">
                  <div className="w-full pt-10 pl-10 pr-10 flex text-center">
                    {/* <div className="border-b border-white w-full self-center" /> */}
                    {/* <div className="text-3xl w-full font-bold uppercase pl-4 pr-4"> */}
                    {/* {totalSupply} out of {maxSupply} */}
                    {/* </div> */}
                    {/* <div className="border-b border-white w-full self-center" /> */}
                  </div>
                  {/* <!-- Progress bar --> */}
                  {/* <div className="w-full pl-10 pr-10 pb-5">
                    <div className="mb-4 w-full h-4 vs-progess-bar-total">
                      <div
                        className="h-4 vs-progess-bar-fill"
                        style={{ width: (totalSupply / maxSupply) * 100 + "%" }}
                      ></div>
                    </div>
                  </div> */}
                  {/* <!-- Seconds --> */}
                  <div className="pb-5 text-center text-white font-display text-6xl w-full">
                    {/* {status} */}
                    Congratulations you are whitlisted on versehoe see you in
                    mint date be aware of that it is FCFS so BE FIRST to secure
                    your spot
                    {/* <div className="flex flex-row justify-center w-full pt-5 mt-5">
                      <div className="vs-button-border"></div>
                      <div className="vs-button flex cursor-pointer">
                        <span
                          className="font-display text-white text-lg w-full self-center text-center"
                          onClick={() => {
                            // connectWallet();
                          }}
                        >
                          Check Wallet
                        </span>
                      </div>
                    </div> */}
                  </div>
                  {/* <!-- Amount --> */}
                  {/* <div className="flex justify-between text-lg xl:text-xl items-center pb-2 pt-6">
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
                  </div> */}
                  {/* <div className="font-display text-center text-xl text-lg pt-6 pb-6">
                    {maxMintWhitelist} NFT(s) per wallet
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Mint Button --> */}
          {/* {signerAddress == "0" ? (
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
          )} */}
        </div>
      </section>
      {/* <!-- end mint --> */}
    </>
  );
};

export default Whtielisted;
