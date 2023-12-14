import React from "react";
import { SelectionContext } from "./SelectionProvider";
import * as Styled from "./Selection.styled";
import { createPortal } from "react-dom";

function SelectionGroup({
  rect,
  children,
}: {
  rect: DOMRect;
  children: React.ReactNode;
}) {
  const { value } = React.useContext(SelectionContext);

  return (
    value &&
    createPortal(
      <Styled.Group
        $top={rect.top + rect.height}
        $left={rect.left}
        $width={rect.width}
      >
        {children}
      </Styled.Group>,
      document.getElementById("select-root") as HTMLElement
    )
  );
}

function SectionItem({
  item,
  index,
  currIndex,
  setIndex,
}: {
  item: string;
  index: number;
  currIndex: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { setter } = React.useContext(SelectionContext);

  function handleOnClick() {
    setter();
    setIndex(index);
  }

  return (
    <Styled.ItemWrapper onClick={handleOnClick}>
      {currIndex === index && <Check />}
      <Styled.Item>{item}</Styled.Item>
    </Styled.ItemWrapper>
  );
}

export { SelectionGroup, SectionItem };

function Check() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-check"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}
