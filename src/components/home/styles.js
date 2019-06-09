import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const appLogoSpin = keyframes`
   from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AppLogo = styled.img`
  animation: ${appLogoSpin} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

export const MainBox = styled.div`
  padding-top: 96px;
  padding-bottom: 54px;
`;

export const LoadingBox = styled.div`
  text-align: center;
  margin: 64px auto 0;
`;
