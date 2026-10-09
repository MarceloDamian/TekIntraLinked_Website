// Supplies the document language, which screen readers use to pick pronunciation
// rules. Without it NVDA falls back to the user's synthesizer language.
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
