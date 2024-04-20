let userName = prompt("用户名", "admin")
let password = prompt("密码", "password")

let sex = confirm("Man?")

alert(`you are ${userName} and your password is ${password} and your sex is ${sex ? "Man" : "Woman"}`)