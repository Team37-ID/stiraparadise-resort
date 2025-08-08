import { LayoutProvider, Scroller } from "@once-ui-system/core";
import { AirVent, AlarmSmoke, Bath, BedDouble, Fence, Landmark, Phone, Refrigerator, Tv, Users, Wine } from "lucide-react";
import Link from "next/link";
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

  return (
    <div className="flex flex-col items-center text-center mt-12 px-24" id="fasilitas">
      <h2 className="text-base lg:text-xl xl:text-3xl text-[var(--primary)] font-bold mb-4 mt-12 md:mt-20 xl:mt-32">Pilihan Fasilitas Penginapan:</h2>
      <p className="text-sm lg:text-base xl:text-xl md:mt-4 xl:mt-8 mb-8">Berikut informasi tipe kamar, tarif, kapasitas, dan fasilitas yang bisa dipilih:</p>
      {/* RAPIHKAN DAN UBAH2 LAGI */}
      <div className="flex items-center justify-center gap-4  ">
        {/* <CircleArrowLeft className="text-[var(--primary)] size-8 md:size-12 lg:size-16 xl:size-20 " /> */}
        <div className="grid grid-cols-1 px-4 xl:gap-24 w-full max-w-screen">
          <div className="overflow-x-auto w-full">
            <div className="flex gap-4 w-max max-w-screen">
              <LayoutProvider>
                <Scroller fadeColor="transparent">
                  <div className="flex flex-row gap-6 px-4 ">
                    {/* card 1 */}
                    <div className="border-1 border-[var(--primary)] rounded-[30px] overflow-hidden w-full sm:w-[160px] md:w-[310px] xl:w-[400px]">
                      {/* Carousel */}
                      <div className=" w-full h-60 px-2 py-2 xl:h-90">
                        <div className=" w-full h-full rounded-[30px] object-cover overflow-hidden">
                          <Carousel images={images1} autoplayInterval={5000} />
                        </div>
                      </div>

                      {/* Section biru + konten */}
                      <div className="bg-[var(--bgcard)] text-[var(--primary)] border-1 border-[var(--primary)] p-4 rounded-[30px]">
                        <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl underline font-semibold mb-3 text-left">Villa Premium</h2>

                        <div className="grid grid-cols-4 gap-3 items-center justify-center justify-items-left text-sm xl:text-base mb-4">
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <AlarmSmoke />
                            </span>
                            <span>BBQ</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Refrigerator />
                            </span>
                            <span>Kulkas</span>
                          </div>
                          <div className="flex flex-row items-center gap-2 ">
                            <span>
                              <AirVent />
                            </span>
                            <span>AC</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Tv />
                            </span>
                            <span>TV</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Users />
                            </span>
                            <span className="text-left self-start">8-10 Orang</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Bath />
                            </span>
                            <span className="text-left self-start">1 Kamar Mandi</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <BedDouble />
                            </span>
                            <span className="text-left self-start">1 Kamar Tidur</span>
                          </div>
                        </div>

                        <hr className="border-[var(--primary)] opacity-30 mb-4" />

                        <div className="flex items-center justify-between">
                          <div className="text-base lg:text-lg xl:text-xl text-left font-semibold">Rp 1.500.000/malam</div>
                          <Link href="/booknow" className="flex items-center gap-4 bg-[var(--primary)] text-[var(--secondary)] font-semibold rounded-2xl hover:bg-[var(--primaryhover)] transition">
                            <button className="flex items-center justify-center gap-4 bg-[var(--primary)] text-[var(--secondary)] rounded-2xl hover:bg-[var(--primaryhover)] transition xl:px-4 xl:py-2 font-semibold text-base xl:text-lg">
                              <Phone className="size-6 xl:size-9" />
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* card 2 */}
                    <div className="border-1 border-[var(--primary)] rounded-[30px] overflow-hidden w-full sm:w-[160px] md:w-[310px] xl:w-[400px]">
                      {/* Carousel */}
                      <div className=" w-full h-60 px-2 py-2 xl:h-90">
                        <div className=" w-full h-full rounded-[30px] object-cover overflow-hidden">
                          <Carousel images={images2} autoplayInterval={5000} />
                        </div>
                      </div>

                      {/* Section biru + konten */}
                      <div className="bg-[var(--bgcard)] text-[var(--primary)] border-1 border-[var(--primary)] p-4 rounded-[30px]">
                        <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl underline font-semibold mb-3 text-left">Villa Reguler Tipe A</h2>

                        <div className="grid grid-cols-4 gap-3 items-center justify-center justify-items-left text-sm xl:text-base mb-4">
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Landmark />
                            </span>
                            <span>Balkon</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Refrigerator />
                            </span>
                            <span>Kulkas</span>
                          </div>
                          <div className="flex flex-row items-center gap-2 ">
                            <span>
                              <AirVent />
                            </span>
                            <span>AC</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Tv />
                            </span>
                            <span>TV</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Users />
                            </span>
                            <span className="text-left self-start">4-6 Orang</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Bath />
                            </span>
                            <span className="text-left self-start">1 Kamar Mandi</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <BedDouble />
                            </span>
                            <span className="text-left self-start">1 Kamar Tidur</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Wine />
                            </span>
                            <span className="text-left self-start">Mini Bar</span>
                          </div>
                        </div>

                        <hr className="border-[var(--primary)] opacity-30 mb-4" />

                        <div className="flex items-center justify-between">
                          <div className="text-base lg:text-lg xl:text-xl text-left font-semibold">Rp 750.000/malam</div>
                          <Link href="/booknow" className="flex items-center gap-4 bg-[var(--primary)] text-[var(--secondary)] font-semibold rounded-2xl hover:bg-[var(--primaryhover)] transition">
                            <button className="flex items-center justify-center gap-4 bg-[var(--primary)] text-[var(--secondary)] rounded-2xl hover:bg-[var(--primaryhover)] transition xl:px-4 xl:py-2 font-semibold text-base xl:text-lg">
                              <Phone className="size-6 xl:size-9" />
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* card 3 */}
                    <div className="border-1 border-[var(--primary)] rounded-[30px] overflow-hidden w-full sm:w-[160px] md:w-[310px] xl:w-[400px]">
                      {/* Carousel */}
                      <div className=" w-full h-60 px-2 py-2 xl:h-90">
                        <div className=" w-full h-full rounded-[30px] object-cover overflow-hidden">
                          <Carousel images={images3} autoplayInterval={5000} />
                        </div>
                      </div>

                      {/* Section biru + konten */}
                      <div className="bg-[var(--bgcard)] text-[var(--primary)] border-1 border-[var(--primary)] p-4 rounded-[30px]">
                        <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl underline font-semibold mb-2 xl:mb-5 text-left">Villa Reguler Tipe B</h2>

                        <div className="grid grid-cols-3 xl:gap-6 items-center justify-center justify-items-left text-sm xl:text-base mb-5">
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Landmark />
                            </span>
                            <span>Balkon</span>
                          </div>
                          <div className="flex flex-row items-center gap-2 ">
                            <span>
                              <AirVent />
                            </span>
                            <span>AC</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Users />
                            </span>
                            <span className="text-left self-start">2-4 Orang</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Bath />
                            </span>
                            <span className="text-left self-start">1 Kamar Mandi</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <BedDouble />
                            </span>
                            <span className="text-left self-start">1 Kamar Tidur</span>
                          </div>
                        </div>

                        <hr className="border-[var(--primary)] opacity-30 mb-4" />

                        <div className="flex items-center justify-between">
                          <div className="text-base lg:text-lg xl:text-xl text-left font-semibold">Rp 600.000/malam</div>
                          <Link href="/booknow" className="flex items-center gap-4 bg-[var(--primary)] text-[var(--secondary)] font-semibold rounded-2xl hover:bg-[var(--primaryhover)] transition">
                            <button className="flex items-center justify-center gap-4 bg-[var(--primary)] text-[var(--secondary)] rounded-2xl hover:bg-[var(--primaryhover)] transition xl:px-4 xl:py-2 font-semibold text-base xl:text-lg">
                              <Phone className="size-6 xl:size-9" />
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* card 4 */}
                    <div className="border-1 border-[var(--primary)] rounded-[30px] overflow-hidden w-full sm:w-[160px] md:w-[310px] xl:w-[400px]">
                      {/* Carousel */}
                      <div className=" w-full h-60 px-2 py-2 xl:h-90">
                        <div className=" w-full h-full rounded-[30px] object-cover overflow-hidden">
                          <Carousel images={images4} autoplayInterval={5000} />
                        </div>
                      </div>

                      {/* Section biru + konten */}
                      <div className="bg-[var(--bgcard)] text-[var(--primary)] border-1 border-[var(--primary)] p-4 rounded-[30px]">
                        <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl underline font-semibold mb-2 xl:mb-5 text-left">Villa Reguler Tipe C</h2>

                        <div className="grid grid-cols-3 xl:gap-6 items-center justify-center justify-items-left text-sm xl:text-base mb-5">
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Landmark />
                            </span>
                            <span>Balkon</span>
                          </div>
                          <div className="flex flex-row items-center gap-2 ">
                            <span>
                              <AirVent />
                            </span>
                            <span>AC</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Users />
                            </span>
                            <span className="text-left self-start">2 Orang</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Bath />
                            </span>
                            <span className="text-left self-start">1 Kamar Mandi</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <BedDouble />
                            </span>
                            <span className="text-left self-start">1 Kamar Tidur</span>
                          </div>
                        </div>

                        <hr className="border-[var(--primary)] opacity-30 mb-4" />

                        <div className="flex items-center justify-between">
                          <div className="text-base lg:text-lg xl:text-xl text-left font-semibold">Rp 500.000/malam</div>
                          <Link href="/booknow" className="flex items-center gap-4 bg-[var(--primary)] text-[var(--secondary)] font-semibold rounded-2xl hover:bg-[var(--primaryhover)] transition">
                            <button className="flex items-center justify-center gap-4 bg-[var(--primary)] text-[var(--secondary)] rounded-2xl hover:bg-[var(--primaryhover)] transition xl:px-4 xl:py-2 font-semibold text-base xl:text-lg">
                              <Phone className="size-6 xl:size-9" />
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* card 5 */}
                    <div className="border-1 border-[var(--primary)] rounded-[30px] overflow-hidden w-full sm:w-[160px] md:w-[310px] xl:w-[400px]">
                      {/* Carousel */}
                      <div className=" w-full h-60 px-2 py-2 xl:h-90">
                        <div className=" w-full h-full rounded-[30px] object-cover overflow-hidden">
                          <Carousel images={images5} autoplayInterval={5000} />
                        </div>
                      </div>

                      {/* Section biru + konten */}
                      <div className="bg-[var(--bgcard)] text-[var(--primary)] border-1 border-[var(--primary)] p-4 rounded-[30px]">
                        <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl underline font-semibold mb-2 xl:mb-3 text-left">Homestay</h2>

                        <div className="grid grid-cols-3 xl:gap-4 items-center justify-center justify-items-left text-sm xl:text-base mb-3">
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Fence />
                            </span>
                            <span>Teras Mini</span>
                          </div>
                          <div className="flex flex-row items-center gap-2 ">
                            <span>
                              <AirVent />
                            </span>
                            <span>AC</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Users />
                            </span>
                            <span className="text-left self-start">8-10 Orang</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Bath />
                            </span>
                            <span className="text-left self-start">1 Kamar Mandi</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <BedDouble />
                            </span>
                            <span className="text-left self-start">2 Kamar Tidur</span>
                          </div>
                        </div>

                        <hr className="border-[var(--primary)] opacity-30 mb-4" />

                        <div className="flex items-center justify-between">
                          <div className="text-base lg:text-lg xl:text-xl text-left font-semibold">Rp 500.000/malam</div>
                          <Link href="/booknow" className="flex items-center gap-4 bg-[var(--primary)] text-[var(--secondary)] font-semibold rounded-2xl hover:bg-[var(--primaryhover)] transition">
                            <button className="flex items-center justify-center gap-4 bg-[var(--primary)] text-[var(--secondary)] rounded-2xl hover:bg-[var(--primaryhover)] transition xl:px-4 xl:py-2 font-semibold text-base xl:text-lg">
                              <Phone className="size-6 xl:size-9" />
                              Book Now
                            </button>
                          </Link>
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
