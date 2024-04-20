function delay(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, time);
    });
};

delay(2000).then(() => {
    console.log("Hello World");
});