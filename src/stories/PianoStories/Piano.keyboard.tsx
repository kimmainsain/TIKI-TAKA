import React from "react";
import "./Piano.keyboard.styled.css";
import {
  WHITE_KEYMAP,
  BLACK_KEYMAP,
  HIDDEN_KEYMAP,
} from "../../constants/Piano";

type KeyboardProps = {
  label: string;
  isBlack: boolean;
  isEmpty: boolean;
};

export const Keyboard = ({ label, isBlack, isEmpty }: KeyboardProps) => {
  const keyboardClass = `storybook-piano-keyboard ${isBlack ? "storybook-piano-keyboard--black" : "storybook-piano-keyboard--white"} ${isEmpty ? "hidden" : ""}`;
  return (
    <div className={keyboardClass}>
      <div className="label">{label}</div>
      {isBlack && <div className="arrow">↑</div>}
    </div>
  );
};

export const FinishedKeyboard = () => {
  return (
    <div className="storybook-piano-keyboard-container">
      <div className="white-keys">
        {WHITE_KEYMAP.map((item) => (
          <Keyboard
            key={item.key}
            label={item.displayKey}
            isBlack={false}
            isEmpty={false}
          />
        ))}
      </div>
      <div className="black-keys">
        {BLACK_KEYMAP.map((item) => {
          const isEmpty = HIDDEN_KEYMAP.includes(item.key);
          return (
            <Keyboard
              key={item.key}
              label={item.displayKey}
              isBlack={true}
              isEmpty={isEmpty}
            />
          );
        })}
      </div>
    </div>
  );
};
