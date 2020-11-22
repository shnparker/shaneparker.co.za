import * as Sentry from "@sentry/node";
import { Integrations } from "@sentry/tracing";
import { AppProps } from "next/app";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import "@/styles/index.css";

if (process.env.SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    enabled: process.env.NODE_ENV !== "development" && process.env.NODE_ENV !== "test",
    environment: process.env.NEXT_PUBLIC_APP_STAGE,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
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
