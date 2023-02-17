const NotWhtielisted = () => {
  return (
    <>
      {/* <!-- Mint --> */}
      <section className="relative pb-10 pt-20 md:pt-31 min-h-screen overflow-x-hidden">
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 block h-full">
          <img
            src="/images/wl-false.png"
            alt="gradient dark"
            className="object-contain h-full w-full bg-black"
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

export default NotWhtielisted;
