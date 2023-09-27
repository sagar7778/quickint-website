import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content="software company in ahmedabad,react js, react native,mobile app development,mobile app development service,mobile application development guide,web application development guide,web development nere me,Best app devlopment agency,devops for testers,auutomation in devops,devlopment tools in devops,best devops support ever,aws devops tools,best e-commerce websites,E-commerce support,best e-commerce websites lists,E-commerce business devlopment support,online business helpline,transformed meaning,digital focous on,digital transformantion,digital innovation in 2023,digital components,Best SEO agency in 2023,best SEO Specialist in 2023,website ranking by seo,paid seo service provider,organic seo specialist,React native for app development,React native setup for Windows,react native expo,react native app develops,iSO development "
          />
          <meta
            name="description"
            content="Quickint Solutions"
          />
          <meta name="author" content="" />
          <link rel="shortcut icon" href="/img/favicon.png" />
          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
