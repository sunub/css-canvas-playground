import React from "react";
import styled from "styled-components";
import VKBoxHeader from "./VKBoxHeader";
import VKBoxBody from "./VKBoxBody";

const Layout = styled.div`
  position: fixed;
  width: 495px;
  height: 233px;

  display: flex;
  flex-direction: column;

  padding: 10px;
  border: 1px solid oklch(14.52% 0.02 0 / 18%);
  border-radius: 10px;
  background-color: oklch(98.05% 0 294.47 / 40%);
  box-shadow: 0.5px 4.5px 3.6px oklch(0% 0 0 / 2.4%),
    1.5px 12.5px 10px oklch(0% 0 0 / 3.5%),
    3.6px 30.1px 24.1px oklch(0% 0 0 / 4.6%), 12px 100px 80px oklch(0% 0 0 / 7%);
`;

function VKBox({ inputRef }: { inputRef: React.RefObject<HTMLInputElement> }) {
  const [isMouseDown, setIsMouseDown] = React.useState(false);
  const [position, setPosition] = React.useState(
    document.body.getBoundingClientRect()
  );

  React.useEffect(() => {
    function handleResize() {
      const newPosition = document.body.getBoundingClientRect();
      setPosition(newPosition);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    const mouseDownHandler = () => setIsMouseDown(false);

    if (isMouseDown) {
      window.addEventListener("mouseup", mouseDownHandler);
      return () => window.removeEventListener("mouseup", mouseDownHandler);
    }
  }, [isMouseDown]);

  return (
    <Layout
      id="vk-box"
      style={{
        userSelect: "none",
        top: `${position.height - 233}px`,
        left: `${position.width - 495}px`,
      }}
      tabIndex={-1}
    >
      <VKBoxHeader isMouseDown={isMouseDown} setIsMouseDown={setIsMouseDown} />
      <VKBoxBody inputRef={inputRef} />
    </Layout>
  );
}

export default VKBox;
