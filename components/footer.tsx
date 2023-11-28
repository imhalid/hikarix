import Link from "next/link"
import Image from "next/image"

export default function Header() {
 return (
  <footer className="w-full relative md:h-56 h-92 my-10 rounded-2xl overflow-hidden border border-neutral-700 bg-neutral-900">
   <div className="md:flex flex justify-center items-center flex-col-reverse md:flex-row text-white font-bold font-sans h-full">
    <div className="flex flex-col items-center mt-10  z-50 ">
     <p className="text-4xl font-light font-serif">
      Enjoy Watching
     </p>
     <p className="font-serif font-light tracking-wider">
      Explore. Watch. Discuss
     </p>
     <div className="gap-2 flex mt-10 font-light text-white/50 z-50 ">
      <Link href="https://github.com/imhalid/hikarix" className="hover:text-white transition-all" target="_blank">
       Github
      </Link>
      <Link href="https://twitter.com/halidislm" className="hover:text-white transition-all" target="_blank">
       Twitter
      </Link>
      <Link href="mailto:imhalid@icloud.com" className="hover:text-white transition-all" target="_blank">
       Mail
      </Link>
     </div>
    </div>
   </div>

   <div className="h-[266px] w-[500px] absolute lg:visible sm:invisible invisible top-0 left-0">
    <Image src="/giphy-1.gif" layout="" width={500} height={266} alt="gif1" />
   </div>
   <div className="lg:h-[266px] lg:w-[500px] h-60 w-full lg:mt-0 mt-10 lg:absolute relative lg:right-0 lg:top-0">
    <div className="absolute h-full visible lg:hidden top-0 w-full bg-gradient-to-b from-neutral-900 via-transparent to-transparent z-30"></div>
    <Image src="/giphy-3.gif" layout="" width={500} height={266} alt="gif1" className="object-cover w-full" />
   </div>
   <div className="absolute h-[266px] top-0 left-0 lg:visible invisible w-[500px] bg-gradient-to-l from-neutral-900 via-transparent to-transparent z-5"></div>
   <div className="absolute h-[266px] top-0 right-0 lg:visible invisible w-[500px] bg-gradient-to-r from-neutral-900 via-transparent to-transparent z-5"></div>
  </footer>
 )
}