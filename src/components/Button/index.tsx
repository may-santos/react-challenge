import React from 'react';
import { Button as IButton } from '../../interfaces/button.interface';
import { Button as ButtonStyled } from './style';

export const Button: React.FC<IButton> = ({
  title,
  icon = null,
  isOutline = false,
  onClick,
}: IButton) => {
  return (
    <ButtonStyled icon={icon} isOutline={isOutline} onClick={onClick}>
      {icon && <img alt="Icon Button" src={icon} />}
      {title}
    </ButtonStyled>
  );
};
