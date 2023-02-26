import { Address, mergeTypes, Person } from './types';

const person: Person = {
  age: 29,
  name: 'John',
};

const address: Address = {
  street: 'Av. Governador',
  zipCode: '456-698',
};

// O intersection types é definido pela junção dos tipos com o operador '&'
const personWithAddress: Person & Address = {
  ...person,
  ...address,
};

// Perceba que abaixo temos o mesmo resultado de tipos
// Mas dessa vez uma função está fazendo isso de forma dinâmica
const personWithAddress2 = mergeTypes(person, address);
