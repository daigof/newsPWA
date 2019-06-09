import styled from '@emotion/styled/macro';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
// const useStyles = makeStyles(theme => ({
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

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
