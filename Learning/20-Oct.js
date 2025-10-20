// 2723 add two promises

function addTwoPromises(promise1, promise2) {
    return Promise.all([promise1, promise2]).then(value => value[0] + value[1])
}