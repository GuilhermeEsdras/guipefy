import { ListCardsTypes } from '../../services/api';
import { Container, Label } from './styles';

interface CardProps {
  card: ListCardsTypes;
}

export const Card = ({ card }: CardProps) => {
  return (
    <Container>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>Fazer a migração completa de servidor.</p>
      <img src="https://avatars.githubusercontent.com/u/48355731?v=4" alt="" />
    </Container>
  );
};
