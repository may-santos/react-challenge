import React, { useEffect } from 'react';
import HeaderHome from '../../components/HeaderHome';
import { useState } from 'react';
import Empty from '../../components/Empty';
import Card from '../../components/Card';
import { Container } from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import addIcon from '../../assets/imgs/addIcon.png';
import http from '../../services/api';
import { Journal } from '../../interfaces/journal.interface';

const colors = {
  left: {
    textColor: '#000000',
    background: '#B8E5E3',
    divider: '#5091D6',
  },
  right: {
    textColor: '#fff',
    background: '#3B4E8D',
    divider: '#5091D6',
  },
};

interface LocationState {
  user: {
    id: string;
    journalIds: string[];
  };
}

export default function JournalList() {
  let navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  const [list, setList] = useState<Journal[]>([]);

  useEffect(() => {
    const init = async () => {
      if (state.user.journalIds) {
        state.user.journalIds.forEach((journal) => {
          http.get(`/journals/${journal}`).then((res: any) => {
            if (res) {
              setList(res.journals);
            }
          });
        });
      }
    };
    init();
  }, [state]);
  return (
    <>
      <HeaderHome
        hasButton={state.user.journalIds !== null}
        textButton="Add Journal"
        iconButton={addIcon}
        actionButton={() =>
          navigate('/create-journal', {
            state: {
              idUser: state.user.id,
            },
          })
        }
      />

      {state.user.journalIds === null ? (
        <Empty
          textLink="Create journal"
          onClick={() =>
            navigate('/create-journal', {
              state: {
                idUser: state.user.id,
              },
            })
          }
        />
      ) : (
        <Container>
          {list.length > 0 &&
            list.map((l, i) => {
              const color = (i + 1) % 2 === 0 ? 'right' : 'left';
              return (
                <Card
                  key={i}
                  text={l.title}
                  textColor={colors[color].textColor}
                  divider={colors[color].divider}
                  background={colors[color].background}
                  onClick={() =>
                    navigate('/posts', {
                      state: { id: l.id, journalTitle: l.title },
                    })
                  }
                />
              );
            })}
        </Container>
      )}
    </>
  );
}
