import React from 'react';
import { Card as ICard } from '../../interfaces/card.interface';
import { Card as CardStyled, DividerCard } from './style';

export default function Card(props: ICard) {
  return (
    <CardStyled
      background={props.background}
      textColor={props.textColor}
      onClick={props.onClick}
    >
      <DividerCard divider={props.divider} />
      <h2>
        <p>{props.text}</p>
      </h2>
    </CardStyled>
  );
}
