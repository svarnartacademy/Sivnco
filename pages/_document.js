import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/*
          model-viewer MUST be loaded as a true ES module (<script type="module">).
          Next.js <Script> strips type="module" during optimization, which breaks
          the custom-element registration. Injecting via dangerouslySetInnerHTML
          bypasses that and outputs the exact tag the browser needs.
        */}
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer@3.3.0/dist/model-viewer.min.js"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
