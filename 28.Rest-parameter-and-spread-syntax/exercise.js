function sum(...nums) {
  let suma = 0;
  for (let num of nums) suma += num;
  return suma;
  //return nums.reduce((a,b) => a + b, 0);  Mismo resultado con el método reduce, con el que solo tendriamos una linea de código.
}

const numbers = [1, 2, 3];
console.log(sum(numbers[0], numbers[1], numbers[2]));



