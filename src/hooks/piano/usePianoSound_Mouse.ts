import { WHITE_KEYMAP, BLACK_KEYMAP } from "../../constants/Piano";

const combinedKeyMap = [...WHITE_KEYMAP, ...BLACK_KEYMAP];

export const usePianoSoundMouse = (key: string) => {
  const keyEntry = combinedKeyMap.find((item) => item.key === key);
  if (keyEntry) {
    playSound(keyEntry.code);
  }
};

const playSound = (note: string) => {
  const audio = new Audio(`./PianoMP3/${note}.mp3`);
  audio.play();
};
