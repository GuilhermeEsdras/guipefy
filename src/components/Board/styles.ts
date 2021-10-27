import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  padding: 30px 0; /* 30px superior e inferior */
  height: calc(
    100% - 80px
  ); /* 100% do espaço visível - 80px de altura definido para o header */
`;
