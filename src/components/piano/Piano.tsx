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
    setNote(note);
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
