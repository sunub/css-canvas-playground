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
      <Styled.Group $top={rect.top} $left={rect.left} $width={rect.width}>
        {children}
      </Styled.Group>,
      document.getElementById("select-root") as HTMLElement
    )
  );
}

function SectionItem({
  item,
  index,
  setIndex,
}: {
  item: string;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { setter } = React.useContext(SelectionContext);

  function handleOnClick() {
    setter();
    setIndex(index);
  }

  return <Styled.Item onClick={handleOnClick}>{item}</Styled.Item>;
}

export { SelectionGroup, SectionItem };
