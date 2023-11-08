import Navbar from "@/components/Navbar";
import "../styles/index.scss";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
