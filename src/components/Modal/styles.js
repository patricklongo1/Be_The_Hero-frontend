import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 100;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  transform: scale(1);
`;

export const Content = styled.div`
  position: relative;
  width: 30%;
  height: 200px;
  border: 1px solid #999;
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    width: 100%;
    max-width: 330px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      margin-right: 30px;
    }

    p {
      font-size: 16px;
      color: #444;
    }
  }

  button {
    position: absolute;
    top: 16px;
    right: 16px;
    font-weight: bold;
    font-size: 20px;
    color: #e02041;
  }
`;
