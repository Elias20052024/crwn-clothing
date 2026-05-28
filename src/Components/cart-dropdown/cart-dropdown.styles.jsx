import styled from 'styled-components';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;

  /* Custom scrollbar styles */
  scrollbar-width: thin;
  scrollbar-color: #222 #fff;

  &::-webkit-scrollbar {
    width: 7px;
    background: #fff;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #222;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-button {
    display: none;
  }
`;