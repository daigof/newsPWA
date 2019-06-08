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
