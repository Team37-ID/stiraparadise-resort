import { Lightbulb } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const CottageTropis = () => {
  const handleLearnMore = () => {
    const pesan = `Halo, saya ingin menanyakan room tipe ...`;
    const url = `https://wa.me/6282188661981?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  };
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-8 xl:gap-7 md:ml-8 xl:gap-42">
      {/* Tulisan + Button DIRAPIHKAN LAGI TULISANNYA */}
      <div className="flex flex-col max-w-3xl px-8 md:px-20 xl:px-32">
        <h3 className="text-base md:text-xl xl:text-3xl text-[var(--primary)] underline font-semibold mb-4 mt-24 xl:-mx-[102px]">Cottage Tropis (Segera Hadir)</h3>
        <p className="text-base md:text-lg xl:text-xl md:mt-4 xl:mt-8 xl:-mx-[102px]">
          Bangunan kayu tropis alami dengan harga yang lebih terjangkau, dirancang untuk menyatu harmonis dengan alam sekitar dan menghadirkan suasana hangat yang menenangkan.
        </p>
        <button
          onClick={handleLearnMore}
          className="flex items-center justify-center gap-4 bg-[var(--secondary)] text-[var(--primary)] font-semibold text-xs lg:text-sm xl:text-lg px-4 lg:px-7 xl:px-9 py-2 xl:-mx-[102px] mt-8 w-full xl:w-[300px] max-w-xl rounded-2xl hover:bg-[var(--secondaryhover)] transition"
        >
          <Lightbulb className="size-3 xl:size-7" />
          Learn More
        </button>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 ">
          <Image src="/cottagetropis-rumah.jpeg" alt="Foto 1" className="w-full h-40 object-cover rounded-xl" width={80} height={40} />
          <Image src="/villaetnikikonik-rumah.jpeg" alt="Foto 1" className="w-full h-40 object-cover rounded-xl" width={80} height={40} />
          <Image src="/villamodern-rumah.jpeg" alt="Foto 1" className="w-full h-40 object-cover rounded-xl" width={80} height={40} />
          <Image src="/villa-rumah.jpeg" alt="Foto 1" className="w-full h-40 object-cover rounded-xl" width={80} height={40} />
        </div>
      </div>
    </div>
  );
};

export default CottageTropis;
