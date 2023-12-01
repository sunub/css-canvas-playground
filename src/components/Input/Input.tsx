import React from "react";
import styled from "styled-components";
import styles from "./Input.module.css";

const Form = styled.form``;

function Input({ children }: { children: React.ReactNode }) {
  return (
    <Form>
      <search className={styles["search-wrapper"]}>
        <label htmlFor="search-input-text-field">검색창</label>
        {children}
      </search>
    </Form>
  );
}

Input.TextField = React.forwardRef<HTMLInputElement>((props, ref) => {
  return <input ref={ref} id="search-input-text-field" type={"search"} />;
});

export default Input;
