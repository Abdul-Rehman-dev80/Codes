// let obj = {
//     name: "myname",
//     age: 18,
//     sub: true
// }
// let {name: username, ...obj2} = obj
// console.log(obj2)


// let arr = [1,2,3,4,5]
// let arr2 = [6,7,8,9]

// let arr3 = [...arr, ...arr2]
// // console.log(arr3)

function Person(name) {
    this.name = name
}

Person.prototype.printName = function() {
    console.log(`hello ${this.name}`)
}

let user = new Person("A.Rehman")

user.printName()