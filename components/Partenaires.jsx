import React from "react";
import { components } from "../lang";

const partenaires = [
  {
    name: "AISEC",
    image: "partenaires/AIESEC.png",
  },
  {
    name: "IFM",
    image: "partenaires/IFM.png",
  },
  {
    name: "Institut français Tunisie",
    image: "partenaires/Institut français Tunisie.png",
  },
  {
    name: "Leoni",
    image: "partenaires/Leoni.png",
  },
  {
    name: "pizart",
    image: "partenaires/pizart.png",
  },
  {
    name: "المندوبية الجهوية للتربية",
    image: "partenaires/المندوبية الجهوية للتربية.jfif",
  },
  {
    name: "دار الشباب سيدي بوسعيد",
    image: "partenaires/دار الشباب سيدي بوسعيد.jfif",
  },
];
const Partenaires = ({ language }) => {
  return (
    <div className='w-full my-20 z-10'>
      <div className='flex flex-col items-center gap-4'>
        <div className='font-bold text-lg md:text-4xl '>
          {components.partenaires?.[language]?.title}
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 text-center gap-4 md:gap-5 mx-2 z-10'>
          {partenaires.map((p, i) => (
            <div className='flex flex-col items-center gap-3 p-4  bg-neutral-100 rounded-lg cursor-pointer shadow-xl transition hover:-translate-y-2 hover:bg-neutral-200 relative z-10'>
              <img className='w-20 md:w-32' src={p.image} alt='' />
              <div className='font-semibold'>{p.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partenaires;
