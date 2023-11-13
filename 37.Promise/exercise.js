let number;

let myPromise = new Promise ((resolve, reject) => {
    number = 1;
    if (number > 10) {
        resolve(number);
    } else {
        reject(number);
    }
});

myPromise 
    .then((val) => console.log(val))
    .catch((err)=> console.error('error'))
