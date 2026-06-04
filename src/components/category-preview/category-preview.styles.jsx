import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;

  @media screen and (max-width: 640px) {
    text-align: center;
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 15px;
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
`;
