import { useEffect } from "react";
import { WHITE_KEYMAP, BLACK_KEYMAP } from "../../constants/Piano";

const combinedKeyMap = [...WHITE_KEYMAP, ...BLACK_KEYMAP];

export const usePianoSound = () => {

  // 키보드 핸들링
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

  // 마우스 클릭 핸들링
  const handleKeyClick = (key: string) => {
    const keyEntry = combinedKeyMap.find((item) => item.key === key);
    if (keyEntry) {
      playSound(keyEntry.code);
    }
  };

  const playSound = (note: string) => {
    const audio = new Audio(`./PianoMP3/${note}.mp3`);
    audio.play();
  };

  return { handleKeyClick };
};
