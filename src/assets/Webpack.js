import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const PageStyled = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #000;
`;

const WebpackTitleStyled = styled.h4`
  font-size: 3rem;
  font-weight: 500;
  color: #fff;
`;

const Webpack = () => (
  <PageStyled>
    <WebpackTitleStyled>Webpack 5</WebpackTitleStyled>
  </PageStyled>
);

export default Webpack;
