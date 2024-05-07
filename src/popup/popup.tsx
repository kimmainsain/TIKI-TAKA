import React from "react";
import { createRoot } from "react-dom/client";
import { VolumeControl } from "../stories/PianoStories/Piano.button";
import { FinishedKeyboard } from "../stories/PianoStories/Piano.keyboard";
import { RecoilRoot } from "recoil";
import Scene from "../components/background";
import { Canvas } from "@react-three/fiber";
import "./popup.css";
import "../styles/background.css";

const App: React.FC<{}> = () => {
  return (
    <RecoilRoot>
      <div className="background-canvas">
        <Canvas>
          <Scene />
        </Canvas>
      </div>
      <div className="popup-container">
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
