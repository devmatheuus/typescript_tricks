export interface Person {
  name: string;
  age: number;
}

export interface Address {
  street: string;
  zipCode: string;
}

// Padrão Mixing para mesclar dois tipos
export function mergeTypes<FirstType, SecondType>(
  firstObject: FirstType,
  secondObject: SecondType
): FirstType & SecondType {
  return { ...firstObject, ...secondObject };
}
