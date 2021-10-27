import { ListCardsTypes } from '../../services/api';
import { Container, Label } from './styles';

interface CardProps {
  card: ListCardsTypes;
}

export const Card = ({ card }: CardProps) => {
  return (
    <Container>
      <header>
        {card.labels?.map((label) => (
          <Label color={label} key={label} />
        ))}
      </header>
      <p>{card.content}</p>
      {card.user && <img src={card.user} alt="" />}
    </Container>
  );
};
