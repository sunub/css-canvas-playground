import React from "react";
import styled from "styled-components";
import Input from "../components/Input";
import InputProvider from "../components/InputProvider/InputProvider";
import VKBox from "../components/VirtualKeyboard/VKBox";
import VKBoxHeader from "../components/VirtualKeyboard/VKBoxHeader";
import VKBoxBody from "../components/VirtualKeyboard/VKBoxBody";

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
  const keyboardRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!keyboardRef.current) return;

    function handleOpenKeyboard() {
      const vkBox = keyboardRef.current;

      if (!vkBox) return;
      vkBox.style.display =
        vkBox.style.display === "none" ? "inline-block" : "none";
    }

    const vkOpenBtn = document.querySelector(".vk-open-btn");
    vkOpenBtn?.addEventListener("click", handleOpenKeyboard);

    return () => {
      vkOpenBtn?.removeEventListener("click", handleOpenKeyboard);
    };
  }, []);

  return (
    <>
      <Background>
        <InputProvider>
          <Input>
            <Input.TextField ref={inputRef} />
          </Input>
        </InputProvider>
        <VKBox keyboardRef={keyboardRef}>
          <VKBoxHeader inputRef={inputRef} />
          <VKBoxBody inputRef={inputRef} />
        </VKBox>
      </Background>
    </>
  );
}

export default Keyboard;
