import React from "react";
import About from "../pages-components/About";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Quickint Solutions | About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <About />
    </>
  );
}
