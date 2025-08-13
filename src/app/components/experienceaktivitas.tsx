import Image from "next/image";

const ExperienceAktivitas = () => {
  return (
    <div className="items-center text-center">
      <h2 className="text-lg md:text-xl xl:text-3xl text-[var(--primary)] font-bold mb-8 mt-20 md:mt-30 xl:mt-42">Experience & Aktivitas</h2>
      <p className="text-base md:text-lg xl:text-xl md:mt-4 xl:mt-8 mb-8">Lebih dari Sekadar Menginap - Ini Gaya Hidup!</p>
      <div className="flex flex-row items-start grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 pb-24 px-8 md:px-20 xl:px-32">
        {/* aktivitas */}
        <div className="flex flex-col items-center gap-2 ">
          <div className="w-[200] h-[150] overflow-hidden rounded-[10px]">
            <Image src="/sunsetview-exp.jpg" alt="Sunset View Point di tepi pantai" width={250} height={150} className="object-cover w-full h-full" />
          </div>
          <p className=" italic text-sm md:text-base xl:text-xl ">Sunset View Point di tepi pantai</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-[200] h-[150] overflow-hidden rounded-[10px]">
            <Image src="/joggingtrack-exp.jpg" alt="Jogging track, Volley Beach & Sunrise Walk" width={250} height={150} className="object-cover w-full h-full" />
          </div>
          <p className=" italic text-sm md:text-base xl:text-xl ">Jogging track, Volley Beach & Sunrise Walk</p>
        </div>
        <div className="flex flex-col items-center gap-2 ">
          <div className="w-[200] h-[150] overflow-hidden rounded-[10px]">
            <Image src="/apiunggun-exp.jpg" alt="Api Unggun & Etnik Cinema" width={250} height={150} className="object-cover w-full h-full" />
          </div>
          <p className=" italic text-sm md:text-base xl:text-xl ">Api Unggun & Etnik Cinema</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-[200] h-[150] overflow-hidden rounded-[10px]">
            <Image src="/livemusic-exp.jpg" alt="Live Music & Gathering Eksklusif" width={250} height={150} className="object-cover w-full h-full" />
          </div>
          <p className=" italic text-sm md:text-base xl:text-xl ">Live Music & Gathering Eksklusif</p>
        </div>
        <div className="flex flex-col items-center gap-2 ">
          <div className="w-[200] h-[150] overflow-hidden rounded-[10px]">
            <Image src="/divesnorkling-exp.jpg" alt="Dive & Snorkling Discovery (coming soon)" width={250} height={150} className="object-cover w-full h-full" />
          </div>
          <p className=" italic text-sm md:text-base xl:text-xl ">Dive & Snorkling Discovery (coming soon)</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-[200] h-[150] overflow-hidden rounded-[10px]">
            <Image src="/spamassage-exp.jpg" alt="Spa & Massage For Healthness" width={250} height={150} className="object-cover w-full h-full" />
          </div>
          <p className=" italic text-sm md:text-base xl:text-xl ">Spa & Massage For Healthness</p>
        </div>
        <div className="flex flex-col items-center gap-2 ">
          <div className="w-[200] h-[150] overflow-hidden rounded-[10px]">
            <Image src="/turumkm-exp.jpg" alt="Tur UMKM dan kerajinan khas Pinrang (coming soon)" width={250} height={150} className="object-cover w-full h-full" />
          </div>
          <p className=" italic text-sm md:text-base xl:text-xl ">Tur UMKM dan kerajinan khas Pinrang (coming soon)</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-[200] h-[150] overflow-hidden rounded-[10px]">
            <Image src="/sundaymarket-exp.jpg" alt="Sunday Market dengan produk lokal (comming soon)" width={250} height={150} className="object-cover w-full h-full" />
          </div>
          <p className=" italic text-sm md:text-base xl:text-xl ">Sunday Market dengan produk lokal (comming soon)</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceAktivitas;
