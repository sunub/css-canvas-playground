import React from "react";
import * as Styled from "./Selection.styled";

function SelectionGroup({
  rect,
  children,
}: {
  rect: DOMRect;
  children: React.ReactNode;
}) {
  return (
    <Styled.Group
      $top={rect.top + rect.height}
      $left={rect.left}
      $width={rect.width}
    >
      {children}
    </Styled.Group>
  );
}

export default React.memo(SelectionGroup);
