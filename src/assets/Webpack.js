import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #000;
`;

const WebpackTitle = styled.h4`
  font-size: 3rem;
  font-weight: 500;
  color: #fff;
`;

export default function Webpack() {
  return (
    <Page>
      <WebpackTitle>Webpack 5</WebpackTitle>
    </Page>
  );
}
