import { AlarmSmoke, Bath, Bed, Fan, FlameKindling, Phone } from "lucide-react";
import Link from "next/link";
import Carousel from "./carousel";

const CampGlamArea = () => {
  const images = [
    { src: "/villapremium1.jpg", alt: "Villa Premium 1" },
    { src: "/villapremium2.jpg", alt: "Villa Premium 2" },
    { src: "/villapremium3.jpg", alt: "Villa Premium 3" },
  ];
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-8 xl:gap-40 xl:mr-30">
      <div className="flex flex-col max-w-3xl px-24">
        <h3 className="text-base lg:text-xl xl:text-3xl text-[var(--primary)] underline font-semibold mb-4 mt-12">Camp & Glamping Area</h3>
        <p className="text-sm lg:text-base xl:text-xl md:mt-4 xl:mt-8">
          Nikmati malam di bawah taburan bintang dan terbangun dengan semilir angin pantai di tengah rimbunnya pepohonan serta hamparan rumput hijau yang membawa ketenangan langka.
        </p>
        <p className="text-sm lg:text-base xl:text-xl md:mt-4 xl:mt-8 my-2">
          <span className="text-[var(--primary)] mb-2">
            Fasilitas:
            <br />
          </span>
          <span className="flex gap-4 mb-1 ">
            <Fan className="text-[var(--primary)]" /> Kipas Angin
          </span>
          <span className="flex gap-4 mb-1 ">
            <Bed className="text-[var(--primary)]" /> Sleeping Matras
          </span>
          <span className="flex gap-4 mb-1 ">
            <Bath className="text-[var(--primary)]" /> Kamar Mandi
          </span>
          <span className="flex gap-4 mb-1 ">
            <AlarmSmoke className="text-[var(--primary)]" /> Barbaque Set
          </span>
          <span className="flex gap-4 ">
            <FlameKindling className="text-[var(--primary)]" /> Api Unggun
          </span>
        </p>
        <h4 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold italic text-[var(--primary)] mb-4 mt-4">Mulai dari Rp 100.000/ malam</h4>
        <Link
          href="/booknow"
          className="flex items-center gap-4 bg-[var(--primary)] text-[var(--secondary)] font-semibold text-xs lg:text-sm xl:text-lg px-4 lg:px-7 xl:px-9 py-1 justify-center w-full xl:w-[300px] max-w-xl rounded-2xl hover:bg-[var(--primaryhover)] transition"
        >
          <button className="flex items-center gap-4">
            <Phone className="size-3 xl:size-7" />
            Book Now
          </button>
        </Link>
      </div>
      <div className="w-full w-[250px] xl:w-[350px] mt-24 ">
        <div className="w-full h-full rounded-[30px] overflow-hidden  ">
          <Carousel images={images} autoplayInterval={5000} />
        </div>
      </div>
    </div>
  );
};

export default CampGlamArea;
