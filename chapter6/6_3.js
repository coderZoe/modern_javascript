function sum(a) {
    return function (b) {
        return a + b;
    }
}

console.log(sum(1)(4))

let arr = [1, 2, 3, 4, 5, 6, 7]
let filterArr = arr.filter(inBetween(3, 6))
console.log(filterArr)


//这里可能会有点绕，我们想象一下基本的filter怎么写？
arr.filter((item) => item >= 3 && item <= 6)
//可以看到这里的filter所需的参数是一个函数，因此我们上面的inBetween也应该返回一个函数
//然后这个函数的入参是item，也即每个数组元素，返回值是bool，现在唯一需要做的是将3和6作为参数传入即可
function inBetween(start, end) {
    return function (item) {
        return item >= start && item <= end
    }
}

function inArr(arr) {
    return function (item) {
        return arr.includes(item)
    }
}
console.log(arr.filter(inArr([1, 2, 3])))


let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field) {
    return function (a, b) {
        return a[field] > b[field] ? 1 : -1;
    };
}


users.sort(byField("name"))
console.log(JSON.stringify(users))

let a = 1;
b = a;
a++;
console.log(b)



function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let x = i;
        let shooter = function () {
            console.log("arm", x);
        };
        shooters.push(shooter);
        i++;
    }

    // ……返回 shooters 数组
    return shooters;
}

let army = makeArmy();

army[0]();
army[1]();
army[2]();







