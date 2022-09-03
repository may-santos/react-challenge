import { Container, Text } from './style';
import React from 'react';
import { Note as INote } from '../../interfaces/note.interface';

export default function Note(props: INote) {
  return (
    <Container>
      <Text>{props.text}</Text>
    </Container>
  );
}
