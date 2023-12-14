import React from "react";
import * as Styled from "./Selection.styled";
import { SelectionContext } from "./SelectionProvider";

type TriggerProps = {
  name: string;
};

const SelectionTrigger = React.forwardRef<HTMLButtonElement, TriggerProps>(
  (props, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const { value, setter } = React.useContext(SelectionContext);

    return (
      <Styled.Button ref={ref} onClick={setter} $isModalOpen={value}>
        <span>{props.name}</span>
        <Arrow isModalOpen={value} />
      </Styled.Button>
    );
  }
);

function Arrow({ isModalOpen }: { isModalOpen: boolean }) {
  return (
    <Styled.Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-arrow-down"
      $isModalOpen={isModalOpen}
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <polyline points="19 12 12 19 5 12"></polyline>
    </Styled.Svg>
  );
}

export default SelectionTrigger;
