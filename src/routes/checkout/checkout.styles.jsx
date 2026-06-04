import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  @media screen and (max-width: 900px) {
    width: 90%;
    margin: 35px auto 0;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    margin: 25px auto 0;
    padding: 0 10px;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  font-size: 14px;

  @media screen and (max-width: 390px) {
    min-width: 100%;
    padding: 4px 0;
    font-size: 12px;
    grid-template-columns: 30% 30% 20% 10% 10%;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  display: flex;
  align-items: center;

  &:last-child {
    width: 8%;
    justify-content: center;
  }

  span {
    white-space: nowrap;
  }

  @media screen and (max-width: 390px) {
    width: auto;
    min-width: 0;
    justify-content: flex-start;
    padding: 0 2px;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
