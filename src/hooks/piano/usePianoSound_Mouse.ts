import { combinedKeyMap } from "../../constants/Piano";
import { usePianoSound } from "./usePianoSound";


export const usePianoSoundMouse = (key: string) => {
  const keyEntry = combinedKeyMap.find((item) => item.key === key);
  if (keyEntry) {
    usePianoSound(keyEntry.code);
  }
};
