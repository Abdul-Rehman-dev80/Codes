let arr = [2, 4, 4, 6, 43]
let newArr = arr.map(dubFunc)

function dubFunc(value) {
    return value * 2
}
console.log(newArr);


let arr2 = arr.filter((value) => {
    return value > 4
})

console.log(arr2);

let arr3 = arr.find((value) => {
    return value > 5
})
console.log(arr3)