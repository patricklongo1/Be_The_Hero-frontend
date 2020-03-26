import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { toast } from 'react-toastify';

import api from '../../services/api';
import history from '../../services/history';

import logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import { Container, FormContent, Form } from './styles';

export default function Home() {
  const [id, setId] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/sessions', { id });

      if (response.data.name) {
        localStorage.setItem('ongId', id);
        localStorage.setItem('ongName', response.data.name);
      }

      history.push('/profile');
    } catch (error) {
      toast.error('Falha no login. Verifique seu ID e tente novamente.');
    }
  }

  return (
    <Container>
      <FormContent>
        <img src={logo} alt="HERO" />
        <Form onSubmit={handleLogin}>
          <h1>Faça seu Login</h1>
          <input
            type="text"
            placeholder="Seu ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link to="/register">
            <FiLogIn size={16} color="#E02041" /> Fazer cadastro gratuito
          </Link>
        </Form>
      </FormContent>
      <img src={heroesImg} alt="Be The HERO" />
    </Container>
  );
}
