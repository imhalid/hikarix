import { Canvas } from "@react-three/fiber"
import HeaderText from '@/components/ui/header-text'
import Sparkle from '@/components/ui/sparkle'
export default function Header() {


 return (
  <Canvas
   shadows
   className="touch-none"
   camera={{ position: [0, 0, 7], fov: 25 }}

  // In order for two dom nodes to be able to receive events they must share
  // the same source. By re-connecting the canvas to a parent that contains the
  // text content as well as the canvas we do just that.
  >
   <Sparkle />
   <HeaderText />
  </Canvas>
 )
}