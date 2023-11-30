import React from "react";
import styled from "styled-components";
import VKBoxHeader from "./VKBoxHeader";

const Background = styled.div`
  width: 100%;
  height: 100%;
`;

const Layout = styled.div`
  position: fixed;
  width: 495px;
  height: 233px;
  background-color: black;

  padding: 10px;
  border: 1px solid #ffffff;
`;

function VKBox() {
  const [isMouseDown, setIsMouseDown] = React.useState(false);
  const [clientWidth, setClientWidth] = React.useState(
    document.body.clientWidth
  );
  const [clientHeight, setClientHeight] = React.useState(
    document.body.clientHeight
  );

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setClientWidth(document.body.clientWidth);
      setClientHeight(document.body.clientHeight);
    });

    return window.removeEventListener("resize", () => {
      setClientWidth(document.body.clientWidth);
      setClientHeight(document.body.clientHeight);
    });
  }, []);

  React.useEffect(() => {
    if (isMouseDown) {
      window.addEventListener("mouseup", () => setIsMouseDown(false));
      return () =>
        window.removeEventListener("mouseup", () => setIsMouseDown(false));
    }
  }, [isMouseDown]);

  return (
    <Background>
      <Layout
        id="vk-box"
        style={{
          userSelect: "none",
          top: `${clientHeight - 233}px`,
          left: `${clientWidth - 495}px`,
        }}
        tabIndex={-1}
      >
        <VKBoxHeader
          isMouseDown={isMouseDown}
          setIsMouseDown={setIsMouseDown}
        />
      </Layout>
    </Background>
  );
}

export default VKBox;
