import {
  Text3D,
  Center,
  PresentationControls,
  useMatcapTexture,
} from "@react-three/drei";
import Bebas from "@/public/Bebas.json";
import { motion } from "framer-motion-3d";
import { MotionConfig } from "framer-motion";
import { useMemo } from "react";
export default function Header() {
  // const [matcap] = useMatcapTexture("636363_AAAAAA_949494_252525")
  const [matcap] = useMatcapTexture("4E5150_9FA3A3_848C8A_82848C");
  // const [matcap] = useMatcapTexture("4C4C4C_D2D2D2_8F8F8F_ACACAC")

  const text = useMemo(
    () => (
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
        <meshMatcapMaterial attach="material" matcap={matcap} />
      </Text3D>
    ),
    [matcap],
  );

  const transition = {
    type: "spring",
    duration: 0.7,
    bounce: 0.2,
    delay: 0.5,
  };
  return (
    <PresentationControls
      snap
      global
      zoom={1}
      // rotation={[0, -Math.PI / 90, 0]}
      polar={[0, Math.PI / 4]}
      azimuth={[-Math.PI / 4, Math.PI / 4]}
    >
      <MotionConfig transition={transition}>
        <motion.group
          center={[0, 10, 0]}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <Center>{text}</Center>
        </motion.group>
      </MotionConfig>
    </PresentationControls>
  );
}
