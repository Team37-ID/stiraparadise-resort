// hero
import Image from "next/image";
import Link from "next/link";
import { BedDouble, Phone } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full relative aspect-[16/9] pt-20 ">
      <div>
        <Image className="object-cover w-full h-full  " src="/tendaglamping.jpg" alt="Gambar Tenda Glamping" fill />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-12 md:px-24 xl:px-32 py-12">
        <h1 className="text-lg pt-4 md:text-xl md:pt-40 lg:text-2xl lg:pt-60 xl:text-4xl xl:pt-30 font-bold mb-8">Temukan Surga Tropis Anda di Stira ParADIse Resort</h1>
        <h4 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light mb-4 mt-4">Villa Eksotik & Glamping Ekslusif di jantung destinasi wisata Pantai Alfath Stira ParADIse</h4>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 mt-8">
          <Link
            href="/availablerooms"
            className="flex items-center justify-center gap-4 bg-[var(--secondary)] text-[var(--primary)] font-semibold text-xs lg:text-sm xl:text-lg px-24 xl:px-4 py-2 w-full xl:w-[300px] rounded-2xl hover:bg-[var(--secondaryhover)] transition"
          >
            <button className="flex items-center gap-4">
              <BedDouble className="size-3 xl:size-7" />
              See Available Rooms
            </button>
          </Link>
          <Link
            href="/booknow"
            className="flex items-center gap-4 bg-[var(--primary)] text-[var(--secondary)] font-semibold text-xs lg:text-sm xl:text-lg px-24 xl:px-4 py-2 justify-center w-full xl:w-[300px] rounded-2xl hover:bg-[var(--primaryhover)] transition"
          >
            <button className="flex items-center gap-4">
              <Phone className="size-3 xl:size-7" />
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
