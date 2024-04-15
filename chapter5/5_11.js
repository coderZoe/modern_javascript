//时间DateAPI

const oneSecond = 1000;
const oneMinutes = 60 * oneSecond
const oneHour = 60 * oneMinutes;
const oneDay = 24 * oneHour;


//该行代码在nodejs环境下和浏览器环境下输出可能不同
//这主要是因为浏览器会自动获取宿主机的时区，通常输出的是你当前时区的时间
//但Nodejs默认用的UTC时区，除非显示指定时区
let now = new Date()
console.log(now)

console.log(new Date().getTimezoneOffset())


//打印45天后的日期 js带自动校准功能，比如现在是2月27，两天后到底是3月1日还是2月29会自动判断
now.setDate(now.getDate() + 45)
console.log(now)


//日期相减，用于计算两个时间的差值，单位是ms
let date1 = new Date(2023, 1, 25)
console.log(formatter(Date.now() - date1))


function formatter(time) {

    let day = Math.floor(time / oneDay)
    time = time % oneDay
    let hour = Math.floor(time / oneHour)
    time %= oneHour
    let minutes = Math.floor(time / oneMinutes)
    time %= oneMinutes
    let second = Math.floor(time / oneSecond)
    time %= oneSecond

    return day + "天，" + hour + "小时" + minutes + "分钟" + second + "秒" + time + "毫秒";
}

//字符串转日期(其实转的是时间戳) 时间解析
//格式如下：YYYY-MM-DDTHH:mm:ss.sssZ 其中T是分隔符 Z是时区，表示方式是+08:00或者-06:00等
let dateStr = "2024-02-11T13:24:35.456+08:00";
let timestamp = Date.parse(dateStr);
console.log(new Date(timestamp));

//作业
function getWeekDay(date) {
    const array = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']
    return array[date.getDay()]
}

console.log(getWeekDay(new Date()))

function getLocalDay(date) {
    return date.getDay() || 7
}
let dateX = new Date()
dateX.setDate(dateX.getDate() + 1)
console.log(getLocalDay(dateX))


function getDateAgo(date, days) {
    date.setDate(date.getDate() - days)
    return date;
}
console.log(getDateAgo(new Date(), 15))



function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

console.log(getLastDayOfMonth(2024, 1))

function getSecondsToday() {
    let now = new Date();
    return Math.floor((now.getHours() * oneHour
        + now.getMinutes() * oneMinutes
        + now.getSeconds() * oneSecond) / 1000)
}

console.log(getSecondsToday())


function getSecondsToTomorrow() {
    let now = new Date()
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
    return Math.floor((tomorrow - now) / 1000)
}
console.log(getSecondsToTomorrow())



















