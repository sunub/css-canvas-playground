import styled from "styled-components";

const Keycap = styled.button.attrs({ type: "button" })`
  border: 1px solid black;
  width: 29px;
  height: 29px;
`;

function DeleteKey({ ...delegated }): JSX.Element {
  return (
    <Keycap id={"K46"} {...delegated}>
      <span>delete</span>
    </Keycap>
  );
}

function ChangeKey({ ...delegated }): JSX.Element {
  return (
    <Keycap id={"K20"} {...delegated}>
      <span>한/영</span>
    </Keycap>
  );
}

function ShiftKey({ ...delegated }): JSX.Element {
  return (
    <Keycap id={"K16"} {...delegated}>
      <span>Shift</span>
    </Keycap>
  );
}

function BlankKey({ ...delegated }): JSX.Element {
  return (
    <Keycap id={"K9"} {...delegated}>
      <span>Blank</span>
    </Keycap>
  );
}

export { DeleteKey, ChangeKey, ShiftKey, BlankKey };
