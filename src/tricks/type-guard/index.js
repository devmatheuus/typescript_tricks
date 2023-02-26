"use strict";
const developer = { name: 'Matheus', language: 'JS' };
const designer = { name: 'José', software: 'Figma' };
const isDeveloper = (person) => {
    return 'language' in person;
};
const printSkill = (person) => {
    console.log(isDeveloper(person));
};
printSkill(developer);
