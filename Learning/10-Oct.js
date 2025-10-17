// /**
//  * @param {number} millis
//  * @return {Promise}
//  */
// async function sleep(millis) {
//     let delayTime = millis
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             reslove(delayTime)
//         }, delayTime)
//     })
// }

// // let t = Date.now()
// // sleep(1000).then(() => console.log(Date.now() - t)) // 100

// sleep(1000).then((msg) => {
//     console.log(msg)
// })




// function greet(name) {
//   console.log("Hello, " + name + "!");
// }

// function processUserInput(callback) {
//   let name = "John";
//   callback(name); // runs the passed function
// }

// processUserInput(greet);




// let myReduce = function (nums, fn, init) {
//     let arr = nums
//     let num = init
//     for (let i = 0; i < arr.length; i++) {
//         num = fn(num , arr[i])
//     }
//     return num;
// }

// console.log(myReduce([1,2,3], function(acc, curr){
//     return acc + curr
// }, 0))



// 2629. function composition

// let arr = [function (x) {
//     return x + 1
// }, function (x) {
//     return x * 2
// }]
// let reversedArr = arr.reverse()
// let params = 4
// for (let i = 0; i < arr.length; i++) {
//     params = (reversedArr[i])(params)
// }
// console.log(params)



//  * @param {Function[]} functions
//  * @return {Function}

// let compose = function (functions) {
//     let arr = functions.reverse()
//     return function (x) {
//         let params = x
//         for (let i = 0; i < arr.length; i++) {
//             params = (arr[i])(params)
//         }
//         return params
//     }
// };

// let fn = compose([x => x + 1, x => 2 * x])
// console.log(fn(4)) // 9



// let arr = [1, 2, 3, 4, 5, 6, 7];
// let filteredArr = []
// function myfilter() {
//     for(let i = 0; i < arr.length; i++){
//         let element = arr[i]
//         let index = i
//         if (element > 5) {
//             filteredArr.push(element)
//         }
//     }
// }
// myfilter()
// console.log(filteredArr)

let myfilter = (arr, fn) => {
    let newarr = []
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i], i)
        if (fn(arr[i]) === true) {
            newarr.push(arr[i])
        } else if (fn(arr[i],i) === true) {
            newarr.push(arr[i])
        } else if (fn(arr[i])) {
            newarr.push(arr[i])
        }
    }
    console.log(newarr) 
}

myfilter([-2,-1,0,1,2], function plusOne(n) { return n + 1 })