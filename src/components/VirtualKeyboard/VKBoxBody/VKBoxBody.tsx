import React from "react";
import styled from "styled-components";
import VkRow from "../VkRow";
import { DeleteKey, ChangeKey, ShiftKey } from "../SpecialKeys";
import KEYBOARD_LAYOUT from "../KeyboardKeys";

const style: React.CSSProperties = { whiteSpace: "nowrap", userSelect: "none" };

const Row = styled.div.attrs({ style: style })`
  display: flex;
  justify-content: center;
`;

function KeyRow({ leftKeys, mainKeys, rightKeys }) {
  return (
    <Row>
      {leftKeys}
      <VkRow
        keyLayout={mainKeys.keyLayout}
        isKorean={mainKeys.isKorean}
        isShift={mainKeys.isShift}
      />
      {rightKeys}
    </Row>
  );
}

function VKBoxBody() {
  const [isShift, setIsShift] = React.useState(false);
  const [isKorean, setIsKorean] = React.useState(true);
  console.log(32);
  const rowConfigs = [
    {
      leftKeys: null,
      mainKeys: {
        keyLayout: KEYBOARD_LAYOUT[0],
        isKorean: isKorean,
        isShift: isShift,
      },
      rightKeys: <DeleteKey />,
    },
    {
      leftKeys: null,
      mainKeys: {
        keyLayout: KEYBOARD_LAYOUT[1],
        isKorean: isKorean,
        isShift: isShift,
      },
      rightKeys: null,
    },
    {
      leftKeys: <ChangeKey setIsKorean={setIsKorean} />,
      mainKeys: {
        keyLayout: KEYBOARD_LAYOUT[2],
        isKorean: isKorean,
        isShift: isShift,
      },
      rightKeys: null,
    },
    {
      leftKeys: <ShiftKey setIsShift={setIsShift} />,
      mainKeys: {
        keyLayout: KEYBOARD_LAYOUT[3],
        isKorean: isKorean,
        isShift: isShift,
      },
      rightKeys: <ShiftKey setIsShift={setIsShift} />,
    },
  ];

  return (
    <div dir="ltr" style={style}>
      {rowConfigs.map(({ leftKeys, mainKeys, rightKeys }) => (
        <KeyRow
          key={crypto.randomUUID()}
          leftKeys={leftKeys}
          mainKeys={mainKeys}
          rightKeys={rightKeys}
        />
      ))}
    </div>
  );
}

export default React.memo(VKBoxBody);
