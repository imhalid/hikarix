'use client'
import useStore from '@/zustand/useStore'
import { useOptionsStore, OptionsValues } from '@/zustand/useOptionsStore'

export default function Options() {
 const infinity = useStore(useOptionsStore, (state: OptionsValues) => state.infinity)

 const handleCheckboxChange = () => {
  useOptionsStore.setState({ infinity: !infinity });
 }
 return (
  <div className={`w-full rounded-md p-2 mb-4 bg-neutral-900 border-neutral-800 border`}>
   <div className='flex flex-col items-center justify-center'>
    <div className='flex flex-row items-center justify-center'>
     <input
      className='w-5 h-5 mr-2'
      type='checkbox'
      checked={infinity || false}
      onChange={handleCheckboxChange}
     />
     <label className='text-neutral-100'>Infinity Scroll</label>
    </div>
   </div>
  </div>
 )
}