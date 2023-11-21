'use client'
import { Text3D, Center, PresentationControls, useMatcapTexture } from "@react-three/drei"
import Bebas from '@/public/Bebas.json'
export default function Header() {

 const [matcap] = useMatcapTexture("C7B9A1_F8F1E4_EEE4D2_E4D8C4")
 return (
  <PresentationControls
   snap
   global
   zoom={1}
   // rotation={[0, -Math.PI / 90, 0]}
   polar={[0, Math.PI / 4]}
   azimuth={[-Math.PI / 4, Math.PI / 4]}
  >
   <Center>
    <Text3D
     position={[0, 0, 0]}
     font={Bebas}
     fontSize={10}
     curveSegments={32}
     bevelEnabled
     bevelSize={0.04}
     bevelThickness={0.1}
     height={0.01}
     lineHeight={0.5}
     letterSpacing={0.01}
    >
     HIKARIX
     <meshMatcapMaterial
      attach="material"
      matcap={matcap}
     />
    </Text3D>
   </Center>
  </PresentationControls >
 )
}