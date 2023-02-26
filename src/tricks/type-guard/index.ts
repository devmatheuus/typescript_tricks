interface Developer {
  name: string;
  language: string;
}

interface Designer {
  name: string;
  software: string;
}

const developer: Developer = { name: 'Matheus', language: 'JS' };
const designer: Designer = { name: 'José', software: 'Figma' };

const isDeveloper = (person: Developer | Designer): person is Developer => {
  return 'language' in person;
};

const printSkill = (person: Developer | Designer): void => {
  if (isDeveloper(person)) {
    console.log(person.language);
  } else {
    console.log(person.software);
  }
};

printSkill(developer);
