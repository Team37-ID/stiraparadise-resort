import { Quote } from "lucide-react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="items-center text-center">
      <h2 className="text-lg md:text-xl xl:text-3xl text-[var(--primary)] font-bold mb-8 mt-12 md:mt-20 xl:mt-32">Testimonial</h2>
      <div className="flex flex-col xl:flex-row  justify-center ">
        <div className="flex flex-col text-center items-center gap-6 pb-10">
          <Image src="/profile.jpg" alt="Image 3" width={60} height={60} className="object-cover items-center justify-center" />
          <Quote size={14} className=" items-center justify-center" />
          <p className="font-light italic text-base md:text-lg xl:text-xl px-8 md:px-32 xl:px-42 ">Salah satu pengalaman glamping terbaik. View pantai luar biasa, villa-nya bersih dan nyaman!</p>
          <Quote size={14} />
          <p className="text-base md:text-lg xl:text-xl ">Indah M., Makassar</p>
        </div>
        <div className="flex flex-col text-center items-center gap-6">
          <Image src="/profile.jpg" alt="Image 3" width={60} height={60} className="object-cover items-center justify-center" />
          <Quote size={14} className=" items-center justify-center" />
          <p className="font-light italic text-base md:text-lg xl:text-xl px-8 md:px-32 xl:px-42">Serasa di Santorini, tapi ini di Sulawesi Selatan. Sunset dinner-nya unforgettable!</p>
          <Quote size={14} />
          <p className="text-base md:text-lg xl:text-xl ">Rahmat R., Jakarta</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
