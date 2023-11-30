import styled from "styled-components";

const Keycap = styled.button.attrs({ type: "button" })`
  border: 1px solid black;
  width: 29px;
  height: 29px;
`;

function DeleteKey({ ...delegated }) {
  return (
    <Keycap id={"K46"} {...delegated}>
      <span>delete</span>
    </Keycap>
  );
}

function ChangeKey({
  setIsKorean,
  ...delegated
}: {
  setIsKorean: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Keycap
      id={"K20"}
      onClick={() => setIsKorean((prev) => !prev)}
      {...delegated}
    >
      <span>한/영</span>
    </Keycap>
  );
}

function ShiftKey({
  setIsShift,
  ...delegated
}: {
  setIsShift: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Keycap
      id={"K16"}
      onClick={() => setIsShift((prev) => !prev)}
      {...delegated}
    >
      <span>Shift</span>
    </Keycap>
  );
}

function BlankKey({ ...delegated }) {
  return (
    <Keycap id={"K9"} {...delegated}>
      <span>Blank</span>
    </Keycap>
  );
}

export { DeleteKey, ChangeKey, ShiftKey, BlankKey };
