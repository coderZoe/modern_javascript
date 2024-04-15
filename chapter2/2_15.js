
//通过形参的 = 可以赋值默认参数
function hello(username1, username2 = "John") {
    alert(`hello ${username1} and  ${username2}`)
}

hello("Tom")
hello("Tom", "Peter")