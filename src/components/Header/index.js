import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import history from '../../services/history';

import logo from '../../assets/logo.svg';
import { Container } from './styles';

export default function Header() {
  const ongName = localStorage.getItem('ongName');

  function handleLogOut() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <Container>
      <img src={logo} alt="HERO" />
      <span>Bem vinda {ongName}</span>
      <Link className="button" to="/incidents/new">
        Cadastrar novo caso
      </Link>
      <button type="button" onClick={handleLogOut}>
        <FiPower size={30} color="#E02041" />
      </button>
    </Container>
  );
}
