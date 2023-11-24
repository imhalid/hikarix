import Clock from "@/components/ui/clock";
import Image from "next/image";
import character from "@/public/character.webp";
export default function Header() {
 return (
  <footer className="w-full relative h-96 my-10 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-200" style={{
   // background: 'linear-gradient(225deg, oklch(58.54% 0.062 218.86 / 13.53%) 0%, oklch(15.3% 0.062 218.86 / 13.53%) 100%)',
   // boxShadow: '0px 0px 25px 0px oklch(58.54% 0.062 218.86 / 33.53%) inset'
  }}>
   <div className="flex text-neutral-900 font-bold font-sans h-full">
    <div className="flex flex-col justify-between h-full">
     <div className="h-full w-72 bg-red-500">
      <Image src={character} alt="character" className="relative bottom-12 scale-100 contrast-150 saturate-50" />
     </div>
    </div>
    <div className="flex flex-col justify-between w-full h-full">
     <div className="flex justify-between w-full p-5 font-light">
      <p className="text-4xl">
       HIKARIX
      </p>
      <p className="">
       2023
      </p>
     </div>
     <div className="flex justify-between w-full p-5 font-light">
      <div>
       Contact
      </div>
      <div>
       <input type="text" className="w-72 h-8 rounded-xl p-2 px-2 text-blue-400 bg-blue-950" />
       <button className="w-24 text-blue-400 h-8 rounded-xl ml-2 bg-blue-950">Send</button>
      </div>
     </div>
    </div>
    {/* <Clock /> */}
   </div>

  </footer>
 )
}