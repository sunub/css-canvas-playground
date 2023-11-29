import React from "react";
import styled from "styled-components";
import KeyboardHeader from "./KeyboardHeader";

const Background = styled.div`
  width: 100%;
  height: 100%;
`;

const Layout = styled.div`
  position: fixed;
  width: 495px;
  height: 233px;
  background-color: whitesmoke;
`;

function VirtualKeyboard() {
  const keyboardRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const keyboard = keyboardRef.current;

    if (!keyboard) return;
  }, []);

  return (
    <Background>
      <Layout
        ref={keyboardRef}
        style={{
          userSelect: "none",
          top: `${document.body.clientHeight - 233}px`,
          left: `${document.body.clientWidth - 495}px`,
        }}
      >
        <KeyboardHeader keyboardRef={keyboardRef} />
      </Layout>
    </Background>
  );
}

export default VirtualKeyboard;
