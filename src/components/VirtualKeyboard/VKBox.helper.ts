const POSITION = {
  cursorX: 0,
  cursorY: 0,
  boxX: 0,
  boxY: 0,
};

function handleMouseMove(e: MouseEvent) {
  const keyboard = document.getElementById("vk-box")!;
  const moveX = POSITION.cursorX - e.clientX;
  const moveY = POSITION.cursorY - e.clientY;
  if (
    POSITION.boxX - moveX > 0 &&
    POSITION.boxX - moveX < document.body.clientWidth - 495
  ) {
    keyboard.style.left = `${POSITION.boxX - moveX}px`;
  }

  if (
    POSITION.boxY - moveY > 0 &&
    POSITION.boxY - moveY < document.body.clientHeight - 233
  ) {
    keyboard.style.top = `${POSITION.boxY - moveY}px`;
  }
}

function handleMouseDown(
  e: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent
) {
  const keyboard = document.getElementById("vk-box")!;
  const startX = e.clientX;
  const startY = e.clientY;

  const boxPosition = keyboard.getBoundingClientRect();
  const boxStartX = boxPosition.x;
  const boxStartY = boxPosition.y;

  POSITION.cursorX = startX;
  POSITION.cursorY = startY;
  POSITION.boxX = boxStartX;
  POSITION.boxY = boxStartY;

  window.addEventListener("mousemove", (event: MouseEvent) => {
    handleMouseMove(event);
  });
}

export { handleMouseDown, handleMouseMove };
