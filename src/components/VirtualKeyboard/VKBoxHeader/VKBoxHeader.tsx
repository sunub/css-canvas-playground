import React from "react";
import styled from "styled-components";
import { handleMouseDown } from "../VKBox.helper";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  cursor: move;
`;

const style: React.CSSProperties = { whiteSpace: "nowrap", userSelect: "none" };

function VKBoxHeader() {
  return (
    <Wrapper dir="ltr" style={style} onMouseDown={handleMouseDown}>
      <div>
        <span>keyboard</span>
      </div>
      <button>X</button>
    </Wrapper>
  );
}

export default VKBoxHeader;
