// verifica se tipo passado é um número
type isNumber<T> = T extends number ? true : false;

type A = isNumber<number>;
type B = isNumber<string>;

const returnTrueValue = (): A => true;
const returnFalseValue = (): B => false;

// FORMA DE TIPAGEM - constraint

/*
 esse tipo de tipagem não funciona
 porque dessa maneira, o TS não tem como garantir
 que o tipo passado vai conter uma prop message


 type ExtractMessageError<T> = T['message'];
*/

// esse funciona, pois informamos ao TS que esse tipo deverá receber
// um objeto com a prop message sendo uma string
type ExtractMessage<T extends { message: string }> = T['message'];

type Message = ExtractMessage<{ message: 'ok' }>;

// esse tipo de tipagem não restringe as props do objeto
// o objeto deve conter a prop requerida, mas nada o impede de
// adicionar mais props nesse objeto
type MessageWithMoreProps = ExtractMessage<{ message: 'ok'; otherProps: 'hi' }>;

/*
 Um objeto sem a prop message não vai ser aceito

 type MessageWithoutPropMessage = ExtractMessage<{}>;
*/

// TROCANDO A TIPAGEM DE constraint PARA conditional type

// aqui verificamos se o tipo T é um objeto contendo a prop message,
// se sim, nosso tipo é retornado como T['message']
// se não, nosso tipo é retornado como never
type ExtractMessageConditional<T> = T extends { message: string }
  ? T['message']
  : never;

type TestNever = ExtractMessageConditional<{}>;
type TestNotNever = ExtractMessageConditional<{ message: 'Ok' }>;

// inferindo tipo com infer

// é como se o infer declarasse uma variável
type ExtractMessageInfer<T> = T extends { message: infer Message }
  ? Message
  : never;

// perceba que temos o mesmo resultado
type TestInferNever = ExtractMessageConditional<{}>;
type TestInferNotNever = ExtractMessageConditional<{ message: 'Ok' }>;

// situação onde é preciso usar o infer

function hello(name: string) {
  return `Hello ${name}`;
}

type HelloFn = typeof hello;
// fazendo a tipagem dessa forma, o TS resolveu isso como uma função que
// recebe um parâmetro string e retorna uma string

// perceba que o conditional type abaixo, verifica se o tipo passado é uma função
// que recebe um número indefinido de parâmetros e retorna algum tipo de valor
// o tipo será definido de acordo com o tipo de retorno da função passada, caso a função não
// retorno nenhum valor, ou caso o tipo passado não seja uma função, seu tipo será never
type FnReturnType<T> = T extends (...args: any) => infer Value ? Value : never;

// tipo string
type HelloFnReturnType = FnReturnType<typeof hello>;

//tipo never
type HelloFnReturnTypeNever = FnReturnType<''>;

// o tipo criado acima já existe no TS, seu funcionamento é literalmente igual:
type HelloFnTS = ReturnType<typeof hello>;
