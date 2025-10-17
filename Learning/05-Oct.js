const myObj = {
    firstName: "fname",
    lastName: "lname",
    age: 21,
    msg: function () {
        console.log(this)
    }
}
// myObj.msg()

function myFunc () {
    const name = "anyName"
    console.log(this)
}
// myFunc()