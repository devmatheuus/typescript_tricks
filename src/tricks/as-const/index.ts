// perceba que as props são tipadas como string e number
// ou seja, name pode ser qualquer tipo de string, até mesmo uma string vazia
// age poderia ser qualquer número, até mesmo um número negativo
const letUser = {
  name: 'John',
  age: 25,
};

// o as const vai deixar nosso objeto menos flexível,
// tornando suas props readonly e alterando seus tipos para tipos literais
const constUser = {
  name: 'John',
  age: 25,
} as const;
// Perceba agora que a prop name pode ser apenas John e não pode ser alterada
// o mesmo vale para a prop number, que agora pode ser apenas 25,
// não podendo ter seu valor alterado também

const letNumbersArray = [1, 2, 3];

// perceba que nosso array se transforma em um tupla, com posições e valor definidos
// também se torna readonly, então métodos causam mutação no array não vão funcionar mais
const constNumbersArray = [1, 2, 3] as const;

// EXEMPLO DE USO NO DIA-A-DIA - ARRAYS

const constLatLong = [-256378, 546301] as const;
const letLatLong = [-256378, 546301];

function logLatLong(lat: number, long: number): void {
  console.log(lat, long);
}

// perceba que isso é possível porque o TS sabe que nosso array
// sempre vai ter 2 posições e que são números, quem dá essa garantia
// para o TS é a tipagem 'as const'
logLatLong(...constLatLong);

// o mesmo não funciona para o array que não está tipado com 'as const'
// porque o tipo 'number[]' pode ser um array com inúmeras posições,
// logo o TS não tem como garantir que essa função será executado de forma correta
logLatLong(...letLatLong);

// EXEMPLO DE USO NO DIA-A-DIA - OBJETOS

// podemos substituir o uso do enum com o as const
const Direction = {
  TOP: 'top',
  BOTTOM: 'bottom',
} as const;

export default '';
