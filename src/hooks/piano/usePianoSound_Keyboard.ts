import { useEffect, useState } from "react";
import { WHITE_KEYMAP, BLACK_KEYMAP } from "../../constants/Piano";
import type { ActiveKeys } from "../../types/piano";

const combinedKeyMap = [...WHITE_KEYMAP, ...BLACK_KEYMAP];

export const usePianoSoundKeyboard = () => {
  const [activeKeys, setActiveKeys] = useState<ActiveKeys>({});

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!activeKeys[event.key]) {
        const keyEntry = combinedKeyMap.find((item) => item.key === event.key);
        if (keyEntry) {
          playSound(keyEntry.code);
          setActiveKeys((prevKeys) => ({ ...prevKeys, [event.key]: true }));
          console.log(activeKeys);
        }
      }
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      if (activeKeys[event.key]) {
        setActiveKeys((prevKeys) => ({ ...prevKeys, [event.key]: false }));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [activeKeys]);

  const playSound = (note: string) => {
    const audio = new Audio(`./PianoMP3/${note}.mp3`);
    audio.play();
  };
};
