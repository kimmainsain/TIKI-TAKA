import React from "react";
import { createRoot } from "react-dom/client";
import "./popup.css";
// import { Button } from "../stories/PianoStories/Piano.button";
import { FinishedKeyboard } from "../stories/PianoStories/Piano.keyboard";
import { usePianoSound } from "../hooks/piano/usePianoSound";

const App: React.FC<{}> = () => {
  usePianoSound();
  
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FinishedKeyboard />
    </div>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<App />);
