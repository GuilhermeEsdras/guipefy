import { MdAdd } from 'react-icons/md';

import { APITypes } from '../../services/api';
import { Card } from '../Card';
import { Container } from './styles';

interface ListProps {
  data: APITypes;
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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Container>
  );
};
