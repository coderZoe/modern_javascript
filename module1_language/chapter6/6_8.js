//setTimeout与setInterval

function sayHello() {
    console.log("hello")
}

//会返回一个id，可以据此来取消调度
let id1 = setTimeout(sayHello, 1000) //单位毫秒
clearTimeout(id1)


function sayName(firstName, lastName) {
    console.log(firstName, lastName)
}

setTimeout(sayName, 1000, "Bill", "Gates");

let id2 = setInterval(sayHello, 1000)
setTimeout(() => {
    clearInterval(id2)
}, 5000);



//作业

function printNumbers(from, to) {
    setTimeout(function printIt() {
        if (from <= to) {
            console.log(from++)
            setTimeout(printIt, 1000)
        }
    }, 1000);
}

printNumbers(3, 10)