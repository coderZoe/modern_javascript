class Animal {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(this.name);
    }

    run() {
        console.log("run quick");
    }
}

//类继承和重写
class Rabbit extends Animal {
    run() {
        super.run()
        console.log("but i am rabbit i run fast");
    }
}

let rabbit = new Rabbit("rabbit");
rabbit.sayHello();
rabbit.run()
