"use client";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //btn book now
  const handleBookNow = () => {
    const pesan = `Halo, saya ingin menanyakan room tipe ...`;
    const url = `https://wa.me/6282188661981?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-60">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        <div className="text-[var(--primary)] font-bold text-lg flex-shrink-0 ">
          <Image src="/stiraparadise-logo.jpeg" width={60} height={60} alt="logo" className="object-contain" />
        </div>

        {/* Garis 3 di kanan atas */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
        </div>

        {/* Menu (Desktop) */}
        <div className="hidden md:flex flex-1 justify-center items-center md:ml-30 xl:ml-110 gap-1">
          <Link href="#tentang" className="font-bold text-xs xl:text-sm rounded-lg px-5 py-3 text-[var(--primary)] hover:bg-[var(--secondary)]">
            Tentang
          </Link>
          <Link href="#fasilitas" className="font-bold text-xs xl:text-sm rounded-lg px-5 py-3 text-[var(--primary)] hover:bg-[var(--secondary)]">
            Fasilitas
          </Link>
          <Link href="#reservasi" className="font-bold text-xs xl:text-sm rounded-lg px-5 py-3 text-[var(--primary)] hover:bg-[var(--secondary)]">
            Reservasi
          </Link>
          <Link href="#kontak" className="font-bold text-xs xl:text-sm rounded-lg px-5 py-3 text-[var(--primary)] hover:bg-[var(--secondary)]">
            Kontak
          </Link>
        </div>
        <div className="hidden md:flex flex-shrink-0 md:ml-10 xl:ml-80">
          <button onClick={handleBookNow} className="px-5 py-2 flex items-center justify-center gap-2 bg-[var(--primary)] text-[var(--secondary)] rounded-2xl hover:bg-[var(--primaryhover)] transition font-semibold text-sm xl:text-base">
            <Phone className="size-4 xl:size-5" />
            Book Now
          </button>
        </div>
      </div>

      {/* Menu (Mobile Dropdown) */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2">
          <Link href="#tentang" className="font-bold text-xs rounded-lg px-5 py-3 text-[var(--primary)] hover:bg-[var(--secondary)]">
            Tentang
          </Link>
          <Link href="#fasilitas" className="font-bold text-xs rounded-lg px-5 py-3 text-[var(--primary)] hover:bg-[var(--secondary)]">
            Fasilitas
          </Link>
          <Link href="#reservasi" className="font-bold text-xs rounded-lg px-5 py-3 text-[var(--primary)] hover:bg-[var(--secondary)]">
            Reservasi
          </Link>
          <Link href="#kontak" className="font-bold text-xs rounded-lg px-5 py-3 text-[var(--primary)] hover:bg-[var(--secondary)]">
            Kontak
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
