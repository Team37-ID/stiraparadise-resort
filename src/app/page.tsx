"use client";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import AboutUs from "./components/aboutus";
import CampGlamArea from "./components/campglampingarea";
import CottageTropis from "./components/cottagetropisCS";
import Testimonial from "./components/testimonial";
import ExperienceAktivitas from "./components/experienceaktivitas";
import Footer from "./components/footer";
import PilihanPenginapan from "./components/pilihanpenginapan";
import Reservasi from "./components/reservasi";

export default function Home() {
  return (
    <div className="font-sans flex flex-col gap-4 items-center justify-center align-middle w-full min-h-screen">
      {/* navbar */}
      <Navbar />

      {/* hero */}
      <Hero />

      {/* about us */}
      <AboutUs />

      {/* Pilihan Fasilitas Penginapan */}
      <PilihanPenginapan />

      {/* Camp & Glamping Area */}
      <CampGlamArea />

      {/* Cottage Tropis (Segera Hadir) */}
      <CottageTropis />

      {/* Experience & Aktivitas */}
      <ExperienceAktivitas />

      {/* Testimonial */}
      <Testimonial />

      {/* Reservasi Sekarang */}
      <Reservasi />

      {/* footer */}
      <Footer />
    </div>
  );
}
