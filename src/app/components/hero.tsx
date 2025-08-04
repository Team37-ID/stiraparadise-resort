// hero
import Image from "next/image";
import Link from "next/link";
import { BedDouble, Phone } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full relative aspect-[16/9] -mt-[600px] sm:pt-20  ">
      <div className="absolute inset-0">
        <Image className="object-cover w-full h-full  " src="/tendaglamping.jpg" alt="Gambar Tenda Glamping" fill />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-12 md:px-24 xl:px-32 py-12">
        <h1 className="text-3xl pt-4 md:text-4xl md:pt-40 lg:text-5xl lg:pt-60 xl:text-7xl xl:pt-100 font-bold mb-8">Temukan Surga Tropis Anda di Stira ParADIse Resort</h1>
        <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-light mb-4 mt-4">Villa Eksotik & Glamping Ekslusif di jantung destinasi wisata Pantai Alfath Stira ParADIse</h4>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 mt-8">
          <Link
            href="/availablerooms"
            className="flex items-center justify-center gap-4 bg-[var(--secondary)] text-[var(--primary)] font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl px-24 lg:px-36 xl:px-44 py-4 justify-center w-full xl:w-auto max-w-5xl rounded-2xl hover:bg-[var(--secondaryhover)] transition"
          >
            <button className="flex items-center gap-4">
              <BedDouble className="size-7 xl:size-12" />
              See Available Rooms
            </button>
          </Link>
          <Link
            href="/booknow"
            className="flex items-center gap-4 bg-[var(--primary)] text-[var(--secondary)] font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl px-24 lg:px-36 xl:px-44 py-4 justify-center w-full xl:w-auto max-w-5xl rounded-2xl hover:bg-[var(--primaryhover)] transition"
          >
            <button className="flex items-center gap-4">
              <Phone className="size-7 xl:size-12" />
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
