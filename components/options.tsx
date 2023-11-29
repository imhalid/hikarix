'use client'
import useStore from '@/zustand/useStore'
import { useOptionsStore, OptionsValues } from '@/zustand/useOptionsStore'
import { useEffect, useState } from 'react'

export default function Options() {


  return (
    <div className={`w-full rounded-md`}>
      <div className='flex flex-col items-start justify-start'>
        <div className='flex flex-row items-start justify-start'>
          <Switch />
        </div>
      </div>
    </div>
  )
}

export const Switch = () => {
  const infinity = useStore(useOptionsStore, (state: OptionsValues) => state.infinity)
  const handleCheckboxChange = () => {
    useOptionsStore.setState({ infinity: !infinity });
  }

  const [infinityValue, setInfinityValue] = useState<Boolean>()
  useEffect(() => {
    const item = localStorage.getItem('infinity-scroll');
    if (item) {
      const parsedItem = JSON.parse(item);
      const infinityValue = parsedItem.state.infinity;
      setInfinityValue(infinityValue)
    }
  }, [infinity])
  return (
    <div className="flex items-center">
      {/* <span className="">
     <svg className='w-6 h-6 text-white' width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h3m6-9v3M7.8 7.8L5.6 5.6m10.6 2.2l2.2-2.2M7.8 16.2l-2.2 2.2M12 12l9 3l-4 2l-2 4z" />
     </svg>
    </span> */}
      <div style={{
        boxShadow: infinityValue ? '0px 0px 20px 5px #79ca6160' : '',
      }} className={`w-20 h-10 scale-75 flex items-center rounded-full transition-all px-1 ${infinityValue ? 'bg-[#79ca61]' : 'bg-neutral-700'}`} onClick={handleCheckboxChange}>
        <div className={`bg-white w-8 h-8 rounded-full shadow-md flex justify-center items-center transition-all transform ${infinityValue ? 'translate-x-10' : 'translate-x-0'}`} >
          {
            infinityValue ? (
              <svg className='w-6 h-6 text-[#436e36]' width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48" d="M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c30 0 56.45-13.18 78-32m48-64s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-29.37 0-56.66 13.75-78 32" />
              </svg>
            ) : (
              <svg className='w-6 h-6 text-neutral-700' width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h3m6-9v3M7.8 7.8L5.6 5.6m10.6 2.2l2.2-2.2M7.8 16.2l-2.2 2.2M12 12l9 3l-4 2l-2 4z" />
              </svg>
            )
          }
        </div>
      </div>
      {/* <span className="">
     <svg className='w-6 h-6 text-white' width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48" d="M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c30 0 56.45-13.18 78-32m48-64s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-29.37 0-56.66 13.75-78 32" />
     </svg>
    </span> */}
      <label className='text-neutral-100 text-xs inline-block'>Infinity Scroll</label>
    </div >
  )
}