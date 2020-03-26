/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { FiCheckCircle } from 'react-icons/fi';
import { Container, Content } from './styles';

export default function Modal({ ongData, handleCloseModal }) {
  return (
    <Container>
      <Content>
        <button type="button" onClick={handleCloseModal}>
          X
        </button>
        <div>
          <FiCheckCircle size={80} color="green" />
          <p>Anote seu ID de acesso: {ongData.id}</p>
        </div>
      </Content>
    </Container>
  );
}

Modal.propTypes = {
  ongData: PropTypes.object.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};
