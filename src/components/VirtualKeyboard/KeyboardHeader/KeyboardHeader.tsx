import { key } from "localforage";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  cursor: move;
`;

const style: React.CSSProperties = { whiteSpace: "nowrap", userSelect: "none" };

function KeyboardHeader({
  keyboardRef,
}: {
  keyboardRef: React.RefObject<HTMLDivElement>;
}) {
  const [isMouseDown, setIsMouseDown] = React.useState(false);

  function handleMouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!keyboardRef.current) return;
    const startX = e.clientX;
    const startY = e.clientY;
    const position = keyboardRef.current.getBoundingClientRect();
    function handleMouseMove(e: MouseEvent) {
      if (!keyboardRef.current) return;
      const keyboard = keyboardRef.current;
      const currentX = startX - e.clientX;
      const currentY = startY - e.clientY;

      if (
        position.x - currentX > 0 &&
        position.x - currentX < document.body.clientWidth - 495
      ) {
        keyboard.style.left = `${position.x - currentX}px`;
      }
    }

    document.addEventListener("mousemove", handleMouseMove);
  }

  return (
    <Wrapper dir="ltr" style={style} onMouseDown={handleMouseDown}>
      <div>
        <span>keyboard</span>
      </div>
      <button>X</button>
    </Wrapper>
  );
}

export default KeyboardHeader;
