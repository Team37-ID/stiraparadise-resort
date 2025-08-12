import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center text-center mt-12 px-8 md:px-20 xl:px-32" id="tentang">
      <h2 className="text-lg md:text-xl xl:text-3xl text-[var(--primary)] font-bold mb-8 mt-12 md:mt-20 xl:mt-32">About Us</h2>
      <h3 className="text-base md:text-xl xl:text-3xl text-[var(--primary)] font-semibold mb-8">Villa Eksotik & Glamping Ekslusif di jantung destinasi wisata Pantai Alfath Stira ParADIse</h3>
      <p className="text-base md:text-lg xl:text-xl md:mt-4 xl:mt-6">
        Stira ParADIse Resort adalah destinasi wisata terpadu yang menghadirkan pengalaman menginap tak terlupakan dalam nuansa alam tepi pantai yang alami melalui tiga konsep utama:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:px-20 xl:px-24 py-8">
        <div className="flex flex-col items-center ">
          <Image src="/villaetnikikonik-rumah.jpeg" alt="Villa Etnik Modern yang Ikonik" width={200} height={100} className="lg:w-[320px] xl:w-[420px] h-auto object-cover" />
          <p className="font-light italic text-sm md:text-base xl:text-xl md:mt-4 xl:mt-6">Villa Etnik Modern yang Ikonik</p>
        </div>
        <div className="flex flex-col items-center ">
          <Image src="/villamodern-rumah.jpeg" alt="Villa Modern Bernuansa Classic" width={200} height={100} className="lg:w-[320px] xl:w-[420px] h-auto object-cover" />
          <p className="font-light italic text-sm md:text-base xl:text-xl md:mt-4 xl:mt-6">Villa Modern Bernuansa Classic</p>
        </div>
        <div className="flex flex-col items-center ">
          <Image src="/cottagetropis-rumah.jpeg" alt="Cottage Tropis Bernuansa Alam" width={200} height={100} className="lg:w-[320px] xl:w-[420px] h-auto object-cover" />
          <p className="font-light italic text-sm md:text-base xl:text-xl md:mt-4 xl:mt-6">Cottage Tropis Bernuansa Alam</p>
        </div>
        <div className="flex flex-col items-center ">
          <Image src="/tendaglamping-crop.jpg" alt="Tenda Camp & Glamping Modern" width={200} height={100} className="lg:w-[320px] xl:w-[420px] h-auto object-cover" />
          <p className="font-light italic text-sm md:text-base xl:text-xl md:mt-4 xl:mt-6">Tenda Camp & Glamping Modern</p>
        </div>
      </div>
      <p className="text-base md:text-lg xl:text-xl">Dikelola oleh Araya Hospitality, kami memadukan kenyamanan, estetika, dan pesona alam dalam satu kawasan eksklusif. Hanya 30 menit dari pusat kota Pinrang.</p>
    </div>
  );
};

export default AboutUs;
