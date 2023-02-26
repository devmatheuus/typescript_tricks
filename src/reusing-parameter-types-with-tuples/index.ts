type User = {
  email: string;
  phone: string;
};

type SendParams = [user: User, title: string, content: string];

const user: User = { email: 'matheus@example.com', phone: '123456' };

// perceba que as funções recebem os mesmos parâmetros e tipos
function sendEmail(user: User, title: string, content: string) {}
function sendSMS(user: User, title: string, content: string) {}
function sendNotification(user: User, title: string, content: string) {}

sendEmail(user, 'hello', 'world');
sendSMS(user, 'hello', 'world');
sendNotification(user, 'hello', 'world');

// podemos melhorar nosso código usando nossa tupla como tipagem:
function sendEmail2(...[user, title, content]: SendParams) {}
function sendSMS2(...[user, title, content]: SendParams) {}
function sendNotification2(...[user, title, content]: SendParams) {}

sendEmail2(user, 'hello', 'world');
sendSMS2(user, 'hello', 'world');
sendNotification2(user, 'hello', 'world');

export default '';
