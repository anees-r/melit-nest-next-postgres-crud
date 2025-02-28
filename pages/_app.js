import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/Navbar";
import BlurBackground from "@/components/BlurBackground";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "80px", paddingBottom: "60px" }}>
        <Component {...pageProps} />
      </main>
      <BlurBackground />
    </>
  );
}
