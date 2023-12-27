import React from "react";
import * as Styled from "./Selection.styled";

function SectionItem({
  item,
  currSelection,
  handleItemClick,
}: {
  item: string;
  currSelection: boolean;
  handleItemClick: any;
}) {
  return (
    <Styled.ItemWrapper onClick={handleItemClick}>
      {currSelection && <Check />}
      <Styled.Item>{item}</Styled.Item>
    </Styled.ItemWrapper>
  );
}

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

export default React.memo(SectionItem);
