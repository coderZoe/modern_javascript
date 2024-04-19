let delay = 2000;

new Promise(resolve => {
    setTimeout(() => {
        resolve(1);
    }, delay);
}).then(handle)
    .then(handle)
    .then(handle)
    .then(handle)
    .then(handle);




function handle(result) {
    console.log(result);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(result * 2);
        }, delay);
    });
}

let url = "https://www.coderzoe.com";
fetch(url)
    .then(response => response.text())
    .then(result => console.log(result))