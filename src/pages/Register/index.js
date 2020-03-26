import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

import api from '../../services/api';
import history from '../../services/history';

import logo from '../../assets/logo.svg';
import Modal from '../../components/Modal';
import { Container, Content, Section, Form } from './styles';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [ong, setOng] = useState(null);
  const [displayModal, setDisplayModal] = useState(false);

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const response = await api.post('/ongs', data);
      setOng(response.data);
    } catch (error) {
      toast.error(
        'Falha ao cadastrar ONG. Verifique os dados e tente novamente.'
      );
    }
  }

  useEffect(() => {
    if (ong !== null) {
      setDisplayModal(true);
    }
  }, [ong]);

  function handleCloseModal() {
    setDisplayModal(false);
    history.push('/');
  }

  return (
    <Container>
      {displayModal === true ? (
        <Modal ongData={ong} handleCloseModal={handleCloseModal} />
      ) : (
        <></>
      )}
      <Content>
        <Section>
          <img src={logo} alt="HERO" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro! Entre na plataforma e ajude pessoas a encontrarem
            os casos de sua ONG.
          </p>
          <Link to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Já tenho cadastro
          </Link>
        </Section>
        <Form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <div>
            <input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>
          <button type="submit" className="button">
            Cadastrar
          </button>
        </Form>
      </Content>
    </Container>
  );
}
