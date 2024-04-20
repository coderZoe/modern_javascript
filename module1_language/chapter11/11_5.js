let userName = ['coderZoe', 'alibaba', 'meta']

let fetchPromiseArray = userName.map(name => fetch(`https://api.github.com/users/${name}`));
Promise.all(fetchPromiseArray)
    .then(responsePromiseArray => {
        let jsonPromiseArray = responsePromiseArray.map(response => response.json())
        return Promise.all(jsonPromiseArray)
    }).then(jsonArray => {
        jsonArray.map(user => user.name).forEach(name => console.log(name))
    }).catch(error => console.error(error));



let fetchPromiseArray2 = userName.map(name => fetch(`https://api.github.com/users/${name}`));
//race只返回最先完成的promise 即使是error 后续的不管
Promise.race(fetchPromiseArray2)
    .then(response => response.json())
    .then(user => console.log(user.name))
    .catch(error => console.error(error))