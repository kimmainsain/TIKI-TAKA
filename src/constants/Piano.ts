export const ORIGIN_KEYMAP = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
export const WHITE_KEYMAP = [
  { key: "1", code: "Digit1", displayKey: "1", note: "C3" },
  { key: "2", code: "Digit2", displayKey: "2", note: "D3" },
  { key: "3", code: "Digit3", displayKey: "3", note: "E3" },
  { key: "4", code: "Digit4", displayKey: "4", note: "F3" },
  { key: "5", code: "Digit5", displayKey: "5", note: "G3" },
  { key: "6", code: "Digit6", displayKey: "6", note: "A3" },
  { key: "7", code: "Digit7", displayKey: "7", note: "B3" },
  { key: "8", code: "Digit8", displayKey: "8", note: "C4" },
  { key: "9", code: "Digit9", displayKey: "9", note: "D4" },
  { key: "0", code: "Digit0", displayKey: "0", note: "E4" },
  { key: "q", code: "Keyq", displayKey: "q", note: "F4" },
  { key: "w", code: "Keyw", displayKey: "w", note: "G4" },
  { key: "e", code: "Keye", displayKey: "e", note: "A4" },
  { key: "r", code: "Keyr", displayKey: "r", note: "B4" },
  { key: "t", code: "Keyt", displayKey: "t", note: "C5" },
  { key: "y", code: "Keyy", displayKey: "y", note: "D5" },
  { key: "u", code: "Keyu", displayKey: "u", note: "E5" },
  { key: "i", code: "Keyi", displayKey: "i", note: "F5" },
  { key: "o", code: "Keyo", displayKey: "o", note: "G5" },
  { key: "p", code: "Keyp", displayKey: "p", note: "A5" },
  { key: "a", code: "Keya", displayKey: "a", note: "B5" },
  { key: "s", code: "Keys", displayKey: "s", note: "C6" },
  { key: "d", code: "Keyd", displayKey: "d", note: "D6" },
  { key: "f", code: "Keyf", displayKey: "f", note: "E6" },
  { key: "g", code: "Keyg", displayKey: "g", note: "F6" },
  { key: "h", code: "Keyh", displayKey: "h", note: "G6" },
  { key: "j", code: "Keyj", displayKey: "j", note: "A6" },
  { key: "k", code: "Keyk", displayKey: "k", note: "B6" },
  { key: "l", code: "Keyl", displayKey: "l", note: "C7" },
  { key: "z", code: "Keyz", displayKey: "z", note: "D7" },
  { key: "x", code: "Keyx", displayKey: "x", note: "E7" },
  { key: "c", code: "Keyc", displayKey: "c", note: "F7" },
  { key: "v", code: "Keyv", displayKey: "v", note: "G7" },
  { key: "b", code: "Keyb", displayKey: "b", note: "A7" },
  { key: "n", code: "Keyn", displayKey: "n", note: "B7" },
  { key: "m", code: "Keym", displayKey: "m", note: "C8" },
];

export const HIDDEN_KEYMAP = [
  "#",
  "&",
  ")",
  "R",
  "U",
  "A",
  "F",
  "K",
  "X",
  "N",
  "M",
];

export const BLACK_KEYMAP = [
  { key: "!", code: "Digit1-1", displayKey: "1", note: "C#3" },
  { key: "@", code: "Digit2-2", displayKey: "2", note: "D#3" },
  { key: "#", code: "hidden", displayKey: "3", note: "E3" }, // Hidden
  { key: "$", code: "Digit4-4", displayKey: "4", note: "F#3" },
  { key: "%", code: "Digit5-5", displayKey: "5", note: "G#3" },
  { key: "^", code: "Digit6-6", displayKey: "6", note: "A#3" },
  { key: "&", code: "hidden", displayKey: "7", note: "B3" }, // Hidden
  { key: "*", code: "Digit8-8", displayKey: "8", note: "C#4" },
  { key: "(", code: "Digit9-9", displayKey: "9", note: "D#4" },
  { key: ")", code: "hidden", displayKey: "0", note: "E4" }, // Hidden
  { key: "Q", code: "KeyQ-Q", displayKey: "Q", note: "F#4" },
  { key: "W", code: "KeyW-W", displayKey: "W", note: "G#4" },
  { key: "E", code: "KeyE-E", displayKey: "E", note: "A#4" },
  { key: "R", code: "hidden", displayKey: "R", note: "B4" }, // Hidden
  { key: "T", code: "KeyT-T", displayKey: "T", note: "C#5" },
  { key: "Y", code: "KeyY-Y", displayKey: "Y", note: "D#5" },
  { key: "U", code: "hidden", displayKey: "U", note: "E5" }, // Hidden
  { key: "I", code: "KeyI-I", displayKey: "I", note: "F#5" },
  { key: "O", code: "KeyO-O", displayKey: "O", note: "G#5" },
  { key: "P", code: "KeyP-P", displayKey: "P", note: "A#5" },
  { key: "A", code: "hidden", displayKey: "A", note: "B5" }, // Hidden
  { key: "S", code: "KeyS-S", displayKey: "S", note: "C#6" },
  { key: "D", code: "KeyD-D", displayKey: "D", note: "D#6" },
  { key: "F", code: "hidden", displayKey: "F", note: "E6" }, // Hidden
  { key: "G", code: "KeyG-G", displayKey: "G", note: "F#6" },
  { key: "H", code: "KeyH-H", displayKey: "H", note: "G#6" },
  { key: "J", code: "KeyJ-J", displayKey: "J", note: "A#6" },
  { key: "K", code: "hidden", displayKey: "K", note: "B6" }, // Hidden
  { key: "L", code: "KeyL-L", displayKey: "L", note: "C#7" },
  { key: "Z", code: "KeyZ-Z", displayKey: "Z", note: "D#7" },
  { key: "X", code: "hidden", displayKey: "X", note: "E7" }, // Hidden
  { key: "C", code: "KeyC-C", displayKey: "C", note: "F#7" },
  { key: "V", code: "KeyV-V", displayKey: "V", note: "G#7" },
  { key: "B", code: "KeyB-B", displayKey: "B", note: "A#7" },
  { key: "N", code: "hidden", displayKey: "N", note: "B7" }, // Hidden
  { key: "M", code: "hidden", displayKey: "M", note: "C8" }, // Hidden
];

export const combinedKeyMap = [...WHITE_KEYMAP, ...BLACK_KEYMAP];
