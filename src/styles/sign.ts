import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 100%;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-content: normal;
`;

export const Image = styled.div`
  left: 0;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextForgot = styled.a`
  margin-top: 12px;
  margin-bottom: 40px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-decoration-line: underline;
  color: #6e3421;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
