const ROW1 = [
  { key: "`", shift: "~", id: "K192" },
  { key: "1", shift: "!", id: "K49" },
  { key: "2", shift: "@", id: "K50" },
  { key: "3", shift: "#", id: "K51" },
  { key: "4", shift: "$", id: "K52" },
  { key: "5", shift: "%", id: "K53" },
  { key: "6", shift: "^", id: "K54" },
  { key: "7", shift: "&", id: "K55" },
  { key: "8", shift: "*", id: "K56" },
  { key: "9", shift: "(", id: "K57" },
  { key: "0", shift: ")", id: "K48" },
  { key: "-", shift: "_", id: "K189" },
  { key: "=", shift: "+", id: "K187" },
  { key: "Backspace", id: "K8" },
];

const ROW2 = [
  {
    eng: [
      { key: "q", shift: "Q", id: "K81" },
      { key: "w", shift: "W", id: "K87" },
      { key: "e", shift: "E", id: "K69" },
      { key: "r", shift: "R", id: "K82" },
      { key: "t", shift: "T", id: "K84" },
      { key: "y", shift: "Y", id: "K89" },
      { key: "u", shift: "U", id: "K85" },
      { key: "i", shift: "I", id: "K73" },
      { key: "o", shift: "O", id: "K79" },
      { key: "p", shift: "P", id: "K80" },
    ],
    kor: [
      { key: "ㅈ", shift: "ㅉ", id: "K87" },
      { key: "ㄷ", shift: "ㄸ", id: "K69" },
      { key: "ㄱ", shift: "ㄲ", id: "K82" },
      { key: "ㅅ", shift: "ㅆ", id: "K84" },
      { key: "ㅛ", shift: "ㅛ", id: "K89" },
      { key: "ㅕ", shift: "ㅕ", id: "K85" },
      { key: "ㅑ", shift: "ㅑ", id: "K73" },
      { key: "ㅐ", shift: "ㅒ", id: "K79" },
      { key: "ㅔ", shift: "ㅖ", id: "K80" },
    ],
  },
  { key: "[", shift: "{", id: "K219" },
  { key: "]", shift: "}", id: "K221" },
  { key: "\\", shift: "|", id: "K220" },
];

const ROW3 = [
  { key: "Change", id: "K20" },
  {
    eng: [
      { key: "a", shift: "A", id: "K81" },
      { key: "s", shift: "S", id: "K87" },
      { key: "d", shift: "D", id: "K69" },
      { key: "f", shift: "F", id: "K82" },
      { key: "g", shift: "G", id: "K84" },
      { key: "h", shift: "H", id: "K89" },
      { key: "j", shift: "J", id: "K85" },
      { key: "k", shift: "K", id: "K73" },
      { key: "l", shift: "L", id: "K79" },
    ],
    kor: [
      { key: "ㅁ", id: "K81" },
      { key: "ㄴ", id: "K87" },
      { key: "ㅇ", id: "K69" },
      { key: "ㄹ", id: "K82" },
      { key: "ㅎ", id: "K84" },
      { key: "ㅗ", id: "K89" },
      { key: "ㅓ", id: "K85" },
      { key: "ㅏ", id: "K73" },
      { key: "ㅣ", id: "K79" },
    ],
  },
  { key: ";", shift: ":", id: "K186" },
  { key: "'", shift: '"', id: "K222" },
  { key: "Blank", id: "K9" },
];

const ROW4 = [
  { key: "Shift", id: "K16" },
  {
    eng: [
      { key: "z", shift: "Z", id: "K81" },
      { key: "x", shift: "X", id: "K87" },
      { key: "c", shift: "C", id: "K69" },
      { key: "v", shift: "V", id: "K82" },
      { key: "b", shift: "B", id: "K84" },
      { key: "n", shift: "N", id: "K89" },
      { key: "m", shift: "M", id: "K85" },
    ],
    kor: [
      { key: "ㅋ", id: "K81" },
      { key: "ㅌ", id: "K87" },
      { key: "ㅊ", id: "K69" },
      { key: "ㅍ", id: "K82" },
      { key: "ㅠ", id: "K84" },
      { key: "ㅜ", id: "K89" },
      { key: "ㅡ", id: "K85" },
    ],
  },
  { key: ",", shift: "<", id: "K188" },
  { key: ".", shift: ">", id: "K190" },
  { key: "/", shift: "?", id: "K191" },
  { key: "Shift", id: "K16" },
];

const ROW5 = [
  { key: "CtrlAlt", id: "K273" },
  { key: "Space", id: "K32" },
  { key: "CtrlAlt", id: "K273" },
];

const KEYBOARD_LAYOUT = [ROW1, ROW2, ROW3, ROW4, ROW5];

export default KEYBOARD_LAYOUT;
