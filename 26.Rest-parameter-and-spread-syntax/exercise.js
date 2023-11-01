function sum(...nums) {
    let suma = 0;
    for (let num of nums) suma += num;
    return suma;
}

console.log(sum(1, 2, 3, 4, 5));