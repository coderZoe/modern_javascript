let user = {
    name: "John",
    surname: "Smith"
}
console.log(JSON.stringify(user))
user.name = "Pete"
console.log(JSON.stringify(user))
delete user.name
console.log(JSON.stringify(user))

function isEmptyObj(obj) {
    let keyArray = Object.keys(obj)
    return keyArray.length === 0
}

let emptyObj = {}
console.log(isEmptyObj(emptyObj))
console.log(isEmptyObj(user))

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}


function sum(obj) {
    let count = 0;
    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            count += Number(obj[key])
        }
    }
    return count;
}
console.log(sum(salaries))



function multi2(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2
        }
    }
    return obj
}

console.log(JSON.stringify(multi2(salaries)))