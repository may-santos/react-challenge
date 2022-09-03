import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import HeaderHome from '../../components/HeaderHome';
import { Input } from '../../components/Input';
import SubHeader from '../../components/SubHeader';
import { Textarea } from '../../components/Textarea';
import http from '../../services/api';
import { Container, ContainerButton } from './style';

interface LocationState {
  id: string;
  journalTitle: string;
}

export default function CreateNote() {
  let navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const saveNote = () => {
    if (title.length === 0 || note.length === 0) {
      alert('Please fill in all the required fields');
    } else {
      http
        .post(`/journals/entry/${state.id}`, {
          title: title,
          content: note,
        })
        .then(() => navigate('/posts', { state }));
    }
  };
  return (
    <>
      <HeaderHome hasButton={false} />
      <SubHeader title={state.journalTitle} />
      <Container>
        <Input
          placeholder="Title"
          background="rgba(255, 255, 255, 0.42)"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          onChange={(e) => setNote(e.target.value)}
          background="rgba(255, 255, 255, 0.42)"
          placeholder="Write your note"
        />

        <ContainerButton>
          <Button title="Save note" onClick={() => saveNote()} />
        </ContainerButton>
      </Container>
    </>
  );
}
