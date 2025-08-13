import { LayoutProvider, Scroller } from "@once-ui-system/core";
import { AirVent, AlarmSmoke, Bath, BedDouble, Fence, Landmark, Phone, Refrigerator, Tv, Users, Wine } from "lucide-react";
import Carousel from "./carousel";

const PilihanPenginapan = () => {
  const images1 = [
    { src: "/villapremium1.jpg", alt: "Villa Premium 1" },
    { src: "/villapremium2.jpg", alt: "Villa Premium 2" },
    { src: "/villapremium3.jpg", alt: "Villa Premium 3" },
  ];
  const images2 = [
    { src: "/villaregulerA1.jpg", alt: "Villa reguler A 1" },
    { src: "/villaregulerA2.jpg", alt: "Villa reguler A 2" },
    { src: "/villaregulerA3.jpg", alt: "Villa reguler A 3" },
    { src: "/villaregulerA4.jpg", alt: "Villa reguler A 4" },
  ];
  const images3 = [
    { src: "/villaregulerB1.jpg", alt: "Villa reguler B 1" },
    { src: "/villaregulerB2.jpg", alt: "Villa reguler B 2" },
  ];
  const images4 = [
    { src: "/villaregulerC1.jpg", alt: "Villa reguler C 1" },
    { src: "/villaregulerC2.jpg", alt: "Villa reguler C 2" },
  ];
  const images5 = [
    { src: "/homestay1.jpg", alt: "Homestay 1" },
    { src: "/homestay2.jpg", alt: "Homestay 2" },
    { src: "/homestay3.jpg", alt: "Homestay 3" },
    { src: "/homestay4.jpg", alt: "Homestay 4" },
  ];

  //btn book now
  const handleBookNow = () => {
    const pesan = `Halo, saya ingin menanyakan room tipe ...`;
    const url = `https://wa.me/6282188661981?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col items-center text-center mt-12 px-8 md:px-20 xl:px-32" id="fasilitas">
      <h2 className="text-lg md:text-xl xl:text-3xl text-[var(--primary)] font-bold mb-4 mt-12 md:mt-20 xl:mt-32">Pilihan Fasilitas Penginapan:</h2>
      <p className="text-base md:text-lg xl:text-xl md:mt-4 xl:mt-8 mb-8">Berikut informasi tipe kamar, tarif, kapasitas, dan fasilitas yang bisa dipilih:</p>
      <div className="flex items-center justify-center gap-4  ">
        {/* <CircleArrowLeft className="text-[var(--primary)] size-8 md:size-12 xl:size-20 " /> */}
        <div className="grid grid-cols-1 px-4 xl:gap-24 w-full max-w-screen">
          <div className="overflow-x-auto w-full">
            <div className="flex gap-4 w-max max-w-screen">
              <LayoutProvider>
                <Scroller fadeColor="transparent">
                  <div className="flex flex-row gap-6 px-4 ">
                    {/* card 1 */}
                    <div className="border-1 border-[var(--primary)] rounded-[30px] overflow-hidden w-full sm:w-[300px] md:w-[325px] xl:w-[400px]">
                      <div className=" w-full h-60 px-2 py-2 md:h-80 xl:h-90">
                        <div className=" w-full h-full rounded-[28px] object-cover overflow-hidden">
                          <Carousel images={images1} autoplayInterval={5000} />
                        </div>
                      </div>

                      {/* Section biru + konten */}
                      <div className="bg-[var(--bgcard)] text-[var(--primary)] border-1 border-[var(--primary)] p-4 rounded-[30px]">
                        <h2 className="text-base md:text-lg xl:text-2xl underline font-semibold mb-3 text-left">Villa Premium</h2>

                        <div className="grid grid-cols-4 gap-3 items-center justify-center justify-items-left text-xs md:text-sm xl:text-base mb-4">
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <AlarmSmoke className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span>BBQ</span>
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <Refrigerator className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span>Kulkas</span>
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <AirVent className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span>AC</span>
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <Tv className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span>TV</span>
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <Users className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span className="text-left self-start">8-10 Orang</span>
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <Bath className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span className="text-left self-start">1 Kamar Mandi</span>
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <BedDouble className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span className="text-left self-start">1 Kamar Tidur</span>
                          </div>
                        </div>

                        <hr className="border-[var(--primary)] opacity-30 mb-4" />

                        <div className="flex items-center justify-between gap-1">
                          <p className="text-base md:text-lg xl:text-xl text-left font-semibold">Rp1.500.000/malam</p>
                          <button
                            onClick={handleBookNow}
                            className="flex items-center justify-center px-2 gap-2 xl:gap-4 bg-[var(--primary)] text-[var(--secondary)] rounded-2xl hover:bg-[var(--primaryhover)] transition  xl:px-4 md:py-2 font-semibold text-base xl:text-lg"
                          >
                            <Phone className="size-6 xl:size-8" />
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* card 2 */}
                    <div className="border-1 border-[var(--primary)] rounded-[30px] overflow-hidden w-full sm:w-[300px] md:w-[325px] xl:w-[400px]">
                      <div className=" w-full h-60 px-2 py-2 md:h-80 xl:h-90">
                        <div className=" w-full h-full rounded-[28px] object-cover overflow-hidden">
                          <Carousel images={images2} autoplayInterval={5000} />
                        </div>
                      </div>

                      {/* Section biru + konten */}
                      <div className="bg-[var(--bgcard)] text-[var(--primary)] border-1 border-[var(--primary)] p-4 rounded-[30px]">
                        <h2 className="text-base md:text-lg md:text-xl xl:text-2xl underline font-semibold mb-3 text-left">Villa Reguler Tipe A</h2>

                        <div className="grid grid-cols-4 gap-3 items-center justify-center justify-items-left text-xs md:text-sm xl:text-base mb-4">
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <Landmark className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span>Balkon</span>
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <Refrigerator className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span>Kulkas</span>
                          </div>
                          <div className="flex flex-row items-center gap-1 ">
                            <span>
                              <AirVent className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span>AC</span>
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <Tv className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span>TV</span>
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <Users className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span className="text-left self-start">4-6 Orang</span>
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <Bath className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span className="text-left self-start">1 Kamar Mandi</span>
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <BedDouble className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span className="text-left self-start">1 Kamar Tidur</span>
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <Wine className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span className="text-left self-start">Mini Bar</span>
                          </div>
                        </div>

                        <hr className="border-[var(--primary)] opacity-30 mb-4" />

                        <div className="flex items-center justify-between gap-1">
                          <p className="text-base md:text-lg xl:text-xl text-left font-semibold">Rp750.000/malam</p>
                          <button
                            onClick={handleBookNow}
                            className="flex items-center justify-center px-2 gap-2 xl:gap-4 bg-[var(--primary)] text-[var(--secondary)] rounded-2xl hover:bg-[var(--primaryhover)] transition  xl:px-4 md:py-2 font-semibold text-base xl:text-lg"
                          >
                            <Phone className="size-6 xl:size-8" />
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* card 3 */}
                    <div className="border-1 border-[var(--primary)] rounded-[30px] overflow-hidden w-full sm:w-[300px] md:w-[325px] xl:w-[400px]">
                      <div className=" w-full h-60 px-2 py-2 md:h-80 xl:h-90">
                        <div className=" w-full h-full rounded-[28px] object-cover overflow-hidden">
                          <Carousel images={images3} autoplayInterval={5000} />
                        </div>
                      </div>

                      {/* Section biru + konten */}
                      <div className="bg-[var(--bgcard)] text-[var(--primary)] border-1 border-[var(--primary)] p-4 rounded-[30px]">
                        <h2 className="text-base md:text-lg md:text-xl xl:text-2xl underline font-semibold mb-3 md:mb-4 xl:mb-5 text-left">Villa Reguler Tipe B</h2>

                        <div className="grid grid-cols-3 gap-3 md:gap-3 xl:gap-6 items-center justify-center justify-items-left text-xs md:text-sm xl:text-base mb-4 md:mb-8 xl:mb-5">
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <Landmark className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span>Balkon</span>
                          </div>
                          <div className="flex flex-row items-center gap-1 ">
                            <span>
                              <AirVent className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span>AC</span>
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <Users className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span className="text-left self-start">2-4 Orang</span>
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <Bath className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span className="text-left self-start">1 Kamar Mandi</span>
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <BedDouble className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span className="text-left self-start">1 Kamar Tidur</span>
                          </div>
                        </div>

                        <hr className="border-[var(--primary)] opacity-30 mb-4" />

                        <div className="flex items-center justify-between gap-1">
                          <p className="text-base md:text-lg xl:text-xl text-left font-semibold">Rp600.000/malam</p>
                          <button
                            onClick={handleBookNow}
                            className="flex items-center justify-center px-2 gap-2 xl:gap-4 bg-[var(--primary)] text-[var(--secondary)] rounded-2xl hover:bg-[var(--primaryhover)] transition  xl:px-4 md:py-2 font-semibold text-base xl:text-lg"
                          >
                            <Phone className="size-6 xl:size-8" />
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* card 4 */}
                    <div className="border-1 border-[var(--primary)] rounded-[30px] overflow-hidden w-full sm:w-[300px] md:w-[325px] xl:w-[400px]">
                      <div className=" w-full h-60 px-2 py-2 md:h-80 xl:h-90">
                        <div className=" w-full h-full rounded-[28px] object-cover overflow-hidden">
                          <Carousel images={images4} autoplayInterval={5000} />
                        </div>
                      </div>

                      {/* Section biru + konten */}
                      <div className="bg-[var(--bgcard)] text-[var(--primary)] border-1 border-[var(--primary)] p-4 rounded-[30px]">
                        <h2 className="text-base md:text-lg md:text-xl xl:text-2xl underline font-semibold mb-5 xl:mb-5 text-left">Villa Reguler Tipe C</h2>

                        <div className="grid grid-cols-3 gap-3 xl:gap-6 items-center justify-center justify-items-left text-xs md:text-sm xl:text-base mb-6 md:mb-7 xl:mb-5">
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <Landmark className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span>Balkon</span>
                          </div>
                          <div className="flex flex-row items-center gap-1 ">
                            <span>
                              <AirVent className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span>AC</span>
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <Users className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span className="text-left self-start">2 Orang</span>
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <Bath className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span className="text-left self-start">1 Kamar Mandi</span>
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <BedDouble className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span className="text-left self-start">1 Kamar Tidur</span>
                          </div>
                        </div>

                        <hr className="border-[var(--primary)] opacity-30 mb-4" />

                        <div className="flex items-center justify-between gap-1">
                          <p className="text-base md:text-lg xl:text-xl text-left font-semibold">Rp500.000/malam</p>
                          <button
                            onClick={handleBookNow}
                            className="flex items-center justify-center px-2 gap-2 xl:gap-4 bg-[var(--primary)] text-[var(--secondary)] rounded-2xl hover:bg-[var(--primaryhover)] transition  xl:px-4 md:py-2 font-semibold text-base xl:text-lg"
                          >
                            <Phone className="size-6 xl:size-8" />
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* card 5 */}
                    <div className="border-1 border-[var(--primary)] rounded-[30px] overflow-hidden w-full sm:w-[300px] md:w-[325px] xl:w-[400px]">
                      <div className=" w-full h-60 px-2 py-2 md:h-80 xl:h-90">
                        <div className=" w-full h-full rounded-[28px] object-cover overflow-hidden">
                          <Carousel images={images5} autoplayInterval={5000} />
                        </div>
                      </div>

                      {/* Section biru + konten */}
                      <div className="bg-[var(--bgcard)] text-[var(--primary)] border-1 border-[var(--primary)] p-4 rounded-[30px]">
                        <h2 className="text-base md:text-lg md:text-xl xl:text-2xl underline font-semibold mb-3 xl:mb-2 text-left">Homestay</h2>

                        <div className="grid grid-cols-3 gap-3 xl:gap-5 items-center justify-center justify-items-left text-xs md:text-sm xl:text-base mb-4 xl:mb-3">
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <Fence className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span>Teras Mini</span>
                          </div>
                          <div className="flex flex-row items-center gap-1 ">
                            <span>
                              <AirVent className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span>AC</span>
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <Users className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span className="text-left self-start">8-10 Orang</span>
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <Bath className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span className="text-left self-start">1 Kamar Mandi</span>
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <span>
                              <BedDouble className="size-3 md:size-5 xl:size-6" />
                            </span>
                            <span className="text-left self-start">2 Kamar Tidur</span>
                          </div>
                        </div>

                        <hr className="border-[var(--primary)] opacity-30 mb-4" />

                        <div className="flex items-center justify-between gap-1">
                          <p className="text-base md:text-lg xl:text-xl text-left font-semibold">Rp500.000/malam</p>
                          <button
                            onClick={handleBookNow}
                            className="flex items-center justify-center px-2 gap-2 xl:gap-4 bg-[var(--primary)] text-[var(--secondary)] rounded-2xl hover:bg-[var(--primaryhover)] transition  xl:px-4 md:py-2 font-semibold text-base xl:text-lg"
                          >
                            <Phone className="size-6 xl:size-8" />
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Scroller>
              </LayoutProvider>
            </div>
          </div>
        </div>

        {/* <CircleArrowRight className="text-[var(--primary)] size-8 md:size-12 lg:size-16 xl:size-20" /> */}
      </div>
    </div>
  );
};

export default PilihanPenginapan;
