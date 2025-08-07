import { Carousel, LayoutProvider, Scroller } from "@once-ui-system/core";
import { Phone, Tv } from "lucide-react";
import Link from "next/link";

const PilihanPenginapan = () => {
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
                    {/* YG CARD 1 JGN LUPA NANTI DI COPY KE CARD  2 DAN 3, DST */}
                    <div className="border-1 border-[var(--primary)] rounded-[30px] overflow-hidden w-full sm:w-[160px] md:w-[310px] xl:w-[400px]">
                      {/* Carousel */}
                      <div className="relative w-full h-40 px-2 py-2 md:h-60 xl:h-80">
                        <div className="w-full h-full rounded-[30px] object-cover">
                          <Carousel
                            aspectRatio="4/3"
                            items={[
                              { slide: "/villapremium1.jpg", alt: "Villa Premium 1" },
                              { slide: "/villapremium2.jpg", alt: "Villa Premium 2" },
                              { slide: "/villapremium3.jpg", alt: "Villa Premium 3" },
                              { slide: "/villapremium4.jpg", alt: "Villa Premium 4" },
                            ]}
                            className=" rounded-[28px] overflow-hidden"
                          />
                        </div>
                      </div>

                      {/* Section biru + konten */}
                      <div className="bg-[var(--bgcard)] text-[var(--primary)] border-1 border-[var(--primary)] p-4 rounded-[30px]">
                        <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl underline font-semibold mb-3 text-left">Villa Premium</h2>

                        <div className="grid grid-cols-4 gap-3 justify-items-left text-sm xl:text-base mb-4">
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Tv />
                            </span>
                            <span>BBQ</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Tv />
                            </span>
                            <span>Kulkas</span>
                          </div>
                          <div className="flex flex-row items-center gap-2 ">
                            <span>
                              <Tv />
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
                              <Tv />
                            </span>
                            <span className="text-left self-start">8-10 Orang</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Tv />
                            </span>
                            <span className="text-left self-start">1 Kamar Mandi</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Tv />
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
                      <div className="relative w-full h-40 px-2 py-2 md:h-60 xl:h-80">
                        <div className="w-full h-full rounded-[30px]">
                          <Carousel
                            aspectRatio="4/3"
                            items={[
                              { slide: "/cottagetropis-rumah.jpeg", alt: "rumah 1" },
                              { slide: "/tendaglamping.jpg", alt: "rumah 1" },
                            ]}
                            className="w-full h-full rounded-[28px] overflow-hidden"
                          />
                        </div>
                      </div>

                      {/* Section biru + konten */}
                      <div className="bg-[var(--bgcard)] text-[var(--primary)] border-1 border-[var(--primary)] p-4 rounded-[30px]">
                        <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl underline font-semibold mb-3 text-left">Villa Premium 2</h2>

                        <div className="grid grid-cols-4 gap-3 justify-items-left text-sm xl:text-base mb-4">
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Tv />
                            </span>
                            <span>BBQ</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Tv />
                            </span>
                            <span>Kulkas</span>
                          </div>
                          <div className="flex flex-row items-center gap-2 ">
                            <span>
                              <Tv />
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
                              <Tv />
                            </span>
                            <span className="text-left self-start">8-10 Orang</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Tv />
                            </span>
                            <span className="text-left self-start">1 Kamar Mandi</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Tv />
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

                    {/* card 3 */}
                    <div className="border-1 border-[var(--primary)] rounded-[30px] overflow-hidden w-full sm:w-[160px] md:w-[310px] xl:w-[400px]">
                      {/* Carousel */}
                      <div className="relative w-full h-40 px-2 py-2 md:h-60 xl:h-80">
                        <div className="w-full h-full rounded-[30px]">
                          <Carousel
                            aspectRatio="4/3"
                            items={[
                              { slide: "/cottagetropis-rumah.jpeg", alt: "rumah 1" },
                              { slide: "/tendaglamping.jpg", alt: "rumah 1" },
                            ]}
                            className="w-full h-full rounded-[28px] overflow-hidden"
                          />
                        </div>
                      </div>

                      {/* Section biru + konten */}
                      <div className="bg-[var(--bgcard)] text-[var(--primary)] border-1 border-[var(--primary)] p-4 rounded-[30px]">
                        <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl underline font-semibold mb-3 text-left">Villa Premium 3</h2>

                        <div className="grid grid-cols-4 gap-3 justify-items-left text-sm xl:text-base mb-4">
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Tv />
                            </span>
                            <span>BBQ</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Tv />
                            </span>
                            <span>Kulkas</span>
                          </div>
                          <div className="flex flex-row items-center gap-2 ">
                            <span>
                              <Tv />
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
                              <Tv />
                            </span>
                            <span className="text-left self-start">8-10 Orang</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Tv />
                            </span>
                            <span className="text-left self-start">1 Kamar Mandi</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Tv />
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

                    {/* card 4 */}
                    <div className="border-1 border-[var(--primary)] rounded-[30px] overflow-hidden w-full sm:w-[160px] md:w-[310px] xl:w-[400px]">
                      {/* Carousel */}
                      <div className="relative w-full h-40 px-2 py-2 md:h-60 xl:h-80">
                        <div className="w-full h-full rounded-[30px]">
                          <Carousel
                            aspectRatio="4/3"
                            items={[
                              { slide: "/cottagetropis-rumah.jpeg", alt: "rumah 1" },
                              { slide: "/tendaglamping.jpg", alt: "rumah 1" },
                            ]}
                            className="w-full h-full rounded-[28px] overflow-hidden"
                          />
                        </div>
                      </div>

                      {/* Section biru + konten */}
                      <div className="bg-[var(--bgcard)] text-[var(--primary)] border-1 border-[var(--primary)] p-4 rounded-[30px]">
                        <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl underline font-semibold mb-3 text-left">Villa Premium 4</h2>

                        <div className="grid grid-cols-4 gap-3 justify-items-left text-sm xl:text-base mb-4">
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Tv />
                            </span>
                            <span>BBQ</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Tv />
                            </span>
                            <span>Kulkas</span>
                          </div>
                          <div className="flex flex-row items-center gap-2 ">
                            <span>
                              <Tv />
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
                              <Tv />
                            </span>
                            <span className="text-left self-start">8-10 Orang</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Tv />
                            </span>
                            <span className="text-left self-start">1 Kamar Mandi</span>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span>
                              <Tv />
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
