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

export default function SignUp() {
  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const signUp = () => {
    if (username.length === 0 || password.length === 0) {
      alert('Please fill in all the required fields');
    } else {
      http
        .post('/auth/signup', {
          username: username,
          password: password,
          email: email,
        })
        .then((res: any) => navigate('/journals', { state: res }));
    }
  };
  return (
    <Container>
      <Form>
        <Image>
          <img alt="logo" src={logo} width="205px" height="42px" />
        </Image>
        <Header
          title="Sign Up"
          textLink="Already have an account"
          onClick={() => navigate('/')}
        />
        <Input
          placeholder="Define a username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Set your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          placeholder="Email (optional)"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextForgot>Forgot Password?</TextForgot>
        <ContainerButton>
          <Button title="Create account" onClick={() => signUp()} />
        </ContainerButton>
      </Form>
    </Container>
  );
}
