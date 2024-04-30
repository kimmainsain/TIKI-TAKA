import React from "react";
import { createRoot } from "react-dom/client";
import "./popup.css";
// import { Button } from "../stories/PianoStories/Piano.button";
import Piano from "../components/piano/Piano";
import { FinishedKeyboard } from "../stories/PianoStories/Piano.keyboard";

const App: React.FC<{}> = () => {
  return (
    <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
    >
      {/* <Button
        primary={true}
        backgroundColor="#4CAF50"
        size="medium"
        label="New tab"
        onClick={void 0}
      />
      <Button
        primary={true}
        backgroundColor="#4CAF50"
        size="medium"
        label="Turn on"
        onClick={void 0}
      /> */}
      <Piano />
      <FinishedKeyboard />
    </div>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<App />);
