// function calc(a, b) {
//     let c = a + b
//     console.log(c)
// }
// calc(5, 6);

// function duplicateFunc() {
//     let arr = [2, 3, 4, 4, 5, 6, 6, 7];
//     let newArr = arr.map((value) => {
//         return value * 2
//     })
//     console.log(newArr)
// }
// duplicateFunc()

// function removedup () {
//     let arr = [2, 3, 4, 4, 5, 6, 6, 7];
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] != arr[i + 1]) {
//             newArr.push(arr[i])
//         }
//     }
//     console.log(newArr)
// }
// removedup()

// function toStringFunc() {
//     let arr = [2, 3, 4, 4, 5, 6, 6, 7];
//     let newArr = arr.toString();
//     console.log(newArr);
// }
// toStringFunc()

// function lengthFunc() {
//     let arr = [4, 4, 5, 6, 6]
//     console.log(arr.length)
// }
// lengthFunc()

// function primeFunc () {
//     let arr = [1,5,2,37, 31,66,45,73]
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == 2 || arr[i] == 3 || arr[i] == 5) {
//             newArr.push(arr[i])
//         } else if (arr[i] % 2 != 0 && arr[i] % 3 != 0 && arr[i] % 5 != 0) {
//             newArr.push(arr[i])
//         }
//     }
//     console.log(newArr)
// }
// primeFunc()


// function largestNum() {
//     let arr = [1, 0, 20, 4, 11, 6, 17];
//     let Num = 0;
//     let secNum = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > Num) {
//             Num = arr[i];
//         }
//     }
//     console.log(`largest no = ${Num}`)
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > secNum && arr[i] < Num) {
//             secNum = arr[i]
//         }
//     }
//     console.log(`second largest no = ${secNum}`)
// }
// largestNum()


// function largestNum() {
//     let arr = [1, 0, 20, 4, 11, 6, 17];
//     let Num = 0;
//     let secNum = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > Num) {
//             Num = arr[i];
//         }
//     }
//     console.log(`largest no = ${Num}`)
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > secNum && arr[i] < Num) {
//             secNum = arr[i]
//         }
//     }
//     console.log(`second largest no = ${secNum}`)
// }
// largestNum()