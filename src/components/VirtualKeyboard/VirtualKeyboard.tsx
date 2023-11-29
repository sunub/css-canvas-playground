import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 495px;
  height: 233px;
  background-color: black;

  cursor: move;
`;

function VirtualKeyboard() {
  return (
    <Wrapper
      style={{
        userSelect: "none",
        top: "calc(50% - 116.5px)",
        left: "calc(50% - 247.5px)",
      }}
    />
  );
}

export default VirtualKeyboard;
