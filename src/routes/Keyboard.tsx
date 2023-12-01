import React from "react";
import VKBox from "../components/VirtualKeyboard/VKBox";
import styled from "styled-components";
import Input from "../components/Input";
import InputProvider from "../components/InputProvider/InputProvider";

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: oklch(96.88% 0.015 294.47);
`;

function Keyboard() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <Background>
      <InputProvider>
        <VKBox inputRef={inputRef} />
        <Input>
          <Input.TextField ref={inputRef} />
        </Input>
      </InputProvider>
    </Background>
  );
}

export default Keyboard;
