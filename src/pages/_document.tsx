import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Bad+Script&family=Fuzzy+Bubbles:wght@400;700&display=swap"
          rel="stylesheet"
        />
         <title>Aki</title>
        <meta name="desription" content="Aki's website" />
      </Head>
      <body className="h-screen bg-zinc-800 font-mont">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
