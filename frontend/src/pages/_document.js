import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:site" content="@magic_labs" key="twhandle" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_HOST}
          key="ogurl"
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_HOST}/og-card.png`}
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="WTC-2024"
          key="ogsitename"
        />
        <meta
          property="og:title"
          content="WTC-2024"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="WTC-2024 kickstart NFT PoaP marketplace / dApp"
          key="ogdesc"
        />
        <title>WTC-2024</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
