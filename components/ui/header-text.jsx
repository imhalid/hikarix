'use client'
import { useFrame } from '@react-three/fiber'
import { Text3D, Center, PresentationControls, useMatcapTexture } from "@react-three/drei"
import Bebas from '@/public/Bebas.json'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
export default function Header() {

 const [matcap] = useMatcapTexture("C7B9A1_F8F1E4_EEE4D2_E4D8C4")

 // when load font and page is finish loading than show text scale animation
 const ref = useRef()
 useEffect(() => {
  ref.current.visible = false
  const geometry = ref.current.geometry;

  // Geometrinin merkezini hesaplayın
  geometry.computeBoundingBox();
  const boundingBox = geometry.boundingBox;

  // BoundingBox'un merkezini bulun
  const center = new THREE.Vector3();
  boundingBox.getCenter(center);

  // Geometrinin merkezini ayarlayın
  geometry.center();

  // Sonra, nesnenin pozisyonunu, önceden hesaplanan merkeze göre ayarlayın
  ref.current.position.copy(center);
 }, [])

 // Öncelikle nesnenin geometrisini alın veya oluşturun


 useFrame(() => {
  if (ref.current.visible === false) {
   ref.current.visible = true;
   ref.current.scale.set(0, 0, 0);
   ref.current.originalScale = 1;
  }

  // scale değerlerini artır
  if (ref.current.scale.x < 1) {
   ref.current.scale.x += Math.min(Math.sin(0.01), 1 - ref.current.scale.x);
  }
  if (ref.current.scale.y < 1) {
   ref.current.scale.y += Math.min(Math.sin(0.01), 1 - ref.current.scale.y);
  }
  if (ref.current.scale.z < 1) {
   ref.current.scale.z += Math.min(Math.sin(0.01), 1 - ref.current.scale.z);
  }
 })

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
     ref={ref}
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