import React from "react";
import styled from "styled-components";
import { InputContext } from "../InputProvider/InputProvider";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const KeyboardIcon = styled.span`
  cursor: pointer;
`;

function Input({
  children,
  bottomText,
}: {
  children: React.ReactNode;
  bottomText?: string | null;
}) {
  return (
    <form>
      <search>
        <label htmlFor="search-input-text-field">검색창</label>
        <InputWrapper>
          {children}
          <KeyboardIcon
            style={{ userSelect: "none" }}
            className="material-icons vk-open-btn"
            onClick={() =>
              document.getElementById("search-input-text-field")?.focus()
            }
          >
            keyboard
          </KeyboardIcon>
        </InputWrapper>
        {bottomText !== null ? <p>{bottomText}</p> : null}
      </search>
    </form>
  );
}

Input.TextField = React.forwardRef<HTMLInputElement>((props, ref) => {
  const [value, setValue] = React.useState("");
  const [_, setIsInputFocused] = React.useContext(InputContext);

  return (
    <input
      ref={ref}
      id="search-input-text-field"
      type={"search"}
      onBlur={() => setIsInputFocused(false)}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          const currTarget = e.currentTarget;
          currTarget.blur();
        }
      }}
      value={value}
      {...props}
    />
  );
});

export default Input;
