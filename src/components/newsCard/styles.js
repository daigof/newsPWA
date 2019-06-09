import { css } from '@emotion/core';
import styled from '@emotion/styled/macro';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';

export const CardStyled = styled(Card)`
  max-width: 345px;
`;

export const ExpandIconButton = styled(IconButton)`
  transition: transform 350ms;
  outline: none;
`;

export const ExpandIconButtonBox = styled.div`
  margin-left: auto;
  ${ExpandIconButton} {
    transform: ${({ expan }) => (expan ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

export const NewsImage = styled.img`
  width: 100%;
  height: auto;
  filter: blur(0.2em);
  transition: filter 0.5s;
`;

export const NewsImageContainer = styled.div`
  width: 100%;
  height: auto;
  ${({ filter }) =>
    filter &&
    css`
      ${NewsImage} {
        filter: blur(0em);
      }
    `};
`;
