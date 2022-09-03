import React from 'react';
import { Input as IInput } from '../../interfaces/input.interface';
import { Input as InputStyled } from './style';

export const Input: React.FC<IInput> = ({
  placeholder,
  type,
  onChange,
  background = '#ffffff',
}: IInput) => {
  return (
    <InputStyled
      background={background}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
    />
  );
};
