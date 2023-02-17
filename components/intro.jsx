import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Intro = ({ onMint }) => {
  const [isWritten, setWritten] = useState(true);

  return (
    <>
      {/* <!-- Mint --> */}
      <section className="relative pb-10 pt-20 md:pt-31 min-h-screen overflow-x-hidden">
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 block h-full">
          <img
            src="/images/intro.png"
            alt="gradient dark"
            className="object-cover h-full w-full"
          />
        </picture>

        <div className="relative pt-32 text-white font-capture w-full"></div>

        <div className="absolute inset-0 z-10 h-full w-full bg-black opacity-20" />
        <div className="container h-full mx-auto z-30 relative">
          <div>
            <div className="text-white text-xl pb-10">
              <TypeAnimation
                sequence={[
                  "Our community is given the opportunity to win $50,000 and receive Airdrops worth 3-4 ETH from the Verseshoe brand by simply selling VS Characters for a minimum of 2 ETH. It's important to note that even if the listed VS Character is not sold, as long as it is listed above 2 ETH, you will still be eligible for the Airdrop. However, if you do not list the character for at least 2 ETH, you will miss out on the valuable opportunities presented by the Verseshoe brand.",
                  () => {
                    setWritten(true);
                  },
                ]}
                wrapper="p"
                cursor={false}
                speed={15}
              />
            </div>

            <div className="w-full mt-6 mb-4">
              {isWritten && (
                <Link href="/" legacyBehavior>
                  <div className="flex flex-row justify-center w-full fade-in-button">
                    <div className="vs-button-border"></div>
                    <div
                      className="vs-button flex cursor-pointer"
                      onClick={() => onMint()}
                    >
                      <span className="font-display text-white w-full self-center text-center text-lg">
                        Go to Mint
                      </span>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end mint --> */}
    </>
  );
};

export default Intro;
