import React, { useEffect, useState } from 'react';
import HeaderHome from '../../components/HeaderHome';
import Note from '../../components/Note';
import SubHeader from '../../components/SubHeader';
import { Container } from './style';
import addIcon from '../../assets/imgs/addIcon.png';
import { useLocation, useNavigate } from 'react-router-dom';
import http from '../../services/api';
import { Entry } from '../../interfaces/entry.interface';
import Empty from '../../components/Empty';

interface LocationState {
  id: string;
  journalTitle: string;
}

export default function PostList() {
  let navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;
  const [list, setList] = useState<Entry[]>([]);

  useEffect(() => {
    http
      .get(`/journals/entries/${state.id}`)
      .then((res: any) => setList(res.entries));
  }, [state.id]);
  return (
    <>
      <HeaderHome />

      {list.length === 0 ? (
        <Empty
          title={state.journalTitle}
          textLink="Create note"
          onClick={() =>
            navigate('/create-note', {
              state,
            })
          }
        />
      ) : (
        <>
          <SubHeader
            title={state.journalTitle}
            hasButton
            textButton="Add note"
            iconButton={addIcon}
            actionBackButton={() => navigate(-1)}
            actionButton={() =>
              navigate('/create-note', {
                state,
              })
            }
          />
          <Container>
            {list.map((l, i) => {
              return <Note text={l.content} key={i} />;
            })}
          </Container>
        </>
      )}
    </>
  );
}
