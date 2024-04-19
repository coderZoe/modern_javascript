class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyError";
    }
}

function sayHello({ name, age }) {
    if (!name || !age) {
        throw new MyError("空错误")
    }
    console.log(`hello ${name}, you are ${age}`)
}

let tom = {
    name: "Tom",
    age: 17
}

let peter = {

}
sayHello(tom)
sayHello(peter)