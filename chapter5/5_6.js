let range = {
    from: 1,
    to: 5
};


//for of的本质是调用对象的Symbol.iterator方法，如果对象有Symbol.iterator，则代表支持for of 迭代
//这个方法必须返回一个对象，返回的对象必须包含next()方法

// 需要注意的是，下面这个函数里的this指向并不一样
// 第一处this current: this.from, last: this.to, 这里的this指的是range对象
// 第二处的this if (this.current <= this.last) {return { done: false, value: this.current++ }; 指的是这个要返回的匿名对象
range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,
        next: function () {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};

for (let num of range) {
    console.log(num)
}

let str = "hello world";
//也即for of的本质是下面这段代码
let iterator = str[Symbol.iterator]();
while (true) {
    let next = iterator.next()
    if (next.done) {
        break;
    }
    console.log(next.value)
}

