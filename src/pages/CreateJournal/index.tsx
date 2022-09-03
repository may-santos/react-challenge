import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import Card from '../../components/Card';
import HeaderHome from '../../components/HeaderHome';
import { Input } from '../../components/Input';
import http from '../../services/api';
import { Container, ContainerButton } from './style';

interface LocationState {
  idUser: string;
}

export default function CreateJournal() {
  let navigate = useNavigate();
  const [journal, setJournal] = useState('');
  const location = useLocation();
  const state = location.state as LocationState;

  const createJournal = () => {
    if (journal.length === 0) {
      alert('Enter a journal');
    } else {
      http
        .post('/journals/', {
          title: journal,
          userId: state.idUser,
        })
        .then((res) => navigate('/journals', { state: res }));
    }
  };
  return (
    <>
      <HeaderHome hasButton={false} />
      <Container>
        <Card textColor="##000000" background="#F8E5D6" text={journal} />
        <Input
          background="rgba(255, 255, 255, 0.42);"
          placeholder="Journal"
          onChange={(e) => {
            setJournal(e.target.value);
          }}
        />
        <ContainerButton>
          <Button title="Save journal" onClick={() => createJournal()} />
        </ContainerButton>
      </Container>
    </>
  );
}
