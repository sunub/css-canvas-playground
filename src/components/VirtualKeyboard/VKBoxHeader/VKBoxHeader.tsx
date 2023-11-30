import React from "react";
import styled from "styled-components";
import { getCursorBasePosition } from "../VKBox.helper";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  cursor: move;
`;

const style: React.CSSProperties = { whiteSpace: "nowrap", userSelect: "none" };

function VKBoxHeader({
  isMouseDown,
  setIsMouseDown,
}: {
  isMouseDown: boolean;
  setIsMouseDown: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [position, setPosition] = React.useState({
    cursorX: 0,
    cursorY: 0,
    boxX: 0,
    boxY: 0,
  });

  React.useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const keyboard = document.getElementById("vk-box")!;

      const moveX = position.cursorX - e.clientX;
      const moveY = position.cursorY - e.clientY;

      const nextPositionX = Math.min(
        Math.max(position.boxX - moveX, 0),
        document.body.clientWidth - 495
      );
      const nextPositionY = Math.min(
        Math.max(position.boxY - moveY, 0),
        document.body.clientHeight - 233
      );

      keyboard.style.left = `${nextPositionX}px`;
      keyboard.style.top = `${nextPositionY}px`;
    }

    if (isMouseDown) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isMouseDown, position]);

  return (
    <Wrapper
      dir="ltr"
      style={style}
      onMouseDown={(e) => {
        const newPosition = getCursorBasePosition(e);
        setPosition(newPosition);
        setIsMouseDown(true);
      }}
    >
      <div>
        <span>keyboard</span>
      </div>
      <button>
        <span className="material-icons">close</span>
      </button>
    </Wrapper>
  );
}

export default VKBoxHeader;
