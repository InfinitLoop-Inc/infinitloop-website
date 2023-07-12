import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Infinitloop" />
        <meta name="keywords" content="Infinitloop" />
        <meta name="author" content="Cedric Murairi" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="robots" content="INDEX, FOLLOW" />
        <meta name="googlebot" content="INDEX, FOLLOW" />
        <meta name="google" content="notranslate" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
