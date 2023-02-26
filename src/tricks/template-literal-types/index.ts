type User = 'admin' | 'user' | 'manager';
type Department = 'financial' | 'business';

// perceba que o TS gerou um novo tipo com base no tipos fornecidos
// as string são concatenadas formando novos tipos, com todas as possibilidades possíveis
type UserWithDepartment = `${User}_${Department}`;

// também é possível usar o Template Literal Types para fazer validações
type ValidEmailFormat = `${string}@${string}.${string}`;

const userTypeWithDepartment: UserWithDepartment = 'admin_business';
const validEmail: ValidEmailFormat = 'matheus@example.com';
// const invalidEmail: ValidEmailFormat = 'matheusexample.com';

export default '';
