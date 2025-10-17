// 1. two sum

// let twoSum = function (arr, target) {
//     for (let h = 0; h < arr.length; h++) {
//         for (let i = 1; i < arr.length; i++) {
//             if (arr[h] + arr[i] === target && h != i) {
//                 return [h, i]
//             }
//         }
//     }

// }

// console.log(twoSum([2,5,5,11], 10))



// 9 Palindrome number

// let isPalindrome = function(num) {
//     let number = num.toString().split("")
//     let strnum = number.toString()
//     let reversedNum = number.toReversed().toString()
//     if(strnum === reversedNum) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isPalindrome(102))



// 13. roman to integer

// let romanToInt = function (str) {
//     let romNum = str
//     let integer = "";
//     // let I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 100

//     for (let i = romNum.length - 1; i >= 0; i--) {
//         if (romNum[i] === "I") {
//             if (romNum[i - 1] === "I") {
//                 if (romNum[i - 2] === "I") {
//                     integer += "3"
//                     i - 2
//                     console.log(i)
//                 } else if (romNum[i - 1] === "I") {
//                     integer += "2"
//                     i - 1
//                 }

//             } else if (romNum[i] === "I") {
//                 integer += 1
//             }

//         } else if (romNum[i] === "V") {
//             integer += "5"
//         }
//     }
//     console.log(integer)
// }

// romanToInt("III")



// 14 longest common prefix

// let longestCommonPrefix = function (arr) {
//     let array = arr
//     let prefixArr = []
//     let prefix = []
//     let loopCount = array[0].length

//     if (array.length === 1) {
//         prefixArr.push(array[0])
//         return prefixArr.toString()
//     } else {
//         for (let i = 0; i < loopCount; i++) {
//             for (let h = 1; h < array.length; h++) {
//                 if (array[0][i] === array[h][i]) {
//                     prefixArr.push(array[0][i])
//                 }
//             }
//         }
//         for (let i = 0; i < loopCount; i++) {
//             if (prefixArr[i] === prefixArr[i + 1]) {
//                 prefix.push(prefixArr[i])
//             }
//         }
//         let prefixStr = prefix.join("")
//         return prefixStr
//     }

// }

// let longestCommonPrefix = function (arr) {
//   if (arr.length === 0) return "";

//   let loopCount = Math.min(...arr.map(value => value.length));

//   for (let i = 0; i < loopCount; i++) {
//     for (let h = 1; h < arr.length; h++) {
//       if (arr[0][i] !== arr[h][i]) {
//         return arr[0].slice(0, i);
//       }
//     }
//   }
//   return arr[0].slice(0, loopCount);
// }

// console.log(longestCommonPrefix(["flow", "flow", "flow"]));
// console.log(longestCommonPrefix(["ab", "a"]));


// 2648. generate fibbonacci sequence

let fibGenerator = function*() {
    let a = 0
    yield a
    let b = 1
    yield b
    while(true) {
        c = a + b
        a = b
        b = c
        yield c
    }
}
let generator = fibGenerator()
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)