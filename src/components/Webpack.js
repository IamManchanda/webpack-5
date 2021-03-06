import React from "react";
import styled, { keyframes } from "styled-components";
import WebpackPng from "../assets/img/webpack.png";
import BackgroundPng from "../assets/img/background.png";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const PageStyled = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${BackgroundPng});
`;

const WebpackTitleStyled = styled.h4`
  font-size: 3rem;
  font-weight: 500;
  color: #fff;
`;

const WebpackLogoStyled = styled.img`
  width: 350px;
  height: 350px;
  animation: ${rotate} linear 10s infinite;
`;

const Webpack = () => {
  const handleClick = () => {
    import(/* webpackChunkName: "_cloneDeep" */ "lodash/cloneDeep").then(
      ({ default: cloneDeep }) => {
        const originalObject = {
          prop1: "prop1",
          prop2: "prop2",
        };
        const clonedObject = cloneDeep(originalObject);
        console.log(clonedObject);
      },
    );
  };

  return (
    <PageStyled>
      <WebpackLogoStyled src={WebpackPng} />
      <WebpackTitleStyled>Webpack 5 App</WebpackTitleStyled>
      <button onClick={handleClick}>Click me</button>
    </PageStyled>
  );
};

export default Webpack;
