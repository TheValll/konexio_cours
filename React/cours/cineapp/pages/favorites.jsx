import React from "react";
import Favorites from "@/components/Favorites";
import Head from "next/head";

const favorites = () => {
  return (
    <>
      <Head>
        <title>My favorites films</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Favorites />
    </>
  );
};

export default favorites;
