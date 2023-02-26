interface User {
  name: string;
  age?: number;
}

interface Post {
  title: string;
  subtitle: string;
}

// torna todas as propriedades obrigatórias
type UserRequired = Required<User>;

// torna todas as propriedades opcionais
type UserPartial = Partial<User>;

// torna possível selecionar propriedades de um determinado tipo
type UserName = Pick<User, 'name'>;

// torna possível omitir propriedades de um determinado tipo
type UserWithoutName = Omit<User, 'name'>;

type PostsProps = 'sports' | 'nutrition';

// o primeiro parâmetro serve para dizer quais propriedades esse objeto vai ter
// o segundo parâmetro serve para tipas as props desses objetos
type PostsRecord = Record<PostsProps, Post[]>;

const PostMappedBySections: PostsRecord = {
  sports: [
    {
      title: 'Hoje...',
      subtitle: 'Amanha...',
    },
  ],
  nutrition: [
    {
      title: 'Café...',
      subtitle: 'Almoço...',
    },
  ],
};
