import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 36px;
  height: 25px;
  display: flex;
  justify-content: center;
`;

const LoadingRing = styled.div`
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 23px;
  height: 23px;
  border: 4px solid ${({ theme }) => theme.globalConstants.color.textDark};
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${({ theme }) => theme.globalConstants.color.textDark}
    transparent transparent transparent;
  ${props => props.theme.mediaQueries.medium`
    width: 17px;
    height: 17px;
  `}
  &:nth-child(1) {
    animation-delay: -0.45s;
  }
  &:nth-child(2) {
    animation-delay: -0.3s;
  }
  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

const Spinner: React.FC = () => (
  <Container>
    <LoadingRing />
    <LoadingRing />
    <LoadingRing />
    <LoadingRing />
  </Container>
);

export default Spinner;
