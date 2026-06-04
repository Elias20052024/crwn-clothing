import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;

  @media screen and (max-width: 640px) {
    flex-direction: column;
    height: auto;
    align-items: stretch;
    margin-bottom: 15px;
    padding: 10px 0;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 640px) {
    width: auto;
    padding: 10px 20px;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 640px) {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
    padding: 10px 20px;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
