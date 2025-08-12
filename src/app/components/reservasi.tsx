import React, { useState } from "react";
import { Bed, Calendar, IdCard, MessageSquareText, Trash2, Users } from "lucide-react";

const Reservasi = () => {
  //state
  const [nama, setNama] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  //jumlah tamu
  const [value, setValue] = useState<number>(0);
  const handleChange = (newValue: number) => {
    setValue(newValue);
  };
  // select
  const [selectedRooms, setSelectedRooms] = useState("");

  //send ke WA
  const handleSendWA = () => {
    const pesan = `Halo, saya ingin reservasi
Nama: ${nama}
Check-in: ${checkin}
Check-out: ${checkout}
Tipe Penginapan: ${selectedRooms}
Jumlah Tamu: ${value}`;

    const url = `https://wa.me/6282188661981?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  };

  //clear
  const handleClear = () => {
    setNama("");
    setCheckin("");
    setCheckout("");
    setSelectedRooms("");
    setValue(1);
  };

  return (
    <div className="text-center items-center" id="reservasi">
      <h2 className="text-lg md:text-xl xl:text-3xl text-[var(--primary)] font-bold mb-8 mt-20 md:mt-20 xl:mt-40">Reservasi Sekarang</h2>
      <p className="text-base md:text-lg xl:text-xl md:mt-4 xl:mt-6">Booking Mudah, Liburan Mewah</p>
      <div className="py-12">
        {/* form nama  */}
        <div className="flex items-stretch relative border border-[var(--primary)] rounded-[30px] overflow-hidden transition-all duration-200 w-full xl:pr-155 mb-4">
          <div className="flex items-center pl-4 pr-2">
            <IdCard className="text-[var(--primary)] w-5 h-5" />
          </div>
          <div className="flex flex-col items-start flex-1 relative min-w-0">
            <label htmlFor="nama" className="text-sm text-[var(--primary)] font-medium mt-2 ml-3">
              Nama
            </label>
            <input id="nama" value={nama} onChange={(e) => setNama(e.target.value)} type="text" placeholder="Masukkan Nama Anda" className="w-full p-3 pt-1 pb-2 text-sm focus:outline-none " required />
          </div>
        </div>

        {/* form check in dan checkout */}
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex items-stretch relative border border-[var(--primary)] rounded-[30px] transition-all duration-200 w-full mb-2 xl:mb-4">
            <div className="flex items-center pl-4 pr-2">
              <Calendar className="text-[var(--primary)] w-5 h-5" />
            </div>
            <div className="flex flex-col items-start flex-1 relative min-w-0 z-50">
              <label htmlFor="checkin" className="text-sm text-[var(--primary)] font-medium mt-2 ml-3">
                Check In
              </label>
              <input type="date" value={checkin} onChange={(e) => setCheckin(e.target.value)} className="w-full pt-1 pb-2 pr-5 pl-3 text-sm border-none focus:outline-none" required />
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
              <input type="date" value={checkout} onChange={(e) => setCheckout(e.target.value)} className="w-full pt-1 pb-2 pr-5 pl-3 text-sm border-none focus:outline-none" required />
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-2">
          {/* form tipe penginapan */}
          <div className="flex items-stretch relative border border-[var(--primary)] rounded-[30px] overflow-hidden transition-all duration-200 w-full mb-2 xl:mb-4">
            <div className="flex items-center pl-4 pr-2">
              <Bed className="text-[var(--primary)] w-5 h-5" />
            </div>
            <div className="flex flex-col items-start flex-1 relative min-w-0">
              <label htmlFor="tipepenginapan" className="text-sm text-[var(--primary)] font-medium mt-2 ml-3">
                Tipe Penginapan
              </label>
              <select value={selectedRooms} onChange={(e) => setSelectedRooms(e.target.value)} className="border-none focus:outline-none ml-2 mr-5 md:mr-83 pr-6 xl:pr-44 " required>
                <option value="" disabled>
                  Pilih Penginapan Anda
                </option>
                <option value="villapremium">Villa Premium</option>
                <option value="villaregulerA">Villa Reguler Tipe A</option>
                <option value="villaregulerB">Villa Reguler Tipe B</option>
                <option value="villaregulerC">Villa Reguler Tipe C</option>
                <option value="homestay">Homestay</option>
                <option value="campglampingarea">Camping Glamping Area</option>
              </select>
            </div>
          </div>

          {/* form jumlah tamu */}
          <div className="flex items-stretch relative border border-[var(--primary)] rounded-[30px] overflow-hidden transition-all duration-200 w-full mb-4">
            <div className="flex items-center pl-4 pr-2">
              <Users className="text-[var(--primary)] w-5 h-5" />
            </div>
            <div className="flex flex-col items-start flex-1 relative min-w-0">
              <label htmlFor="jumlahtamu" className="text-sm text-[var(--primary)] font-medium mt-2 ml-3">
                Jumlah Tamu
              </label>
              <input id="jumlahtamu" type="number" min={1} max={100} value={value} onChange={(e) => handleChange(Number(e.target.value))} className="w-full p-3 pt-1 pb-2 text-sm border-none focus:outline-none" required />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse xl:flex-row gap-8">
        <button
          type="button"
          onClick={handleClear}
          className="flex items-center justify-center gap-4 bg-[var(--secondary)] text-[var(--primary)] font-semibold text-xs lg:text-sm xl:text-lg px-4 md:px-7 xl:px-9 py-2 w-full rounded-2xl hover:bg-[var(--secondaryhover)] transition"
        >
          <Trash2 className="size-4 xl:size-7" />
          Clear
        </button>
        <button
          onClick={handleSendWA}
          className="flex items-center gap-4 bg-[var(--primary)] text-[var(--secondary)] font-semibold text-xs lg:text-sm xl:text-lg px-4 md:px-7 xl:px-9 py-2 justify-center w-full  rounded-2xl hover:bg-[var(--primaryhover)] transition"
        >
          <MessageSquareText className="size-4 xl:size-7" />
          Send On WhatsApp
        </button>
      </div>
    </div>
  );
};

export default Reservasi;
