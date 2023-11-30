import React from "react";
import styled from "styled-components";

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

      const nextPositionX = position.boxX - moveX;
      const nextPositionY = position.boxY - moveY;

      if (nextPositionX < 0) {
        keyboard.style.left = `${0}px`;
      } else if (nextPositionX > document.body.clientWidth - 495) {
        keyboard.style.left = `${document.body.clientWidth - 495}px`;
      } else {
        keyboard.style.left = `${nextPositionX}px`;
      }

      if (nextPositionY < 0) {
        keyboard.style.top = `${0}px`;
      } else if (nextPositionY > document.body.clientHeight - 233) {
        keyboard.style.top = `${document.body.clientHeight - 233}px`;
      } else {
        keyboard.style.top = `${nextPositionY}px`;
      }
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
        const keyboard = document.getElementById("vk-box")!;
        const startX = e.clientX;
        const startY = e.clientY;

        const boxPosition = keyboard.getBoundingClientRect();
        const boxStartX = boxPosition.x;
        const boxStartY = boxPosition.y;

        setPosition((prev) => ({
          ...prev,
          cursorX: startX,
          cursorY: startY,
          boxX: boxStartX,
          boxY: boxStartY,
        }));
        setIsMouseDown(true);
      }}
    >
      <div>
        <span>keyboard</span>
      </div>
      <button>X</button>
    </Wrapper>
  );
}

export default VKBoxHeader;
