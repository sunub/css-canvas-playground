import React from "react";
import * as Styled from "./Select.styled";

const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  {
    isOpen: boolean;
    toggleOpen: () => void;
  }
>(({ isOpen, toggleOpen }, ref) => {
  return (
    <Styled.Button
      ref={ref}
      $isModalOpen={isOpen}
      onClick={() => {
        toggleOpen();
      }}
    >
      폼을 선택해주세요.
      <Styled.ArrowDownward className="material-icons" $isModalOpen={isOpen}>
        arrow_downward
      </Styled.ArrowDownward>
    </Styled.Button>
  );
});

export default SelectTrigger;
