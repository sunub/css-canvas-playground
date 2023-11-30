import React from "react";
import styled from "styled-components";
import VKBoxHeader from "./VKBoxHeader";
import VKBoxBody from "./VKBoxBody";

const Background = styled.div`
  width: 100%;
  height: 100%;
`;

const Layout = styled.div`
  position: fixed;
  width: 495px;
  height: 233px;

  display: flex;
  flex-direction: column;

  padding: 10px;
  border: 1px solid #ffffff;
  background-color: oklch(100% 0 0);
`;

function VKBox() {
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
    <Background>
      <Layout
        id="vk-box"
        style={{
          userSelect: "none",
          top: `${position.height - 233}px`,
          left: `${position.width - 495}px`,
        }}
        tabIndex={-1}
      >
        <VKBoxHeader
          isMouseDown={isMouseDown}
          setIsMouseDown={setIsMouseDown}
        />
        <VKBoxBody />
      </Layout>
    </Background>
  );
}

export default VKBox;
