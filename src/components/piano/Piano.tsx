import React, { useEffect, useState } from "react";
import { KEYMAP } from "../../constants/Piano";

const Piano = () => {
  const [note, setNote] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (KEYMAP[event.key]) {
        playSound(KEYMAP[event.key]);
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
