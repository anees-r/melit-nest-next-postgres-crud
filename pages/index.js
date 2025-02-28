import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import { useState, useEffect } from "react";
import CreateBook from "@/components/home/CreateBook";
import AddButton from "@/components/home/AddButton";
import Books from "@/components/books/Books";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [openDialogue, setOpenDialogue] = useState(false);

  const setTrue = () => {
    setOpenDialogue(true);
  };

  const setFalse = () => {
    setOpenDialogue(false);
  };
  useEffect(() => {
    document.body.style.backgroundColor = "rgb(14, 13, 14)";
  }, []);
  return (
    <>
      <Head>
        <title>Melit - Home</title>
        <meta
          name="description"
          content="A Next, Nest, Postgres web app to manage all your book"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AddButton onClick={setTrue} />
      {openDialogue && <CreateBook onClose={setFalse} />}
      <h3 className="px-5" style={{ color: "#9B59B6", marginBottom: "30px" }}>
        Melit - Browse Books!
      </h3>
      <Books />
    </>
  );
}
