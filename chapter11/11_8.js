function delayLog(log) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(log)
            resolve(log)
        }, 3000);
    })
}


async function f1() {
    let result = await delayLog("testa")
    return result;
}

async function f2() {
    let result = await f1()
    console.log("f2", result)
}

f2()