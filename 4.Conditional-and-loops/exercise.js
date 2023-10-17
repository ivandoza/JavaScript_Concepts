function sumUntil(maxValue) {
  let i;
  let suma = 0;
  for (i=0 ; i <=maxValue ; i++){
    suma = suma + i;
  }
  return suma;
}
console.log(sumUntil(5));