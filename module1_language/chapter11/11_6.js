function logIt(logInfo, func) {
    setTimeout(() => {
        console.log(logInfo);
        func(null, logInfo)
    }, 5000);
}

logIt("test", function (error, result) {
    if (error) {
        console.error(error)
    } else {
        console.log(result, "已被打印")
    }
})


function promisify(func) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            //我们这里自己创建一个callback函数，代表的是用户入参的callback，
            //然后将这个callback作为参数传给原函数，原函数在调callback的时候就是执行完成的时候
            //这时候我们在完成时将promise设为完成，一旦promise完成就会回调.then或.catch方法
            function callback(err, result) {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            }
            args.push(callback)
            func.call(this, ...args);
        });
    }
}


promisify(logIt)("testB")
    .then(result => console.log(result, "已被打印"))
    .catch(error => console.error(error));