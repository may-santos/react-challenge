import React, { useState } from 'react';
import {
  Container,
  Form,
  Image,
  ContainerButton,
  TextForgot,
} from '../../styles/sign';
import logo from '../../assets/imgs/logo.png';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import http from '../../services/api';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    if (username.length === 0 || password.length === 0) {
      alert('Please fill in all the required fields');
    } else {
      http
        .post('/auth/login', {
          username: username,
          password: password,
        })
        .then((res: any) => {
          navigate('/journals', { state: res });
        });
    }
  };
  return (
    <Container>
      <Form>
        <Image>
          <img alt="logo" src={logo} width="205px" height="42px" />
        </Image>
        <Header
          title="Sign In"
          textLink="Sign Up"
          onClick={() => navigate('/signup')}
        />
        <Input
          placeholder="Your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <TextForgot>Forgot Password?</TextForgot>
        <ContainerButton>
          <Button title="Log In" onClick={() => signIn()} />
        </ContainerButton>
      </Form>
    </Container>
  );
}
