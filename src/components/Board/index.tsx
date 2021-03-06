import { DataTypes, loadLists } from '../../services/api';
import { List } from '../List';
import { Container } from './styles';

const lists: DataTypes[] = loadLists();

export const Board = () => {
  return (
    <Container>
      {lists.map((list) => (
        <List key={list.title} data={list} />
      ))}
    </Container>
  );
};
