import React, { useState, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';

import api from '../../services/api';

import Header from '../../components/Header';
import { Container, CaseList } from './styles';

export default function Profile() {
  const ongId = localStorage.getItem('ongId');
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    async function loadIncidents() {
      const response = await api.get('/profile', {
        headers: { Authorization: ongId },
      });
      setIncidents(response.data);
    }
    loadIncidents();
  }, [ongId]);

  async function handleDelete(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: { Authorization: ongId },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (error) {
      toast.error('Erro ao deletar caso. Tente novamente.');
    }
  }

  return (
    <Container>
      <Header />
      <h1>Casos cadastrados</h1>

      <CaseList>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>Caso:</strong>
            <p>{incident.title}</p>

            <strong>Descrição:</strong>
            <p>{incident.description}</p>

            <strong>Valor:</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </p>

            <button type="button" onClick={() => handleDelete(incident.id)}>
              <FiTrash2 size={20} color="#a8a8br" />
            </button>
          </li>
        ))}
      </CaseList>
    </Container>
  );
}
