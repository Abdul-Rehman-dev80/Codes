// 2723 add two promises

// function addTwoPromises(promise1, promise2) {
//     return Promise.all([promise1, promise2]).then(value => value[0] + value[1])
// }



// 2724 sort by


let sortBy = function (arr, fn) {
    return arr.sort((a,b) => {
        return fn(a) - fn(b)
    })
}

sortBy([[3, 4], [5, 2], [10, 1]], (x) => x[1])