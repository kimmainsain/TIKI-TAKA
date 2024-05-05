import { combinedKeyMap } from "../../constants/Piano";
import { usePianoSound } from "./usePianoSound";

export const usePianoSoundMouse = () => {
  const playSound = usePianoSound();

  const handleClick = (key: string) => {
    const keyEntry = combinedKeyMap.find((item) => item.key === key);
    if (keyEntry) {
      playSound(keyEntry.code);
    }
  };

  return handleClick;
};
