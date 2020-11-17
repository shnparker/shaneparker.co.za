import Head from "next/head";
import "@/styles/index.css";
import Header from "@/components/Header";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  const description = "Software developer from Cape Town, South Africa";
  const title = "Shane Parker";
  const url = "https://shaneparker.co.za";
  const twitter = "@shnparker";

  const imageUrl =
    "https://res.cloudinary.com/shnparker/image/upload/v1605625835/social-media/linkedin_cover_ljgktr.png";

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={twitter} />
        <meta name="twitter:creator" content={twitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
      </Head>
      <Container>
        <Header />
      </Container>
      <Container>
        <main>
          <Component {...pageProps} />
        </main>
      </Container>
      <Container>
        <Footer />
      </Container>
    </div>
  );
}

export default MyApp;
