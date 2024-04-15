function makeCounter() {
    function counter() {
        return counter.count++;
    }
    counter.count = 1;
    counter.set = function (val) {
        counter.count = val;
    }

    counter.decrease = function () {
        counter.count--;
    }
    return counter;
}

counter = makeCounter()


counter()
counter.decrease()
console.log(counter.count)