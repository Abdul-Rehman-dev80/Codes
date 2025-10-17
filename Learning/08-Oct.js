const user = {
    userName: "name",
    loginCount: 8,
    signedIn: true,
    printUserName: function() {
        console.log("username is:", user.userName)
    }
// }
// user.printUserName()

// function User(userName, loginCount, signedIn) {
//     this.userName = userName
//     this.loginCount = loginCount
//     this.signedIn = signedIn
//     return this
    // let Obj = {
    // username: userName,
    // logincount : loginCount,
    // signedin : signedIn
    // }
    // return Obj
}

// let user1 = new User("mani", 8, true);
// let user2 = new User("hisname", 9, false)

// console.log(user1)
// console.log(user2)


// String.prototype.trueLength = function() {
//    console.log(this.trim().length) 
// }

// let str = "yourName  "
// str.length


//call
// function setUsername (username) {
//     this.username = username
// }

// function createUser(username, email, password) {
//     setUsername.call(this, username)
//     this.email = email
//     this.password = password
// }

// let user1 = new createUser("mani", "ar@", "123")
// console.log(user1)

// function getName(name) {
//     this.name = name
// }

// getName.prototype.encrypt = function () {
//     console.log(this.name + "abc")
// }

// let t = new getName("mani");

// t.encrypt()

// class User {
//     constructor (userName, email, password) {
//         this.userName = userName
//         this.email = email
//         this.password = password
//     }
//     encrupt() {
//         console.log(this.password + "1a")
//     }
//     UPCase() {
//         console.log(this.userName.toUpperCase())
//     }
// }

// let user1 = new User("mani", "ar@", "asdg")

// console.log(user1)


// class teacher extends User {
//     constructor (username, email) {
//         super(username)
//         this.email = email
//     }
// }



// object own property

// const obj = {
//     username: "AR",
//     sub: true
// }
// console.log(Object.getOwnPropertyDescriptor(obj, "username"))

// Object.defineProperty(obj, "username", {
//     writable: false
// })
// console.log(Object.getOwnPropertyDescriptor(obj, "username"))


// leetcode prob

// Array.prototype.last = function () {
//     let index = this.length - 1
//     if (index < 0) {
//         console.log(-1)
//     } else {
//         console.log(this[index])
//     }
// }
// let arr = [null, {}, 3]
// arr.last()




// getters and setters

// class User {
//     constructor (username, password) {
//         this.username = username
//         this.password = password
//     }
//     get username() {
//         return this._username.toUpperCase()
//     }
//     set username(value) {
//         this._username = value
//     }
// }

// let user1 = new User("mani", 321)

// console.log(user1.username)


class User {
    constructor (username, password) {
        this.username = username
        this.password = password
    }
    get password() {
        return `${this._password}1a`
    }
    set password(value) {
        this._password = value
    }
}
let user1 = new User("mani", "asrock")

console.log(user1.password)