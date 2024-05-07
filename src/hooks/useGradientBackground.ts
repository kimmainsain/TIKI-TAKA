import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

export const GradientBackground = () => {
  const { scene } = useThree();

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const multiple = 1.5;
    canvas.width = window.innerWidth * multiple;
    canvas.height = window.innerHeight * multiple;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createLinearGradient(
        0,
        canvas.height * 0.1,
        0,
        canvas.height * 0.9
      );
      gradient.addColorStop(0, "black");
      gradient.addColorStop(0.4, "#030207");
      gradient.addColorStop(0.8, "#120813");
      gradient.addColorStop(1, "#300620");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    const texture = new THREE.CanvasTexture(canvas);
    scene.background = texture;
  }, [scene]);
};
