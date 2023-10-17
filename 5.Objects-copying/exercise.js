const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName= 'Simon'

console.log(person1);
console.log(person2);

//        El objeto 'person2' es igual (=) al objeto 'person1', por lo tanto cualquier
//        modificación en las propiedades de 'persona1' sera transferida a 'persona2'.