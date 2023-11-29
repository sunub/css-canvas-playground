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
  background-color: whitesmoke;
`;

function VKBox() {
  return (
    <Background>
      <Layout
        id="vk-box"
        style={{
          userSelect: "none",
          top: `${document.body.clientHeight - 233}px`,
          left: `${document.body.clientWidth - 495}px`,
        }}
      >
        <VKBoxHeader />
      </Layout>
    </Background>
  );
}

export default VKBox;
