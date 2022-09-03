import React from 'react';
import { Container } from './style';
import empty from '../../assets/imgs/empty.png';
import { Empty as IEmpty } from '../../interfaces/empty.interface';

export default function Empty(props: IEmpty) {
  return (
    <>
      <Container>
        <h2>{props.title}</h2>
        <img alt="empty content" src={empty} />
        <span onClick={props.onClick}>{props.textLink}</span>
      </Container>
    </>
  );
}
