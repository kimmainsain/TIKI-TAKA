import { useEffect } from "react";
import { WHITE_KEYMAP, BLACK_KEYMAP } from "../../constants/Piano";

const combinedKeyMap = [...WHITE_KEYMAP, ...BLACK_KEYMAP];

export const usePianoSound = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const keyEntry = combinedKeyMap.find((item) => item.key === event.key);
      if (keyEntry) {
        playSound(keyEntry.code);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const playSound = (note: string) => {
    const audio = new Audio(`./PianoMP3/${note}.mp3`);
    audio.play();
  };
};
