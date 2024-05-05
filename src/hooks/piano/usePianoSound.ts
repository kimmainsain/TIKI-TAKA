import { volumeState } from "../../recoils/volumeState";
import { useRecoilState } from "recoil";
import { useRef, useEffect } from "react";

export const usePianoSound = () => {
  const [volume] = useRecoilState(volumeState);
  const volumeRef = useRef(volume);

  useEffect(() => {
    volumeRef.current = volume;
    console.log("Volume updated to", volume);
  }, [volume]);

  const playSound = (note: string) => {
    const audio = new Audio(`./PianoMP3/${note}.mp3`);
    audio.volume = volumeRef.current;
    audio.play();
  };

  return playSound;
};
