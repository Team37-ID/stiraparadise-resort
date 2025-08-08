import { Instagram, MessageSquareText, Music2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col xl:flex-row py-24 gap-20 mt-20 xl:gap-200 items-start justify-center " id="kontak">
      <div className="flex flex-col text-[var(--primary)]">
        <Image src="/stiraparadise-logo.jpeg" alt="stira paradise logo" width={80} height={80} />
        <p className="text-sm lg:text-base xl:text-xl font-bold ">Stira ParADIse Resort</p>
        <p className="text-sm lg:text-base xl:text-xl">Kawasan Wisata Pantai Alfath Stira ParADIse</p>
        <p className="text-sm lg:text-base xl:text-xl">Kabupaten Pinrang, Sulawesi Selatan</p>
        <div className="flex flex-row gap-4">
          <Link href="/whatsapp">
            <MessageSquareText className="text-green-500" />
          </Link>
          <Link href="https://www.instagram.com/stiraparadise_resort">
            <Instagram className="text-purple-600" />
          </Link>
          <Link href="/tiktok">
            <Music2 className="text-[var(--black)]" />
          </Link>
        </div>
        <p className="text-sm lg:text-base xl:text-xl">
          © 2025 <span className="font-bold ">Stira ParADIse</span>. All rights reserved.
        </p>
      </div>
      <div className="flex flex-col text-[var(--primary)] justify-center ">
        <p className="text-sm lg:text-base xl:text-xl md:mt-4 xl:mt-8 font-semibold text-[var(--primary)]">Menu</p>
        <Link href="#tentang" className="flex items-start gap-2 ">
          Tentang
        </Link>
        <Link href="#fasilitas" className="flex items-start gap-2">
          Fasilitas
        </Link>
        <Link href="#reservasi" className="flex items-start gap-2">
          Reservasi
        </Link>
        <Link href="#kontak" className="flex items-start gap-2">
          Kontak
        </Link>
      </div>
    </div>
  );
};

export default Footer;
