function f(x) {
    console.log(x)
    return x + "world"
}



function delayCache(func, delay) {
    function getPromise(x) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(func(x))
            }, delay);
        });
    }

    async function execFunc(x) {
        return await getPromise(x)
    }

    return execFunc
}

let newFunc = delayCache(f, 5000)
// console.log(newFunc("hello"))




function debounce(func, delay) {
    let id;
    return function (x) {
        if (id) {
            clearTimeout(id)
        }
        setTimeout(() => {
            func(x)
        }, delay);
    }
}


function throttle(func, delay) {
    let start = 0;
    let id;
    return function (x) {
        //清除delay时间内未执行的定时任务
        clearTimeout(id);

        //到点了 直接执行
        if ((Date.now() - start) > delay) {
            func(x);
            start = Date.now();
        } else {
            //没到点，延迟执行
            //注意延迟不再是delay，delay - (要用当前时间-上一次执行执行) 
            //这样保证每delay次数执行一次
            id = setTimeout(() => {
                func(x);
                start = Date.now()
            }, delay - (Date.now() - start));
        }
    }
}


function printIt(str) {
    console.log(new Date(), str);
}

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

async function test() {
    //将刷新周期设为5s
    let func = throttle(printIt, 5000)
    func("1")  //第一次应该执行
    await sleep(2000)
    func("2")  //第2秒执行
    await sleep(1000)
    func("3") //第3秒执行 会把上一次2s的执行取消掉
    await sleep(4000) //第7s 会执行上面的3

    func("4") //3的执行时间是第5s秒，当前是第7s
    await sleep(2000) //第9秒
    func("5");
    await sleep(2000) //第11秒 此时5会被执行
}

test()


