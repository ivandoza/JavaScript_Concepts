function printAsyncName (callback, name) {
    let sayHello = setInterval(callback, 1000);
    setTimeout(() => clearInterval(sayHello), 1000);
    let sayName = setInterval(() => console.log(name), 2000);
    setTimeout(()=> clearInterval(sayName),2000)
}

printAsyncName(() => console.log("Hello"), "Ivan")
