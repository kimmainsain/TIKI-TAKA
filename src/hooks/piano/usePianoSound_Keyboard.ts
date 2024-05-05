import { useEffect, useState } from "react";
import { combinedKeyMap } from "../../constants/Piano";
import type { ActiveKeys } from "../../types/piano";
import { usePianoSound } from "./usePianoSound";

export const usePianoSoundKeyboard = () => {
  const [activeKeys, setActiveKeys] = useState<ActiveKeys>({});
  const playSound = usePianoSound();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!activeKeys[event.key]) {
        const keyEntry = combinedKeyMap.find((item) => item.key === event.key);
        if (keyEntry) {
          playSound(keyEntry.code);
          setActiveKeys((prevKeys) => ({ ...prevKeys, [event.key]: true }));
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
};
