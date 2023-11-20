const isLogged = true;

function loggedPromise(isLog) {
    return new Promise((resolve,reject) => {
        if(isLog){
            resolve(Math.random());
        } else {
            reject("Is not logged");
        }
    });
}

function numberPromise (number) {
    return new Promise((resolve,reject) => {
        if(number > 0.5) {
            resolve({name: "John", age: 24});
        } else {
            reject("Invalid number");
        }
    });
}

loggedPromise(isLogged)
    .then(numberPromise)
    .then((val) => console.log(val))
    .catch((err) => console.log(err))
