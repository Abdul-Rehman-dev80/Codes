// 2648 generate fiboncci sequence

// let arr = [0,1]
// for(let i = 0; i < 10; i++) {
//     let j = i + 1
//     let num = arr[i] + arr[j]
//     arr.push(num)
// }
// console.log(arr)


// function* fibonacci() {
//     let a = 10
//     let b = 20
//     while(true) {
//         yield [a, b]
//     }
// }

// const gen = fibonacci();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);



function counter(value) {
    let initVal = value
    let editableVal = value
    function increment() {
        editableVal = editableVal + 1
        return editableVal
    }
    function decrement() {
        editableVal = editableVal - 1
        return editableVal
    }
    function reset() {
        editableVal = initVal
        return editableVal
    }

    return {
        increment,
        decrement,
        reset
    }
}
let runCounter = counter(10)

console.log(runCounter.increment())
console.log(runCounter.increment())
console.log(runCounter.decrement())
console.log(runCounter.increment())
console.log(runCounter.reset())