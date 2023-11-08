import Head from "next/head";
import Home from "@/components/Home";

export default function Index() {
  return (
    <>
      <Head>
        <title>TheCineSearch</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Home />
    </>
  );
}
