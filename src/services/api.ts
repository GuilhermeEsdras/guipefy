export interface ListCardsTypes {
  id: number;
  content?: string;
  labels?: string[];
  user?: string;
}

export interface DataTypes {
  title: string;
  creatable: boolean;
  cards: ListCardsTypes[];
  done?: boolean;
}

export function loadLists(): DataTypes[] {
  return [
    {
      title: 'Tarefas',
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar módulo 01 de NodeJS',
          labels: ['#7159c1'],
          user: 'https://avatars.githubusercontent.com/u/48355731?v=4',
        },
        {
          id: 2,
          content: 'Estudar Angular',
          labels: ['#7159c1'],
          user: 'https://avatars.githubusercontent.com/u/48355731?v=4',
        },
        {
          id: 3,
          content: 'Estudar módulo 03 de React Native',
          labels: ['#7159c1'],
          user: 'https://avatars.githubusercontent.com/u/48355731?v=4',
        },
        {
          id: 4,
          content:
            'Assistir Aula "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: ['#54e1f7'],
          user: 'https://avatars.githubusercontent.com/u/48355731?v=4',
        },
        {
          id: 5,
          content: 'Aprender a fazer testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'https://avatars.githubusercontent.com/u/48355731?v=4',
        },
      ],
    },
    {
      title: 'Fazendo',
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: [],
          user: 'https://avatars.githubusercontent.com/u/48355731?v=4',
        },
      ],
    },
    {
      title: 'Pausado',
      creatable: false,
      cards: [
        {
          id: 7,
          content:
            'Assistir aula sobre Geolocalização e mapas com React Native',
          labels: ['#7159c1'],
          user: 'https://avatars.githubusercontent.com/u/48355731?v=4',
        },
        {
          id: 8,
          content: 'Aprender a fazer testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'https://avatars.githubusercontent.com/u/48355731?v=4',
        },
        {
          id: 9,
          content: 'Ajustes na biblioteca unform',
          labels: [],
        },
      ],
    },
    {
      title: 'Concluído',
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Assistir aula sobre deploy e CI com React Native',
          labels: [],
        },
        {
          id: 12,
          content: 'Aprender a fazer testes e deploy ReactJS',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content:
            'Assistir Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: ['#7159c1'],
        },
      ],
    },
  ];
}
