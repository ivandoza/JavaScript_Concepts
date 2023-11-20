let number;

let myPromise = new Promise ((resolve, reject) => {
    number = 9;
    if (number > 10) {
        resolve(number);
    } else {
        reject("Number is not greater than 10");
    }
});

myPromise 
    .then((val) => console.log(val))
    .catch((err)=> console.log(err))
