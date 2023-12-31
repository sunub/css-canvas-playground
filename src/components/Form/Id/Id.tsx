import useToggle from "@hooks/use-toggle";
import * as Styled from "../Form.styled";
import VisuallyHidden from "@components/VisuallyHidden";
import React from "react";

function Id({
  setId,
}: {
  setId: React.Dispatch<React.SetStateAction<string>>;
}) {
  console.log("id is rendered");
  const [value, setValue] = React.useState("");
  const [isFocused, toggleIsFocused] = useToggle(false);

  return (
    <Styled.InputWrapper key={"id-wrapper"} $isUpper={true} $isLower={false}>
      <label htmlFor="id">
        <VisuallyHidden>아이디</VisuallyHidden>
      </label>
      <GoogleIcon name="person" isFocused={isFocused} />
      <Styled.Input
        id="id"
        type="text"
        name="id"
        autoComplete={"email"}
        required
        aria-labelledby="insert-user-id"
        onFocus={toggleIsFocused}
        onBlur={toggleIsFocused}
        minLength={6}
        maxLength={20}
        value={value}
        onChange={(e) => {
          setValue(() => e.target.value);
          setId(() => value);
        }}
      />
      <Styled.Placeholder $isFocus={isFocused}>
        <span>{value.length > 0 ? "" : "아이디를 입력해주세요"}</span>
      </Styled.Placeholder>
    </Styled.InputWrapper>
  );
}

const GoogleIcon = ({
  name,
  isFocused,
  ...delegated
}: {
  name: string;
  isFocused: boolean;
}) => {
  const color = isFocused
    ? "oklch(16.73% 0.005 83 / 80%)"
    : "oklch(16.73% 0.005 83 / 20%)";

  return (
    <span className="material-icons" {...delegated} style={{ color }}>
      {name}
    </span>
  );
};

export default React.memo(Id);
