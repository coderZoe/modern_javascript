function camelize(str){
    return str.split("-").reduce((result,item) => result+=firstUpper(item))
}

function firstUpper(str){
    return str[0].toUpperCase()+str.slice(1)
}

console.log(camelize("list-style-image"))


function filterRange(array,a,b){
    return array.filter(item => item >=a && item <= b)
}

let arr = [5, 3, 8, 1];

console.log(filterRange(arr,1,4))
console.log(arr)


function filterRangeInPlace(array,a,b){
    array.forEach((element,index) => {
        if(element < a || element > b){
            array.splice(index,1)
        }
    });
}
filterRangeInPlace(arr, 1, 4); 
console.log(arr)

let arr2 = [5, 2, 1, -10, 8];

arr2.sort((a,b) => b-a)
console.log(arr2)

function Calculator(){
    this.methods = {
        "+":function(a,b){return a+b},
        "-":function(a,b){return a-b}
    }
    this.addMethod = function(calc,calcFunction){
        this.methods[calc] = calcFunction
    }

    this.calculate =  function(statement){
      let array = statement.split(" ")
      return this.methods[array[1]](+array[0],+array[2])
    }
}
let powerCalc = new Calculator()

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log(powerCalc.calculate("2 + 5"))

console.log(powerCalc.calculate("2 ** 3"));