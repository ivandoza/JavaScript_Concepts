class Person {
  firstName = ""
  lastName = ""
  age = 0
  constructor (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  set firstName(newVal) {
    if (newVal === "string") {
      this.firstName = firstName
    } else {
      return "Invalid Name"
    }
  }

  set lastNametName(newVal) {
    if (newVal === "string") {
      this.lastName = this.lastName
    } else {
      return "Invalid Last Name"
    }
  }

  set age(newVal) {
    if (newVal < 1) {
      this.age = 1
    } else if (newVal > 120) {
      this.age = 120
    } else {
      this.age = newVal}
  }

  get firstName() {
    return this.firstName;
  }
  get lastName() {
    return this.lastName;
  }
  get age() {
    return this.age;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);