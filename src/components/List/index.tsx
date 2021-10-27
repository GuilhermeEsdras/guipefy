import { MdAdd } from 'react-icons/md';

import { DataTypes } from '../../services/api';
import { Card } from '../Card';
import { Container } from './styles';

interface ListProps {
  data: DataTypes;
}

export const List = ({ data }: ListProps) => {
  return (
    <Container>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </ul>
    </Container>
  );
};
