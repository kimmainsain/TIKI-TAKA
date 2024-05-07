import React from "react";
import { Stars, OrbitControls } from "@react-three/drei";
import { GradientBackground } from "../hooks/useGradientBackground";

const Scene = () => {
  GradientBackground();
  return (
    <>
      <OrbitControls
        rotateSpeed={0.5}
        autoRotate={true}
        autoRotateSpeed={0.23}
        enablePan={false}
        enableRotate={false}
        enableDamping={false}
        dampingFactor={0.05}
        enableZoom={false}
      />
      <Stars
        radius={100}
        depth={50}
        count={3000}
        factor={4}
        saturation={3}
        fade
      />
    </>
  );
};

export default Scene;
