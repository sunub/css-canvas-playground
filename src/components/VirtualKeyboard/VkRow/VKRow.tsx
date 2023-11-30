import React from "react";
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

const style: React.CSSProperties = { whiteSpace: "nowrap", userSelect: "none" };

const Keycap = styled.button.attrs({ type: "button" })`
  border: 1px solid black;
  width: 29px;
  height: 29px;
`;

const Key = styled.span``;

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
            <Key>{isShift ? shiftKey : key}</Key>
          </Keycap>
        ))}
      {Array.isArray(keyLayout.special) &&
        keyLayout.special.map(({ key, shiftKey, id }) => (
          <Keycap key={id} id={id}>
            <Key>{isShift ? shiftKey : key}</Key>
          </Keycap>
        ))}
    </>
  );
}

export default VKRow;
