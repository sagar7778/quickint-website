import Head from "next/head";
import Portfolio from "../pages-components/Portfolio";

import React from "react";

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Quickint Solutions | Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Portfolio />
    </>
  );
}
