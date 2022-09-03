import React from 'react';
import { SubHeader as ISubHeader } from '../../interfaces/subheader.interface';
import { Container, Title, ContainerButton } from './style';
import icon from '../../assets/imgs/icon.png';
import { Button } from '../Button';

export default function SubHeader(props: ISubHeader) {
  return (
    <Container>
      <img
        onClick={props.actionBackButton}
        alt="icon"
        src={icon}
        width="10px"
        height="18px"
      />
      <Title>{props.title}</Title>
      {props.hasButton && (
        <ContainerButton>
          <Button
            icon={props.iconButton}
            isOutline
            title={props.textButton}
            onClick={props.actionButton}
          />
        </ContainerButton>
      )}
    </Container>
  );
}
