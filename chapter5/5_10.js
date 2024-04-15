// let tom = {
//     name: "tom",
//     age: 12
// }


// //对象结构与顺序无关
// let { age } = tom;
// console.log(age)

// let { a } = tom;
// console.log(a)  //undefined

// let { age: b } = tom;
// console.log(b)

// let { age: c, sex: d = "Man" } = tom
// console.log(c, d)


// //深度解构
// let peter = {
//     name: "peter",
//     age: 12,
//     hobbies: ["football", "game", "running"],
//     address: {
//         country: "China",
//         city: "Shanghai"
//     }
// }

// let { address: { country, city }, name, hobbies: [hobby1, hobby2] } = peter
// console.log(country, city, name, hobby1, hobby2)

//作业
let user = {
    name: "John",
    years: 30
};

let { name, years: age, isAdmin = false } = user
console.log(name)
console.log(age)
console.log(isAdmin)

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};


console.log(topSalary(salaries))

function topSalary(salaries = {}) {
    let salaryArray = Object.entries(salaries).map(item => ({
        name: item[0],
        salary: item[1]
    }));
    let max = salaryArray.reduce((result, item) => {
        if (item.salary > result.salary) {
            result = item;
        }
        return result;
    });
    return max.name;
}