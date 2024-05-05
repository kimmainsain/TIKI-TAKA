export const usePianoSound = (note: string) => {
  const audio = new Audio(`./PianoMP3/${note}.mp3`);
  audio.play();
}