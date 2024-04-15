//JS中原型存在一个关键原则：写入时不使用原型，只有读取时才使用原型

//写入操作（设置属性值）直接作用于源对象上，而读取操作（访问属性值）如果在源对象上找不到该属性，则会沿原型链向上查找。这确保了原型的属性不会因为某个继承对象的操作而被意外改变，同时允许继承对象通过原型链继承方法和属性。
let user = {
    firstName: "Tom",
    lastName: "Smith",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}

let admin = {
    isAdmin: true
}
Object.setPrototypeOf(admin, user)
console.log(admin.fullName) //#1

admin.fullName = "Machel Jordan"; //#2
console.log(admin.fullName)  //#3
console.log(user.fullName)   //#4

//如上，首先我们在#1处调用admin.fullName，由于admin不具备fullName属性，因此沿原型查找，到user的getter，此时调用fullName的getter
//但getter里的内容是 return `${this.firstName} ${this.lastName}`; 当前的this是admin，admin并不具备firstName和lastName属性
//因此沿着原型链往上找，查到的是user的firstName和lastName,此时返回的就是Tom Smith

//但对于#2，我们修改admin的fullName，需要铭记的是写操作不使用原型链
//首先如果fullName是数据属性，则admin新增一个fullName的属性，与user的fullName将独立。（不使用原型链！！！）
//但如果fullName是访问器属性，访问器属性本身是函数的执行，因此会先沿着原型链找到setter然后执行，所以会先到达user的fullName setter
//setter的内容是[this.firstName, this.lastName] = value.split(" "); 但此时this是admin，admin没firstName和lastName属性
//因此我们会在admin上创建firstName和lastName属性，并分别赋值为Machel和Jordan。
//这里admin就有了自己的firstName和lastName属性，与user区分开了。
//#3处 admin访问fullName，实际会先到达user的fullName getter，此时this是admin，因此返回的是Machel Jodan
//#4 由于admin对fullName的修改并不影响user，因此user的firstName和lastName还是Tom Smith