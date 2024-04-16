class User {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`hello ${this.name}`);
    }
}
new User("tom").sayHello()

//上例是一个类，在js中其实类是个函数，也即上面的语法本质是：
function User2(name) {
    this.name = name;
}
User2.prototype.sayHello = function () {
    console.log(`hello ${this.name}`);
}
new User2("John").sayHello();

//我们也可以打印看到User的类型
console.log(typeof User) //function

//匿名类
let User3 = class {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`hello ${this.name}`);
    }
}

//类还可以被传递
function newUser(clazz, name) {
    return new clazz(name);
}
newUser(User3, "peter").sayHello()

//可以被动态的创建类然后返回这个类
function newClass(func) {
    return class {
        constructor(name) {
            this.name = name;
        }
        //这是类字段，其实与上面的class还是有些不同
        //类字段是存在每个对象实例里的，而非在对象原型里
        sayHello = func;
    }
}

clazz = newClass(function () {
    console.log(`helloxx ${this.name}`);
});
let bill = new clazz("bill");
bill.sayHello();

//可以看到js太灵活了

//同理 class支持getter和setter
class User4 {
    constructor(name) {
        //本质上是调的setter
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}


//作业
class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.time)
    }

    start() {
        this.time = setInterval(() => {
            this.render();
        }, 1000);
    }
}
let clock = new Clock({ template: 'h:m:s' });
clock.start();