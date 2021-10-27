import styled from 'styled-components';

export const Container = styled('div')<{ done?: boolean }>`
  padding: 0 15px; /* 15px de preenchimento interno nas laterais */
  height: 100%;

  opacity: ${({ done }) =>
    done
      ? 0.6
      : 1}; /* Diminui a opacidade apenas se a propriedade 'done' for passada */

  /**
   * Flex é a junção de 3 propriedades de um flex-item (filho de um flex):
   * flex-grow: 0 | número  > Determina o quanto um elemento vai "esticar" (justify-content deixa de funcionar aqui)
   * flex-shrink: 0 | 1 | número  > Determina a capacidade de redução de tamanho do item  (1 = Permite | 0 = Não permite/Tamanho fixo)
   * flex-basis: auto | unidade | 0  > Indica o tamanho inicial do flex item antes da distribuição do espaço restante
   */
  flex: 0 0 320px; /* 0 = Largura fixa | 0 = Não permite a diminuição | 320px base de largura (pois o flex-direction do pai é row (linha), daí, Largura) */

  /**
   * Uma alternativa para o :nth-child(), :first-child(), etc
   * 
   * Quer dizer: Estiliza apenas as divs que tiverem outra div antes dela
   */
  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex; /* Para os elementos (h2 e button) ficarem lado-a-lado */
    justify-content: space-between; /* Para jogar cada item pra um canto  */
    align-items: center; /* Pois o button é maior que o h2 (faz o h2 ficar centralizado) */
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
