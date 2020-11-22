/**
 * CUSTOMIZE APP DOCUEMNT
 *
 * A custom Document is commonly used to augment your application's <html> and <body> tags.
 * @see https://github.com/vercel/next.js/#custom-document
 */

import * as Sentry from "@sentry/node";
import Document, { Html, Head, Main, NextScript } from "next/document";

process.on("unhandledRejection", (err) => {
  Sentry.captureException(err);
});

process.on("uncaughtException", (err) => {
  Sentry.captureException(err);
});

class AppDocument extends Document {
  render() {
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
}

export default AppDocument;
