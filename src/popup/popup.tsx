import React from "react";
import { createRoot } from "react-dom/client";
import "./popup.css";
import { VolumeControl } from "../stories/PianoStories/Piano.button";
import { FinishedKeyboard } from "../stories/PianoStories/Piano.keyboard";

const App: React.FC<{}> = () => {
  // usePianoKeydownSound();

  return (
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
  );
};

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<App />);
