import React from 'react';
import { Header as IHeader } from '../../interfaces/header.interface';
import { Container, Title } from './style';

export const Header: React.FC<IHeader> = ({ title, textLink, onClick }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <span onClick={onClick}>{textLink}</span>
    </Container>
  );
};
