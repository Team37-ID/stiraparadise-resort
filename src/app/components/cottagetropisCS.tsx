import { Lightbulb } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const CottageTropis = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-8 xl:gap-20 xl:mr-10">
      {/* Tulisan + Button DIRAPIHKAN LAGI TULISANNYA */}
      <div className="flex flex-col max-w-3xl px-24">
        <h3 className="text-base lg:text-xl xl:text-3xl text-[var(--primary)] underline font-semibold mb-4 mt-24 xl:-mx-[102px]">Cottage Tropis (Segera Hadir)</h3>
        <p className="text-sm lg:text-base xl:text-xl md:mt-4 xl:mt-8 xl:-mx-[102px]">
          Bangunan kayu tropis alami dengan harga yang lebih terjangkau, dirancang untuk menyatu harmonis dengan alam sekitar dan menghadirkan suasana hangat yang menenangkan.
        </p>
        <Link
          href="/learnmore"
          className="flex items-center justify-center gap-4 bg-[var(--secondary)] text-[var(--primary)] font-semibold text-xs lg:text-sm xl:text-lg px-4 lg:px-7 xl:px-9 py-1 xl:-mx-[102px] mt-8 w-full xl:w-[300px] max-w-xl rounded-2xl hover:bg-[var(--secondaryhover)] transition"
        >
          <button className="flex items-center gap-4">
            <Lightbulb className="size-3 xl:size-7" />
            Learn More
          </button>
        </Link>
      </div>

      <div className="xl:p-6 pl-27 ">
        <div className="grid grid-cols-2  gap-4 ">
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
