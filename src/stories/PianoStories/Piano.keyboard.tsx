import React from "react";
import "./Piano.keyboard.styled.css";
import {
  WHITE_KEYMAP,
  BLACK_KEYMAP,
  HIDDEN_KEYMAP,
} from "../../constants/Piano";
import { usePianoSound } from "../../hooks/piano/usePianoSound";
import { usePianoInteraction } from "../../hooks/piano/usePianoInteracion";

type KeyboardProps = {
  keyValue: string;
  label: string;
  isBlack: boolean;
  isEmpty: boolean;
  propOnClick?: () => void;
};

export const Keyboard = ({
  keyValue,
  label,
  isBlack,
  isEmpty,
  propOnClick,
}: KeyboardProps) => {
  const activeKeys = usePianoInteraction();
  const isActive = activeKeys[keyValue];

  const keyboardClass = `storybook-piano-keyboard ${isBlack ? "storybook-piano-keyboard--black" : "storybook-piano-keyboard--white"} ${isEmpty ? "hidden" : ""} ${isActive ? "active" : ""}`;
  return (
    <div className={keyboardClass} onClick={propOnClick}>
      <div className="label">{label}</div>
      {isBlack && <div className="arrow">↑</div>}
    </div>
  );
};

export const FinishedKeyboard = () => {
  const { handleKeyClick } = usePianoSound();
  return (
    <div className="storybook-piano-keyboard-container">
      <div className="white-keys">
        {WHITE_KEYMAP.map((item) => (
          <Keyboard
            key={item.key}
            keyValue={item.key}
            label={item.displayKey}
            isBlack={false}
            isEmpty={false}
            propOnClick={() => {
              handleKeyClick(item.key);
            }}
          />
        ))}
      </div>
      <div className="black-keys">
        {BLACK_KEYMAP.map((item) => {
          const isEmpty = HIDDEN_KEYMAP.includes(item.key);
          return (
            <Keyboard
              key={item.key}
              keyValue={item.key}
              label={item.displayKey}
              isBlack={true}
              isEmpty={isEmpty}
              propOnClick={() => {
                handleKeyClick(item.key);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
