import Head from 'next/head';
import DarkTheme from '../layouts/Dark'
// import Demos from "./demos";
import Home from '../pages-components/Home'

export default function Main() {
  return (
    <DarkTheme>
      <Head>
        <title>Quickint Solutions | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Home />
    </DarkTheme>
  );
}
