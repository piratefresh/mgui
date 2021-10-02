import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/PlusJakartaSans[wght].ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/PlusJakartaSans-Italic[wght].ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css?family=Play&display=swap"
            as="font"
          />
          <link
            rel="preload"
            href="https://use.typekit.net/crr5xnk.css"
            as="font"
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
