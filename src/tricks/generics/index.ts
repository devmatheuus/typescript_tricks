// Recriando a tipagem de array
type MyArrayType<T> = T[];

type Person = { name: string };
type Company = { business: string };
type LocationTypes = string | [lat: number, long: number] | { address: string };

const person: Person = { name: 'John' };
const company: Company = { business: 'social media' };

// o extends serve para restringir o generic á algum tipo
// nesse caso, está dizendo que o generic deve ser um objeto
function addLocation<T extends object, L extends LocationTypes>(
  obj: T,
  location: L
) {
  return { ...obj, location };
}

const personWithLocation = addLocation({}, 'Brasil');
const companyWithLocation = addLocation(company, 'EUA');
const companyWithLocationLatLong = addLocation(company, [5556, 6980]);
const companyWithLocationObject = addLocation(company, {
  address: 'Rua Jalapão',
});

export default '';
