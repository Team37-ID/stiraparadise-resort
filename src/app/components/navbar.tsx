"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        <div className="text-[var(--primary)] font-bold text-lg md:hidden">
          <Image src="/stiraparadise-logo.jpeg" width={60} height={60} alt="logo" />
        </div>

        {/* Garis 3 di kanan atas */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
        </div>

        {/* Menu (Desktop) */}
        <div className="hidden md:flex w-full justify-evenly items-center  ">
          <Link href="#tentang" className="font-bold text-xs lg:text-sm rounded-lg px-5 py-3 text-[var(--primary)] hover:bg-[var(--secondary)]">
            Tentang
          </Link>
          <Link href="#fasilitas" className="font-bold text-xs lg:text-sm rounded-lg px-5 py-3 text-[var(--primary)] hover:bg-[var(--secondary)]">
            Fasilitas
          </Link>
          <Link href="#reservasi" className="font-bold text-xs lg:text-sm rounded-lg px-5 py-3 text-[var(--primary)] hover:bg-[var(--secondary)]">
            Reservasi
          </Link>
          <Link href="#kontak" className="font-bold text-xs lg:text-sm rounded-lg px-5 py-3 text-[var(--primary)] hover:bg-[var(--secondary)]">
            Kontak
          </Link>
        </div>
      </div>

      {/* Menu (Mobile Dropdown) */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2">
          <Link href="#tentang" className="font-bold text-xs lg:text-sm rounded-lg px-5 py-3 text-[var(--primary)] hover:bg-[var(--secondary)]">
            Tentang
          </Link>
          <Link href="#fasilitas" className="font-bold text-xs lg:text-sm rounded-lg px-5 py-3 text-[var(--primary)] hover:bg-[var(--secondary)]">
            Fasilitas
          </Link>
          <Link href="#reservasi" className="font-bold text-xs lg:text-sm rounded-lg px-5 py-3 text-[var(--primary)] hover:bg-[var(--secondary)]">
            Reservasi
          </Link>
          <Link href="#kontak" className="font-bold text-xs lg:text-sm rounded-lg px-5 py-3 text-[var(--primary)] hover:bg-[var(--secondary)]">
            Kontak
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
