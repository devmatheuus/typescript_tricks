function sendEmail(email: string) {}

type User = {
  name: string;
  email: string | null;
};

/* 
    Perceba que da forma abaixo temos um erro, o objeto está tipado com o tipo User,
    nesse tipo, o email pode ser uma string ou nullo.
    
    Ao tentar chamar a função sendEmail que deve receber um email em obrigatoriamente, o TS
    avisa sobre um possível erro, dizendo que nosso objeto pode ter sua propriedade email vazia.

         
    const user: User = {
        name: 'John',
        email: 'john@example.com',
    };
    
    sendEmail(user.email);
*/

// o operador 'satisfies' não altera a tipagem inferida pelo TS, mantendo a garantia de que esse objeto
// vai seguir as regras impostas por determinado tipo

const user = {
  name: 'John',
  email: 'john@example.com',
} satisfies User;

// outro ponto positivo é que o operado satisfies pode ser usado em conjunto com o as const
const specificUser = {
  name: 'John',
  email: 'john@example.com',
} as const satisfies User;

sendEmail(user.email);

export default '';
