import { AlarmSmoke, Bath, Bed, Fan, FlameKindling, Phone } from "lucide-react";
import Carousel from "./carousel";

const CampGlamArea = () => {
  const images = [
    { src: "/tendaglamping.jpg", alt: "tenda glamping" },
    { src: "/campglamparea.jpg", alt: "camping area" },
    { src: "/apiunggun-exp.jpg", alt: "api unggun" },
  ];

  const handleBookNow = () => {
    const pesan = `Halo, saya ingin menanyakan room tipe Camp & Glamping Area.`;
    const url = `https://wa.me/6282188661981?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col xl:flex-row items-start justify-between gap-8 xl:gap-40 md:ml-10 xl:mr-30">
      <div className="flex flex-col max-w-3xl px-8 md:px-20 xl:px-32">
        <h3 className="text-base md:text-xl xl:text-3xl text-[var(--primary)] underline font-semibold mb-4 mt-12">Camp & Glamping Area</h3>
        <p className="text-base md:text-lg xl:text-xl md:mt-4 xl:mt-8">
          Nikmati malam di bawah taburan bintang dan terbangun dengan semilir angin pantai di tengah rimbunnya pepohonan serta hamparan rumput hijau yang membawa ketenangan langka.
        </p>
        <p className="text-base md:text-lg xl:text-xl md:mt-4 xl:mt-8 my-2">
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
        <p className="text-base md:text-lg xl:text-xl font-bold italic text-[var(--primary)] mb-4 mt-4">Mulai dari Rp 100.000/ malam</p>
        <button
          onClick={handleBookNow}
          className="flex items-center gap-4 bg-[var(--primary)] text-[var(--secondary)] font-semibold text-xs md:text-sm xl:text-lg px-4 md:px-7 xl:px-9 py-2 justify-center w-full xl:w-[300px] max-w-xl rounded-2xl hover:bg-[var(--primaryhover)] transition"
        >
          <Phone className="size-3 xl:size-7" />
          Book Now
        </button>
      </div>
      <div className="w-full h-full flex items-center justify-center mt-10 xl:mt-24 ">
        <div className="h-full w-[250px] md:w-[300px] xl:w-[350px] rounded-[30px] overflow-hidden  ">
          <Carousel images={images} autoplayInterval={5000} />
        </div>
      </div>
    </div>
  );
};

export default CampGlamArea;
