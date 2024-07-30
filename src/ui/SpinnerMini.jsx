import styled, { keyframes } from 'styled-components';
import { BiLoaderAlt } from 'react-icons/bi';

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const SpinnerMini = styled(BiLoaderAlt)`
  width: ${(props) => props.size || '2.4rem'};
  height: ${(props) => props.size || '2.4rem'};
  animation: ${rotate} 1.5s infinite linear;
`;

export default SpinnerMini;
