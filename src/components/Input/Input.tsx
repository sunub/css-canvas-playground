import React from "react";
import styled from "styled-components";

const Form = styled.form``;

function Input({
  children,
  bottomText,
}: {
  children: React.ReactNode;
  bottomText?: string | null;
}) {
  return (
    <Form>
      <search style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="search-input-text-field">검색창</label>
        {children}
        {bottomText !== null ? <p>{bottomText}</p> : null}
      </search>
    </Form>
  );
}

Input.TextField = React.forwardRef<HTMLInputElement>((props, ref) => {
  const [value, setValue] = React.useState("");

  return (
    <input
      ref={ref}
      id="search-input-text-field"
      type={"search"}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          const currTarget = e.currentTarget;
          currTarget.blur();
        }
      }}
      value={value}
    />
  );
});

export default Input;
