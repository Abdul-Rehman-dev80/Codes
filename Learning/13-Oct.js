// 2667. create hello world function


// function createHelloWorld() {
//     return function() {
//         return "Hello World"
//     }
// }

// let func = createHelloWorld()
// console.log(func())




// 2695 Array wrapper

// class ArrayWrapper {
//     constructor(arr) {
//         this.arr = arr
//     }
//     toString() {
//         this.arr = `${this.arr}`
//         return this.arr
//     }
//     valueOf() {
//         let sum = 0
//         for(let i = 0; i < this.arr.length; i++){
//             sum += this.arr[i]
//         }
//         return sum
//     }
// }

// let Obj1 = new ArrayWrapper([23,98,42,70])
// let Obj2 = new ArrayWrapper([2,3,4])

// console.log(Obj1.toString())



// 2703. return length of argument passed

// let argumentsLength = function(...args) {
//     let arr = [...args]
//     return arr.length
// }

// console.log(argumentsLength(1,2,4))



// 2704. to be or not to be

// let expect = function (val1) {
//     let value1 = val1
//     function toBe(val2) {
//         let value2 = val2
//         if (value1 === value2) {
//             return true
//         } else {
//             throw new Error("Not Equal");

//         }
//     }
//     function notToBe(val2) {
//         let value2 = val2
//         if (value1 !== value2) {
//             return true
//         } else {
//             throw new Error("Equal");
//         }
//     }
//     return {
//         toBe,
//         notToBe
//     }
// }

// console.log(expect(5).toBe(6))
// console.log(expect(5).notToBe(5))



// 2677 chunk Array

// let array = [1, 2, 3, 4, 5]
// let copiedarr = array.slice(0, array.length)
// let size = 3

// let chunkedArr = []

// for (let i = 0; i < array.length; i++) {
//     let element = copiedarr.slice(0, size)
//     copiedarr.splice(0, size)
//     if (element.length != 0) {
//         chunkedArr.push(element)
//     }
// }
// console.log(chunkedArr)


// let chunk = function (arr, sze) {
//     let array = arr
//     let looplength = array.length
//     let chunkedArr = []
//     let size = sze

//     for (let i = 0; i < looplength; i++) {
//         let element = array.slice(0, size)
//         array.splice(0, size)
//         if (element.length != 0) {
//             chunkedArr.push(element)
//         }
//     }
//     return chunkedArr
// }
// chunk([1,2,3,4,5], 2)



// 2666. Allow one function call

let once = function(fn) {
  let called = false;
  let result;

  return function(...args) {
    if (!called) {
      called = true;
      result = fn(...args);
      return result;
    }
    return undefined;
  };
};


let fn = (a, b, c) => a + b + c;
let onceFn = once(fn); 
