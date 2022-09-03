import React from 'react';
import { Textarea as ITextarea } from '../../interfaces/textarea.interface';
import { Textarea as TextareaStyled } from './style';

export const Textarea: React.FC<ITextarea> = ({
  placeholder,
  type,
  onChange,
  background = '#ffffff',
  height = 250,
}: ITextarea) => {
  return (
    <TextareaStyled
      height={height}
      background={background}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
    />
  );
};
