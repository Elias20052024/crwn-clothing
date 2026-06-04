import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  justify-content: space-between;
  margin: 30px auto;
  padding: 0 12px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;
