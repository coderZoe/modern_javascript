//可选链 ?.

let user = {

}

//不会报错
//如果可选链 ?. 前面的值为 undefined 或者 null，它会停止运算并返回 undefined。
console.log(user?.address?.country)

//?.() 方法可选链 
//不会报错
user.sayHello?.();

//?.[] 数组/属性可选链
let array = [];
console.log(array?.[2]?.["name"]);

//与delete一起使用
//如果name属性存在就删除，否则不执行
delete user?.name;
