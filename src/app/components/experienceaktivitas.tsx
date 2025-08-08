import Image from "next/image";

const ExperienceAktivitas = () => {
  return (
    <div className="items-center text-center">
      <h2 className="text-base lg:text-xl xl:text-3xl text-[var(--primary)] font-bold mb-8 mt-12 md:mt-20 xl:mt-32">Experience & Aktivitas</h2>
      <p className="text-sm lg:text-base xl:text-xl md:mt-4 xl:mt-8 mb-8">Lebih dari Sekadar Menginap - Ini Gaya Hidup!</p>
      <div className="flex flex-row items-start grid sm:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 pb-24 px-32">
        {/* aktivitas 1 */}
        <div className="flex flex-col items-center ">
          <div className="w-[200] h-[150] overflow-hidden rounded-[10px]">
            <Image src="/sunsetview-exp.jpg" alt="Sunset View Point di tepi pantai" width={250} height={150} className="object-cover w-full h-full" />
          </div>
          <p className="text-sm lg:text-base xl:text-xl ">Sunset View Point di tepi pantai</p>
        </div>
        {/* aktivitas 2 */}
        <div className="flex flex-col items-center">
          <div className="w-[200] h-[150] overflow-hidden rounded-[10px]">
            <Image src="/joggingtrack-exp.jpg" alt="Jogging track, Volley Beach & Sunrise Walk" width={250} height={150} className="object-cover w-full h-full" />
          </div>
          <p className="text-sm lg:text-base xl:text-xl ">Jogging track, Volley Beach & Sunrise Walk</p>
        </div>
        {/* aktivitas 3 */}
        <div className="flex flex-col items-center ">
          <div className="w-[200] h-[150] overflow-hidden rounded-[10px]">
            <Image src="/apiunggun-exp.jpg" alt="Api Unggun & Etnik Cinema" width={250} height={150} className="object-cover w-full h-full" />
          </div>
          <p className="text-sm lg:text-base xl:text-xl ">Api Unggun & Etnik Cinema</p>
        </div>
        {/* aktivitas 4 */}
        <div className="flex flex-col items-center">
          <div className="w-[200] h-[150] overflow-hidden rounded-[10px]">
            <Image src="/livemusic-exp.jpg" alt="Live Music & Gathering Eksklusif" width={250} height={150} className="object-cover w-full h-full" />
          </div>
          <p className="text-sm lg:text-base xl:text-xl ">Live Music & Gathering Eksklusif</p>
        </div>
        {/* aktivitas 5 */}
        <div className="flex flex-col items-center ">
          <div className="w-[200] h-[150] overflow-hidden rounded-[10px]">
            <Image src="/divesnorkling-exp.jpg" alt="Dive & Snorkling Discovery (coming soon)" width={250} height={150} className="object-cover w-full h-full" />
          </div>
          <p className="text-sm lg:text-base xl:text-xl ">Dive & Snorkling Discovery (coming soon)</p>
        </div>
        {/* aktivitas 6 */}
        <div className="flex flex-col items-center">
          <div className="w-[200] h-[150] overflow-hidden rounded-[10px]">
            <Image src="/spamassage-exp.jpg" alt="Spa & Massage For Healthness" width={250} height={150} className="object-cover w-full h-full" />
          </div>
          <p className="text-sm lg:text-base xl:text-xl ">Spa & Massage For Healthness</p>
        </div>
        {/* aktivitas 7 */}
        <div className="flex flex-col items-center ">
          <div className="w-[200] h-[150] overflow-hidden rounded-[10px]">
            <Image src="/turumkm-exp.jpg" alt="Tur UMKM dan kerajinan khas Pinrang (coming soon)" width={250} height={150} className="object-cover w-full h-full" />
          </div>
          <p className="text-sm lg:text-base xl:text-xl ">Tur UMKM dan kerajinan khas Pinrang (coming soon)</p>
        </div>
        {/* aktivitas 8 */}
        <div className="flex flex-col items-center">
          <div className="w-[200] h-[150] overflow-hidden rounded-[10px]">
            <Image src="/sundaymarket-exp.jpg" alt="Sunday Market dengan produk lokal (comming soon)" width={250} height={150} className="object-cover w-full h-full" />
          </div>
          <p className="text-sm lg:text-base xl:text-xl ">Sunday Market dengan produk lokal (comming soon)</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceAktivitas;
