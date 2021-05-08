// spread operator

//1. concatenate arrays
const arr1 = [1, 2, 3, 4]

const arr2 = [5, 6, 7, 8]

const arr3 = [9, 10, 11, 12]

const result = [...arr1, ...arr2, ...arr3]

 console.log(result)

// 2. passing array as params

const sum = function(num1, num2, num3)  {
    console.log(`num1 ${num1}, num2 ${num2}, num3 ${num3}`)
    console.log(num1 + num2 + num3)
}

const arr = [1, 2, 3]

// console.log(sum(...arr)) 
