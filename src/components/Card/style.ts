import styled from 'styled-components';
import { Card as ICard } from '../../interfaces/card.interface';

export const Card = styled.div<ICard>`
  display: flex;
  flex-direction: row;
  width: 157px;
  margin-bottom: 15px;
  margin-top: 40px;
  height: 214px;
  background: ${(props) => props.background};
  border-radius: 0px 20px 20px 0px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  cursor: pointer;
  h2 {
    display: flex;
    text-align: center;
    align-items: center;
    width: 100%;
    justify-content: center;
    font-family: 'Abhaya Libre', sans-serif;
    word-break: break-word;
    padding: 8px;
  }

  p {
    color: ${(props) => props.textColor};
  }
`;

export const DividerCard = styled.div<ICard>`
  width: 11px;
  background: ${(props) => props.divider};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px 0px 0px 2px;
`;
