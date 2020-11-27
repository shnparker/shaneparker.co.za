import * as Sentry from "@sentry/node";
import { AppProps } from "next/app";
import Nav from "~/components/layout/Nav";
import Header from "~/components/layout/Header";
import Container from "~/components/layout/Container";
import Footer from "~/components/layout/Footer";
import "~/styles/tailwind.css";

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    enabled: process.env.NODE_ENV !== "development" && process.env.NODE_ENV !== "test",
    environment: process.env.NEXT_PUBLIC_APP_STAGE,
  });
}

interface Props extends AppProps {
  err: Object;
}

function MyApp({ Component, pageProps, err }: Props) {
  return (
    <div className="dark:bg-gray-900">
      <Header />
      <Container>
        <Nav />
      </Container>
      <Container>
        <main>
          <Component {...pageProps} err={err} />
        </main>
      </Container>
      <Container>
        <Footer />
      </Container>
    </div>
  );
}

export default MyApp;
