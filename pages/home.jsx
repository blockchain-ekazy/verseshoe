import React, { useState } from "react";
import Meta from "../components/meta";
import Mint from "../components/mint";
import Intro from "../components/intro";
import { setMint } from "../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = ({ onNotify }) => {
  const { isMint } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const enableMint = () => {
    dispatch(setMint());
  };
  return (
    <>
      <Meta />
      {isMint ? <Mint onNotify={onNotify} /> : <Intro onMint={enableMint} />}
    </>
  );
};

export default Home;
