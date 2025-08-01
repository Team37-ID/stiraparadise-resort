// navbar
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#FFFFFF] shadow z-50 ">
      <div className="flex justify-evenly items-center py-2">
        <a href="/tentang" className="font-bold text-lg md:text-xl lg:text-2xl rounded-lg px-6 py-4 text-[var(--primary)] hover:bg-[var(--secondary)]">
          Tentang
        </a>
        <a href="/fasilitas" className="font-bold text-lg md:text-xl lg:text-2xl rounded-lg px-6 py-4 text-[var(--primary)] hover:bg-[var(--secondary)]">
          Fasilitas
        </a>
        <a href="/reservasi" className="font-bold text-lg md:text-xl lg:text-2xl rounded-lg px-6 py-4 text-[var(--primary)] hover:bg-[var(--secondary)]">
          Reservasi
        </a>
        <a href="/kontak" className="font-bold text-lg md:text-xl lg:text-2xl rounded-lg px-6 py-4 text-[var(--primary)] hover:bg-[var(--secondary)]">
          Kontak
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
