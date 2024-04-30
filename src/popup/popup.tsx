import React from "react";
import { createRoot } from "react-dom/client";
import "./popup.css";
import { Button } from "../stories/PianoStories/Piano.button";
import Piano from "../components/piano/Piano";

const App: React.FC<{}> = () => {
  const openNewTab = () => {
    chrome.tabs.create({ url: "https://github.com" });
    // 웹 사이트 하나 구축하기
  };

  return (
    <div>
      <Button
        primary={true}
        backgroundColor="#4CAF50"
        size="medium"
        label="New tab"
        onClick={openNewTab}
      />
      <Button
        primary={true}
        backgroundColor="#4CAF50"
        size="medium"
        label="Turn on"
        onClick={openNewTab}
      />
      <Piano />
    </div>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<App />);
