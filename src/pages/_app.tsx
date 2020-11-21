import { AppProps } from "next/app";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import "@/styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Container>
        <Nav />
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
