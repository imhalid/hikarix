export default function Header() {
 return (
  <footer className="w-full relative h-96 p-5 my-10 rounded-3xl border border-neutral-800 bg-neutral-200" style={{
   // background: 'linear-gradient(225deg, oklch(58.54% 0.062 218.86 / 13.53%) 0%, oklch(15.3% 0.062 218.86 / 13.53%) 100%)',
   // boxShadow: '0px 0px 25px 0px oklch(58.54% 0.062 218.86 / 33.53%) inset'
  }}>
   <div className="flex text-neutral-900 font-bold font-sans h-full">
    <div className="flex flex-col justify-between h-full">

     <p className="text-4xl mt-auto flex justify-center h-full items-baseline">
      HIKARIX
     </p>
     <p className="">
      2023
     </p>
    </div>
   </div>

  </footer>
 )
}