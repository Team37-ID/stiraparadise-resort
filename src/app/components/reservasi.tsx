import React, { useState } from "react";
import { Calendar, MessageSquareText, Trash2, Tv } from "lucide-react";
import Link from "next/link";

const Reservasi = () => {
  //jumlah tamu
  const [value, setValue] = useState<number>(0);
  const handleChange = (newValue: number) => {
    setValue(newValue);
  };
  // select
  const [selectedRooms, setSelectedRooms] = useState("");

  return (
    <div className="text-center items-center" id="reservasi">
      <h2 className="text-base lg:text-xl xl:text-3xl text-[var(--primary)] font-bold mb-8 mt-12 md:mt-20 xl:mt-40">Reservasi Sekarang</h2>
      <p className="text-sm lg:text-base xl:text-xl md:mt-4 xl:mt-6">Booking Mudah, Liburan Mewah</p>
      <div className="py-12">
        {/* form nama  */}
        <div className="flex items-stretch relative border border-[var(--primary)] rounded-[30px] overflow-hidden transition-all duration-200 w-full xl:pr-155 mb-4">
          <div className="flex items-center pl-4 pr-2">
            <Tv className="text-[var(--primary)] w-5 h-5" />
          </div>
          <div className="flex flex-col items-start flex-1 relative min-w-0">
            <label htmlFor="nama" className="text-sm text-[var(--primary)] font-medium mt-2 ml-3">
              Nama
            </label>
            <input id="nama" name="nama" type="text" placeholder="Masukkan Nama Anda" className="w-full p-3 pt-1 pb-2 text-sm focus:outline-none " />
          </div>
        </div>

        {/* form check in dan checkout */}
        <div className="flex flex-col xl:flex-row gap-2">
          <div className="flex items-stretch relative border border-[var(--primary)] rounded-[30px] transition-all duration-200 w-full mb-2 xl:mb-4">
            <div className="flex items-center pl-4 pr-2">
              <Calendar className="text-[var(--primary)] w-5 h-5" />
            </div>
            <div className="flex flex-col items-start flex-1 relative min-w-0 z-50">
              <label htmlFor="checkin" className="text-sm text-[var(--primary)] font-medium mt-2 ml-3">
                Check In
              </label>
              <input type="date" className="w-full pt-1 pb-2 pr-5 pl-3 text-sm border-none focus:outline-none" />
            </div>
          </div>

          <div className="flex items-stretch relative border border-[var(--primary)] rounded-[30px] transition-all duration-200 w-full mb-4">
            <div className="flex items-center pl-4 pr-2">
              <Calendar className="text-[var(--primary)] w-5 h-5" />
            </div>
            <div className="flex flex-col items-start flex-1 relative min-w-0 z-50">
              <label htmlFor="checkout" className="text-sm text-[var(--primary)] font-medium mt-2 ml-3">
                Check Out
              </label>
              <input type="date" className="w-full pt-1 pb-2 pr-5 pl-3 text-sm border-none focus:outline-none" />
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-2">
          {/* form tipe penginapan */}
          <div className="flex items-stretch relative border border-[var(--primary)] rounded-[30px] overflow-hidden transition-all duration-200 w-full mb-2 xl:mb-4">
            <div className="flex items-center pl-4 pr-2">
              <Tv className="text-[var(--primary)] w-5 h-5" />
            </div>
            <div className="flex flex-col items-start flex-1 relative min-w-0">
              <label htmlFor="tipepenginapan" className="text-sm text-[var(--primary)] font-medium mt-2 ml-3">
                Tipe Penginapan
              </label>
              <select value={selectedRooms} onChange={(e) => setSelectedRooms(e.target.value)} className=" border-none focus:outline-none pr-6 xl:pr-44">
                <option value="" disabled>
                  Pilih Penginapan Anda
                </option>
                <option value="villa1">Villa 1</option>
                <option value="villa2">Villa 2</option>
                <option value="villa3">Villa 3</option>
                <option value="villa4">Villa 4</option>
              </select>
            </div>
          </div>

          {/* form jumlah tamu */}
          <div className="flex items-stretch relative border border-[var(--primary)] rounded-[30px] overflow-hidden transition-all duration-200 w-full mb-4">
            <div className="flex items-center pl-4 pr-2">
              <Tv className="text-[var(--primary)] w-5 h-5" />
            </div>
            <div className="flex flex-col items-start flex-1 relative min-w-0">
              <label htmlFor="jumlahtamu" className="text-sm text-[var(--primary)] font-medium mt-2 ml-3">
                Jumlah Tamu
              </label>
              <input id="jumlahtamu" type="number" min={0} max={100} value={value} onChange={(e) => handleChange(Number(e.target.value))} placeholder="0" className="w-full p-3 pt-1 pb-2 text-sm border-none focus:outline-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        {/* INI BLM BENER yg clear harus pake usestate gitu, trus onclick apa gitu */}
        <Link
          href="#"
          className="flex items-center justify-center gap-4 bg-[var(--secondary)] text-[var(--primary)] font-semibold text-xs lg:text-sm xl:text-lg px-4 lg:px-7 xl:px-9 py-1 w-full  rounded-2xl hover:bg-[var(--secondaryhover)] transition"
        >
          <button className="flex items-center gap-4">
            <Trash2 className="size-3 xl:size-7" />
            Clear
          </button>
        </Link>
        <Link
          href="/sendonwhatsapp"
          className="flex items-center gap-4 bg-[var(--primary)] text-[var(--secondary)] font-semibold text-xs lg:text-sm xl:text-lg px-4 lg:px-7 xl:px-9 py-1 justify-center w-full  rounded-2xl hover:bg-[var(--primaryhover)] transition"
        >
          <button className="flex items-center gap-4">
            <MessageSquareText className="size-3 xl:size-7" />
            Send On WhatsApp
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Reservasi;
