import styled from 'styled-components';
import { Textarea as ITextarea } from '../../interfaces/textarea.interface';

export const Textarea = styled.textarea<ITextarea>`
  width: 100%;
  height: ${(props) => props.height}px;
  background: ${(props) => props.background};
`;
