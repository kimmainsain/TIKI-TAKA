import { useEffect, useState } from "react";
import { WHITE_KEYMAP, BLACK_KEYMAP } from "../../constants/Piano";

const combinedKeyMap = [...WHITE_KEYMAP, ...BLACK_KEYMAP];

// activeKeys type
interface ActiveKeys {
  [key: string]: boolean;
}

export const usePianoSound = () => {
  const [activeKeys, setActiveKeys] = useState<ActiveKeys>({});
  
  // 키보드 핸들링
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
