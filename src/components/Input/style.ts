import styled from 'styled-components';
import { Input as IInput } from '../../interfaces/input.interface';

export const Input = styled.input<IInput>`
  width: 100%;
  background: ${(props) => props.background};
`;
