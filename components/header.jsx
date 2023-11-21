'use client'
import { Canvas } from "@react-three/fiber"
import HeaderText from '@/components/ui/header-text'
import { OrbitControls } from "@react-three/drei"
export default function Header() {

 return (
  <div className="w-full h-96 border border-neutral-800 relative rounded-2xl my-5 shadow-inner fill-red-400"

  >

   <div className="w-full h-full absolute top-0 left-0 invert opacity-30" style={{
    backgroundImage: "url('https://blog.1a23.com/wp-content/uploads/sites/2/2020/02/pattern-2.svg')",
   }}>

   </div>
   {/* radial-gradient(circle, rgba(63,94,251,0) 50%, rgba(0,0,0,1) 100%); */}
   <div className="w-full h-full absolute z-1 top-0 left-0 opacity-100" style={{
    background: "radial-gradient(circle, rgba(63,94,251,0) 50%, rgba(0,0,0,1) 100%)",
   }}>
   </div>

   <Canvas
    shadows
    color="#fff"
    camera={{ position: [0, 0, 1.3] }}
   // In order for two dom nodes to be able to receive events they must share
   // the same source. By re-connecting the canvas to a parent that contains the
   // text content as well as the canvas we do just that.
   >
    {/* <OrbitControls /> */}
    <HeaderText />
   </Canvas>
  </div>
 )
}