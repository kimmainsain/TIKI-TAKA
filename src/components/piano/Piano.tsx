import React, { useEffect, useState } from "react";
import { KEYMAP } from "../../constants/Piano";

const Piano = () => {
  const [note, setNote] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (event) => {
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
    // const url = `/sounds/${note}.mp3`; // note 파일 경로
    // const audio = new Audio(SOUND[note]);
    // audio.play();
    setNote(note);
    // const audio = new Audio("Keyq.mp3");
    // audio.play();
    // const audio2 = new Audio("PianoMP3-white/Digit0.mp3");
    // audio2.play();
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
