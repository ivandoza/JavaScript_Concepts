function sum(...nums) {
  let suma = 0;
  for (let num of nums) suma += num;
  return suma;
}

const numbers = [1, 2, 3];
console.log(sum(numbers[0], numbers[1], numbers[2]));