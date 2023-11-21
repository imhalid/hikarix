'use client'
import { Canvas } from "@react-three/fiber"
import HeaderText from '@/components/ui/header-text'
export default function Header() {

 return (
  <div className="w-full h-96">

   <Canvas
    shadows
    camera={{ position: [0, 0, 4], fov: 50 }}
   // In order for two dom nodes to be able to receive events they must share
   // the same source. By re-connecting the canvas to a parent that contains the
   // text content as well as the canvas we do just that.
   >
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
    <HeaderText />
   </Canvas>
  </div>
 )
}