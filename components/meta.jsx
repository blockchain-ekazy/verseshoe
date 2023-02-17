import React from "react";
import Head from "next/head";

const Meta = ({ title, keyword, desc }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={desc} />
        <meta name="keyword" content={keyword} />
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "Verseshoe | Mint",
  keyword: "ethereum, nft, mint, web3",
  desc: "FANTASY x GAMING x REALITY",
};

export default Meta;
