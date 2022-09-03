import React from 'react';
import { Container, ContainerButton } from './style';
import logo from '../../assets/imgs/logo.png';
import { Button } from '../Button';
import { HeaderHome as IHeaderHome } from '../../interfaces/headerhome.interface';

export default function HeaderHome(props: IHeaderHome) {
  return (
    <Container>
      <img alt="logo" src={logo} width="140px" height="30px" />
      {props.hasButton && (
        <ContainerButton>
          <Button
            title={props.textButton}
            icon={props.iconButton}
            isOutline
            onClick={props.actionButton}
          />
        </ContainerButton>
      )}
    </Container>
  );
}
