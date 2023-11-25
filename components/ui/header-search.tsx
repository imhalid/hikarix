export default function SearchMovie() {
 return (
  <div

   className="w-full absolute z-1 touch-none top-5 gap-2 flex justify-center z-50 left-0 opacity-100">
   <div style={{
    boxShadow: '0px 0px 5px 2px #3B81F4',
   }} className="relative rounded-xl">
    <input
     type="text"
     className="bg-neutral-700/80 rounded-full outline outline-[1px] outline-neutral-900 text-neutral-400 text-sm w-64 px-4 pl-8 py-1 focus:outline-none"
     placeholder="Search"
    />
    <div className="absolute top-0">
     <svg
      className="fill-current w-4 text-neutral-500 mt-2 ml-2"
      viewBox="0 0 24 24"
     >
      <path
       className="heroicon-ui"
       d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 17 9.5 6.5 6.5 0 1 0 9.5 17c1.86 0 3.54-.8 4.73-2.07l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z"
      />
     </svg>
    </div>
   </div>
  </div>
 )
}