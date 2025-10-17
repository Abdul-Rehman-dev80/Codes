function lengthFunc () {
    let arr = ["a", "b", "c", "d"];
    console.log(arr.length);
}
lengthFunc();

function toStringFunc () {
    let arr = ["a", "b", "c", "d"];
    let str = arr.toString()
    console.log(str)
}
toStringFunc();

function atFunc () {
    let arr = ["a", "b", "c", "d"];
    console.log(arr[2]);
}
atFunc();

function joinFunc () {
    let arr = ["a", "b", "c", "d"];
    let str = [arr.join()]
    console.log(str)
}
joinFunc();

function popFunc () {
    let arr = ["a", "b", "c", "d"];
    let newArr = [arr.pop()]
    console.log(arr)
}
popFunc();

function pushFunc () {
    let arr = ["a", "b", "c", "d"];
    let newArr = [arr.push("e")]
    console.log(arr)
}
pushFunc();

function shiftFunc () {
    let arr = ["a", "b", "c", "d"];
    let newArr = [arr.shift()]
    console.log(arr)
}
shiftFunc();

function unshiftFunc () {
    let arr = ["a", "b", "c", "d"];
    let newArr = [arr.unshift("0")]
    console.log(arr)
}
unshiftFunc();

function deleteFunc () {
    let arr = ["a", "b", "c", "d"];
    let newArr = delete arr[2]
    console.log(arr)
}
deleteFunc();

function concatFunc () {
    let arr = ["a", "b", "c", "d"];
    let arr2 = ["e", "f"]
    let newArr = [arr.concat(arr2)]
    console.log(newArr)
}
concatFunc()

function copyWithinFunc () {
    let arr = ["a", "b", "c", "d"];
    let newArr = arr.copyWithin(1, 2, 3)
    console.log(newArr)
}
copyWithinFunc()

function flatFunc () {
    let arr = [["a", "b"], "c", ["d", "e"]];
    let newArr = arr.flat()
    console.log(newArr)
}
flatFunc()

function sliceFunc () {
    let arr = ["a", "b", "c", "d", "e"];
    let newArr = arr.slice(2, 4)
    console.log(newArr)
}
sliceFunc()

function spliceFunc () {
    let arr = ["a", "b", "c", "d", "e"];
    arr.splice(2, 1, "s")
    console.log(arr)
}
spliceFunc()

function toSplicedFunc () {
    let arr = ["a", "b", "c", "d", "e"];
    let newArr = arr.toSpliced(2, 1, "s")
    console.log(newArr)
}
toSplicedFunc()

//array methods

function lengthFunc () {
    let name = "anyName";
    let method = name.length;
    console.log(method);
}
lengthFunc();

function charAtFunc () {
    let name = "anyName";
    let method = name.charAt(2);
    console.log(method);
}
charAtFunc();

function atFunc () {
    let name = "anyName";
    let method = name.at(4);
    console.log(method);
}
atFunc();

function sliceFunc () {
    let name = "anyName";
    let method = name.slice(3, 7);
    console.log(method);
}
sliceFunc();

function concatFunc () {
    let firstName = "Abdul";
    let lastName = "Rehman"
    let method = firstName.concat(" ", lastName);
    console.log(method);
}
concatFunc();

function upperCaseFunc () {
    let name = "anyName";
    let method = name.toUpperCase();
    console.log(method);
}
upperCaseFunc();

function lowerCaseFunc () {
    let name = "ANYName";
    let method = name.toLowerCase();
    console.log(method);
}
lowerCaseFunc();

function isWellFormedFunc () {
    let name = "anyName";
    let method = name.isWellFormed();
    console.log(method);
}
isWellFormedFunc();

function toWellFormedFunc () {
    let name = "anyName";
    let method = name.toWellFormed();
    console.log(method);
}
toWellFormedFunc();

function trimFunc () {
    let name = "    anyName  ";
    let method = name.trim();
    console.log(method);
}
trimFunc();

function repeatFunc () {
    let name = "anyName";
    let method = name.repeat(5);
    console.log(method);
}
repeatFunc();

function replaceFunc () {
    let name = "anyName anyName";
    let method = name.replace("anyName", "myName");
    console.log(method);
}
replaceFunc();

function replaceAllFunc () {
    let name = "anyName anyName";
    let method = name.replaceAll("anyName", "myName");
    console.log(method);
}
replaceAllFunc();

function splitFunc () {
    let name = "a,b,c,d,e,f,g";
    let arr = name.split(",");
    console.log(arr);
}
splitFunc();


let myobj = {
    name: "AbortController",
    age: 20
}

myobj.age;