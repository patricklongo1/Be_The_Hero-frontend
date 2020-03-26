import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin: 80px 0 24px 0;
  }
`;

export const CaseList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;

  li {
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    position: relative;

    button {
      position: absolute;
      right: 24px;
      top: 24px;

      svg {
        transition: color 0.2s;

        &:hover {
          color: #e02041;
        }
      }
    }

    strong {
      display: block;
      margin-top: 16px;
      color: #41414d;
      margin-bottom: 10px;
    }

    p {
      color: #737380;
      line-height: 21px;
      font-size: 16px;
    }
  }
`;
