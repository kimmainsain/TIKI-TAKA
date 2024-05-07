import React from "react";
import { createRoot } from "react-dom/client";
import "./popup.css";
import { VolumeControl } from "../stories/PianoStories/Piano.button";
import { FinishedKeyboard } from "../stories/PianoStories/Piano.keyboard";
import { RecoilRoot } from "recoil";
import Scene from "../components/background";
import { Canvas } from "@react-three/fiber";

const App: React.FC<{}> = () => {
  return (
    <RecoilRoot>
      <div
        style={{
          position: "fixed",
          zIndex: 0,
          height: "100%",
          width: "100%",
        }}
      >
        <Canvas>
          <Scene />
        </Canvas>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <VolumeControl />
        <FinishedKeyboard />
      </div>
    </RecoilRoot>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<App />);
