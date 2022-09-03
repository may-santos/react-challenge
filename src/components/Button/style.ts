import styled from 'styled-components';
import { Button as ButtonInterface } from '../../interfaces/button.interface';

export const Button = styled.button<ButtonInterface>`
  border: 2px solid #834825;
  border-radius: 40px;
  width: fit-content;
  padding: 11px 59px;
  background: ${(props) => (props.isOutline ? 'none' : '#834825')};
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => (props.isOutline ? '#834825' : '#ffffff')};
  cursor: pointer;
  // button::before {
  //   content: ${(props) => (props.icon ? `url(${props.icon})` : 'none')};
  // }

  img {
    margin-right: 8px;
  }
`;
