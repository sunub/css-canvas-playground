function handleMouseMove(
  e: MouseEvent,
  position: { cursorX: number; cursorY: number; boxX: number; boxY: number }
) {
  const keyboard = document.getElementById("vk-box")!;
  const moveX = position.cursorX - e.clientX;
  const moveY = position.cursorY - e.clientY;

  if (
    position.boxX - moveX > 0 &&
    position.boxX - moveX < document.body.clientWidth - 495
  ) {
    keyboard.style.left = `${position.boxX - moveX}px`;
  }

  if (
    position.boxY - moveY > 0 &&
    position.boxY - moveY < document.body.clientHeight - 233
  ) {
    keyboard.style.top = `${position.boxY - moveY}px`;
  }
}

function handleMouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  const keyboard = document.getElementById("vk-box")!;
  const startX = e.clientX;
  const startY = e.clientY;

  const boxPosition = keyboard.getBoundingClientRect();
  const boxStartX = boxPosition.x;
  const boxStartY = boxPosition.y;

  const position = {
    cursorX: startX,
    cursorY: startY,
    boxX: boxStartX,
    boxY: boxStartY,
  };

  document.addEventListener("mousemove", (event: MouseEvent) => {
    handleMouseMove(event, position);
  });
}

export { handleMouseDown };
