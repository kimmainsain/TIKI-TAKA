import React from "react";
import "./Piano.keyboard.styled.css";

type KeyboardProps = {
  label: string;
  isBlack: boolean;
};

export const Keyboard = ({ label, isBlack }: KeyboardProps) => {
  return (
    <div
      className={`storybook-piano-keyboard ${isBlack ? "storybook-piano-keyboard--black" : "storybook-piano-keyboard--white"}`}
    >
      <div className="label">{label}</div>
      {isBlack && <div className="arrow">↑</div>}
    </div>
  );
};
