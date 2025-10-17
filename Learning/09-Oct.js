class MyClass {
    #privateField = "I am private";

    #privateMethod() {
        console.log("This is a private method.");
    }

    getPrivateData() {
        return this.#privateField; // Accessible within the class
    }

    callPrivateMethod() {
        this.#privateMethod(); // Accessible within the class
    }
}

const instance = new MyClass();
// console.log(instance.#privateField); // SyntaxError: Private field '#privateField' must be declared in an enclosing class
// instance.#privateMethod(); // SyntaxError: Private field '#privateMethod' must be declared in an enclosing class

// console.log(instance.getPrivateData());
// instance.callPrivateMethod();

// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// const counter = outer();

// counter();
// counter();
// counter()


// class Animal {
//   makeSound() {
//     console.log("Some generic sound");
//   }
// }

// class Dog extends Animal {
//   makeSound() {
//     console.log("Woof!");
//   }
// }

// class Cat extends Animal {
//   makeSound() {
//     console.log("Meow!");
//   }
// }

// let animals = [new Dog(), new Cat()];
// animals.forEach(a => a.makeSound());


// /**
//  * @param {number} millis
//  * @return {Promise}
//  */
// async function sleep(millis) {
//     let delay = new Promise((reslove, reject) => {
//         setTimeout(() => {
//             console.log(millis)
//         }, millis)
//     })
// }

// let t = Date.now()
// sleep(100).then(() => console.log(Date.now() - t)) // 100


// let arr = [2,3,4,5,7,2]
// let initialvalue = 1
// let arrsum = arr.reduce((acc, num) => {
//     let sum = acc
//     return sum
// }, initialvalue)

// console.log(arrsum)


let nums = [1, 2, 3, 4]
let init
let fn = function sum(acc, curr) {
    return acc + curr
}
