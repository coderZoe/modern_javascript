//map转hObject与Object转Map
let map = new Map();
map.set("tom", { name: "tom", age: 12 });
map.set("peter", { name: "peter", age: 13 });
map.set("john", { name: "john", age: 14 });
map.set("zoe", { name: "zoe", age: 15 });

let userObj = Object.fromEntries(map)
console.log(JSON.stringify(userObj))


let map2 = new Map(Object.entries(userObj))
console.log(map2)

//map迭代
for (const entry of map) {
    console.log(entry[0])
    console.log(entry[1])
}

for (const key of map.keys()) {
    console.log(key)
}

for (const value of map.values()) {
    console.log(value)
}

//set
let set = new Set();
set.add("hello")
set.add("world")
set.add("hello")
for (let item of set) {
    console.log(item)
}
set.forEach(item => console.log(item))


//作业
let array = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
let map5 = new Map()
for (let item of array) {
    let key = item.toLowerCase().split("").sort().join("");
    if (map5.get(key) == undefined) {
        map5.set(key, item)
    }
}
console.log(map5.keys())
console.log(map5.values())



