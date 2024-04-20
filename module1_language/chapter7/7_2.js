//这种定义方式叫数据属性
let tom = {
    name: "tom"
}
//当访问tom.name的时候就是读取tom对象的name属性
console.log(tom.name)


//这种定义方式叫访问器属性
let peter = {
    get name() {
        return "peter";
    }
}

//当我们访问peter.name的时候，实际上是在调用peter里的叫name的getter方法
console.log(peter.name)


//注意下面这种定义是错误的！！！ 
//假设我们要访问user.name，此时会调用getter。但getter里面又调this.name，又会调到getter，会存在无限递归的问题
let user = {
    name: "tom",
    get name() {
        return this.name;
    }
}


//因此访问器属性其实不是以属性名的形式被定义，而是以对象内的get和set关键字来定义的

//对于普通对象，我们可以定义一个数据属性:
//如下，我们在对象language内定义了一个数据属性name，且配置了这个name的属性标志和描述符
let language = {};
Object.defineProperty(language, 'name', {
    value: "javascript",
    writable: true,
    enumerable: true,
    configurable: true
})
console.log(language.name)

//但访问器属性没有value和writeable，替换为的是getter和setter
Object.defineProperty(language, "age", {
    get() {
        return this._age ?? 20;
    },
    set(value) {
        this._age = value;
    },
    enumerable: true,
    configurable: true
});

console.log(language.age)
language.age = 25
console.log(language.age)

//getter和setter的一大好处是getter时隐藏一些细节和setter时做限制
let userX = {
    firstName: "Tom",
    lastName: "Smith",

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}
console.log(userX.fullName);
userX.fullName = "Bill Gates"
console.log(userX.fullName)

