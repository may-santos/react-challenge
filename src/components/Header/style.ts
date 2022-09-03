import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  display: flex;
  margin-top: 80px;
  margin-bottom: 10px;
  justify-content: space-between;

  span {
    font-weight: 600;
    width: 153px;
    display: flex;
    justify-content: flex-end;
  }
`;

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  line-height: 39px;
  color: #834825;
`;

export const TextLink = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  line-height: 39px;
  text-decoration: underline;
  color: #834825;
  font-size: 12px;
  cursor: pointer;
`;
