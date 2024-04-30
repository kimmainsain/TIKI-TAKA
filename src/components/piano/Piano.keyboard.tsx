import React from "react";
import { Keyboard } from "../../stories/PianoStories/Piano.keyboard";
import { KEYMAP } from "../../constants/Piano";
import "./Piano.keyboard.styled.css";

export const keys = Object.entries(KEYMAP).map(([key, value]) => ({
  label: key,
  isBlack: value.includes("-"),
}));

const PianoKeyboard = () => {
  return (
    <div className="piano-container">
      {keys.map((key) => (
        <Keyboard key={key.label} label={key.label} isBlack={key.isBlack} />
      ))}
    </div>
  );
};

export default PianoKeyboard;
