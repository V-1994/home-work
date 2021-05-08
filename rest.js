const add = (...num) => {
    console.log(num)
}

add(1,2,3,4,5)
// Copy an array / object

let numArr1 = [1, 2, 3, 4, 5]

let numArr2 = [...numArr1]

numArr1.push(10)

//console.log('arr1', numArr1)
//console.log('arr2', numArr2)
