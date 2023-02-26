interface Person {
  name: string;
  age: number;
}

// Criando tipo onde todas as propriedades terão seu valor como string
type Stringify<T> = {
  // A sintaxe dentro do array é lida da seguinte forma:
  // Cada propriedade dentro do tipo <T>, deverá ser uma string
  [P in keyof T]: string;
};

type NumberType<T> = {
  [P in keyof T]: number;
};

type ReadonlyStringify<T> = {
  readonly [P in keyof T]: string;
};

type StringOrNumberType<T> = {
  [P in keyof T]: string | number;
};

const person: Person = {
  name: 'Matheus',
  age: 20,
};

// Torna todas as propriedades opcionais
const personPartial: Partial<Person> = {
  age: 19,
};

// Torna todas as propriedades apenas leitura (readonly)
const readonlyPerson: Readonly<Person> = {
  age: 19,
  name: 'Matheus',
};

const personStringify: Stringify<Person> = {
  age: '25',
  name: 'Matheus',
};
