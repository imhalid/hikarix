import { Sparkles } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
export default function Sparkle() {
  const scale = Array.from({ length: 100 }, () => Math.random() * 0.5 + 0.5);

  const [opacity, setOpacity] = useState(0);

  useFrame(() => {
    if (opacity < 1) setOpacity(opacity + 0.01);
  });
  return (
    <Sparkles
      count={scale.length}
      size={2}
      position={[0, 0.9, 0]}
      scale={[10, 5, 10]}
      speed={0.3}
      opacity={opacity}
    />
  );
}
