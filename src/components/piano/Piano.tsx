import React, { useEffect, useState } from "react";
import { WHITE_KEYMAP, BLACK_KEYMAP } from "../../constants/Piano";

const Piano = () => {
  const [note, setNote] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (WHITE_KEYMAP[event.key]) {
        playSound(WHITE_KEYMAP[event.key]);
      } else if (BLACK_KEYMAP[event.key]) {
        playSound(BLACK_KEYMAP[event.key]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const playSound = (note: string) => {
    setNote(note);
    const audio = new Audio(`./PianoMP3/${note}.mp3`);
    audio.play();
    console.log(audio);
  };

  return (
    <div
      style={{
        color: "white",
      }}
    >
      Piano Component {note}
    </div>
  );
};

export default Piano;
