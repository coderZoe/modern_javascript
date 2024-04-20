function sum(a, b) {
    console.log(a + b)
}

Function.prototype.defer = function (delay) {
    let fun = this;
    return function () {
        setTimeout(() => {
            fun.apply(this, arguments)
        }, delay);
    }
}

sum.defer(2000)(1, 3);



function sum2(a, b) {
    return a + b;
}


Function.prototype.delay = function (time) {
    let func = this;
    function getPromise() {
        let args = arguments;
        return new Promise(resolve => {
            setTimeout(() => {
                let result = func.apply(this, args);
                resolve(result);
            }, time);
        });
    }
    return getPromise;
}


async function test() {
    let result = await sum2.delay(1000)(1, 2);
    console.log(result)
}
test()
