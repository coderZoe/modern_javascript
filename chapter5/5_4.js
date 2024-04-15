let styles = ["Jazz","Blues"]
console.log(styles)
styles.push("Rock-n-Roll")
console.log(styles)
styles[Math.floor((styles.length-1)/2)] = "Classics"
console.log(styles)
styles.shift()
console.log(styles)
styles.unshift("Rap","Reggae")
console.log(styles)

//最大子数组

function maxSubArray(array){
    let data = {
        startIndex: 0,
        endIndex: 0,
        count: array[0]
    }
    for(let i = 0; i < array.length; i++){
        for(let j = i; j < array.length; j++){
            let count = arraySum(i,j,array);
            if(count > data.count){
                data.startIndex = i;
                data.endIndex = j;
                data.count = count;
            }
        }
    }
    return data;
}

function arraySum(startIndex,endIndex,array){
    let count = 0;
    for(; startIndex <= endIndex; startIndex++){
        count+=array[startIndex];
    }
    return count;
}
let array1 = [-1, 2, 3, -9];
let array2 = [2, -1, 2, 3, -9];
let array3 = [-1, 2, 3, -9, 11];
let array4 = [-2, -1, 1, 2];
let array5 = [100, -9, 2, -3, 5]
let array6 = [1, 2, 3]
let array7 = [-5, -2, -3]


function maxSubArrayCount(array){
    let max = array[0];
    let temp = 0;
    for(let item of array){
        temp+=item;
        max = Math.max(max,temp)
        temp = temp < 0?0:temp 
    }
    return max;
}


console.log(JSON.stringify(maxSubArrayCount(array1)))
console.log(JSON.stringify(maxSubArrayCount(array2)))
console.log(JSON.stringify(maxSubArrayCount(array3)))
console.log(JSON.stringify(maxSubArrayCount(array4)))
console.log(JSON.stringify(maxSubArrayCount(array5)))
console.log(JSON.stringify(maxSubArrayCount(array6)))
console.log(JSON.stringify(maxSubArrayCount(array7)))






function sumInput(){
    let count = 0;
    while(true){
        let input = prompt("请输入数字")
        if(input == undefined || input.trim() === "" || isFinite(input)){
            break;
        }
        count += Number(input)

    }

    alert(count)
}

sumInput()

