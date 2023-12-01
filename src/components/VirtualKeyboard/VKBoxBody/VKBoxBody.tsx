import React from "react";
import styled from "styled-components";
import VkRow from "../VkRow";
import {
  DeleteKey,
  ChangeKey,
  ShiftKey,
  SpaceKey,
  CtrlAltKey,
} from "../SpecialKeys";
import KEYBOARD_LAYOUT from "../KeyboardKeys";

const style: React.CSSProperties = { whiteSpace: "nowrap", userSelect: "none" };

const Wrapper = styled.div.attrs({
  style: { userSelect: "none", direction: "ltr" },
})``;

const Row = styled.div.attrs({ style: style })<{ $justify?: string }>`
  display: flex;
  justify-content: ${(props) => props.$justify};
`;

function KeyRow({ leftKeys, mainKeys, rightKeys }) {
  return (
    <Row $justify={mainKeys.justify}>
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

function VKBoxBody({
  inputRef,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
}) {
  const [isShift, setIsShift] = React.useState(false);
  const [isKorean, setIsKorean] = React.useState(true);
  const [isFocusInput, setIsFocusInput] = React.useState(false);

  const rowConfigs = [
    {
      leftKeys: null,
      mainKeys: {
        keyLayout: KEYBOARD_LAYOUT[0],
        isKorean: isKorean,
        isShift: isShift,
        justify: "center",
      },
      rightKeys: <DeleteKey />,
    },
    {
      leftKeys: null,
      mainKeys: {
        keyLayout: KEYBOARD_LAYOUT[1],
        isKorean: isKorean,
        isShift: isShift,
        justify: "flex-end",
      },
      rightKeys: null,
    },
    {
      leftKeys: <ChangeKey setIsKorean={setIsKorean} />,
      mainKeys: {
        keyLayout: KEYBOARD_LAYOUT[2],
        isKorean: isKorean,
        isShift: isShift,
        justify: "flex-start",
      },
      rightKeys: null,
    },
    {
      leftKeys: <ShiftKey setIsShift={setIsShift} />,
      mainKeys: {
        keyLayout: KEYBOARD_LAYOUT[3],
        isKorean: isKorean,
        isShift: isShift,
        justify: "center",
      },
      rightKeys: <ShiftKey setIsShift={setIsShift} />,
    },
  ];

  React.useEffect(() => {
    document.getElementById("K220")?.setAttribute("style", "width: 47.5px");
  }, []);

  return (
    <Wrapper dir="ltr">
      {rowConfigs.map(({ leftKeys, mainKeys, rightKeys }) => (
        <KeyRow
          key={crypto.randomUUID()}
          leftKeys={leftKeys}
          mainKeys={mainKeys}
          rightKeys={rightKeys}
        />
      ))}
      <Row>
        <CtrlAltKey />
        <SpaceKey />
        <CtrlAltKey />
      </Row>
    </Wrapper>
  );
}

export default React.memo(VKBoxBody);
