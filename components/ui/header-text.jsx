'use client'
import { Text3D, Center, PresentationControls, useMatcapTexture } from "@react-three/drei"
import Vina from '@/public/Vina.json'
export default function Header() {

 const matcap = useMatcapTexture("416BA7_A5B8D0_0D2549_65ABEB")
 return (
  <PresentationControls
   snap={{ mass: 2, tension: 100 }}
   controls
   autoPlay
   rotation={[0, 0, 0]}
   zoom={[2]}
  >
   <Center>
    <Text3D position={[0, 0, 0]} font={Vina} fontSize={0.5} color="#000" anchorX="center" anchorY="middle" castShadow receiveShadow letterSpacing={-0.03}
     height={0.25}
     bevelSize={0.01}
     bevelSegments={10}
     curveSegments={128}
     bevelThickness={0.01}>
     HIKARIX
     <meshStandardMaterial
      attach="material"
      color="#000"
      matcap={matcap}
     />
    </Text3D>
   </Center>
  </PresentationControls>
 )
}