import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="font-sans flex flex-col gap-4 items-center justify-center align-middle w-full min-h-screen">
      {/* navbar */}
      <Navbar />

      {/* hero */}
      <Hero />

      <div className="flex flex-col items-center mt-10">
        <Image src="/stiraparadise-logo.jpeg" alt="stira paradise logo" width={128} height={128} />
        <p className="w-96 text-center md:text-2xl">Coming Soon Surga Tropis Stira ParADIse Resort</p>
        <Link href="https://www.instagram.com/stiraparadise_resort" className="underline text-blue-500">
          Kunjungi Instagram Kami
        </Link>
      </div>
    </div>
  );
}
