import styled from "styled-components";

type Keys = {
  key: string;
  shiftKey?: string;
  id: string;
};

type Language = {
  kor: Keys[];
  eng: Keys[];
};

type KeyboardLayoutType = {
  word: Keys[] | Language;
  special: Keys[] | null;
};

const Keycap = styled.button.attrs({ type: "button" })`
  border: 1px solid oklch(68.35% 0.017 292.79 / 70%);
  width: 29px;
  height: 29px;
  text-align: center;
  vertical-align: middle;
  margin: 2px;
  position: relative;
  padding: 1px;
  min-width: 0;
  max-width: 500px;
  min-height: 0;
  max-height: 50px;

  &:hover {
    transform: scale(1.3);
    transition: transform 150ms cubic-bezier(0.47, 0.31, 0.25, 0.92);
  }
  background-image: linear-gradient(
    to bottom,
    oklch(98.05% 0 294.47 / 30%) 80%,
    oklch(92.77% 0.009 292.79)
  );
`;

const Key = styled.span`
  font-size: 14px;
  font-family: "NanumFont";
  font-weight: bold;
  line-height: 25px;
`;

function VKRow({
  keyLayout,
  isKorean,
  isShift,
}: {
  keyLayout: KeyboardLayoutType;
  isKorean: boolean;
  isShift: boolean;
}) {
  let words = keyLayout.word;
  if (!Array.isArray(keyLayout.word)) {
    words = isKorean ? keyLayout.word["kor"] : keyLayout.word["eng"];
  }

  return (
    <>
      {Array.isArray(words) &&
        words.map(({ key, shiftKey, id }) => (
          <Keycap key={id} id={id}>
            <Key>{isShift && shiftKey ? shiftKey : key}</Key>
          </Keycap>
        ))}
      {Array.isArray(keyLayout.special) &&
        keyLayout.special.map(({ key, shiftKey, id }) => (
          <Keycap key={id} id={id}>
            <Key>{isShift && shiftKey ? shiftKey : key}</Key>
          </Keycap>
        ))}
    </>
  );
}

export default VKRow;
