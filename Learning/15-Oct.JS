// 2666. allow one function call

// let once = function(fn) {
//     let run = 0
//     return function(...args) {
//         if (run === 0) {
//             run++
//             return fn(...args)

//         }
//         return undefined
//     }
// }

// let funcOnce = once((a,b,c) => {
//     return a + b + c
// })
// console.log(funcOnce(1,2,3))
// console.log(funcOnce(1,2,3))




// 2715. timeout cancellation

// let fn = () => {
//     console.log("fn running")
// }

// let delayTime = 1000
// let clearTime = 2000

// let timerFn = function () {
//     let timer = setTimeout(fn, delayTime)
//     setTimeout(() => {
//         clearTimeout(timer)
//     }, clearTime)
// }
// timerFn()

let fn = (x) => x * 5, args = [2], t = 20, cancelTimeMs = 50;

let cancellable = function(fn, args, t) {
    let timer = setTimeout(() => {
        let value = fn(args)
        console.log(value)
    }, t)
    setTimeout(() => {
        clearTimeout(timer)
    }, cancelTimeMs)
}
cancellable(fn, args, t)