"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ---- functios in typescript with types ----
// in functions, you need to explicitly give types
function addTwo(num1, num2) {
    console.log(num1 + num2);
    // comment above and uncomment below
    // return "hello"
    // above works because we haven't specified the return type
    // in function signature
}
function giveString(name) {
    console.log(name);
}
addTwo(1, 2);
giveString("Lucifer");
// --- arrow functions and setting default params to arguments ---
var login = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
login("blah", "blah@blah.com"); // here isPaid is infered as false
login("blah", "blah@blah.com", true);
// -- specifiying return type in fn signature
function returnTwo() {
    return 2;
    // return "give" -> this gives err as its returns string
}
returnTwo();
var getString = function (s) {
    return "yoo";
};
// --- type in map func in arrays ---
var fruits = ["apples", "oranges", "bananas"];
fruits.map(function (fruit) { return "this is ".concat(fruit); });
fruits.map(function (fruit) { return fruit.length; });
// fn where you want to console log instead return
function consoleIt(err) {
    console.log(err);
    // return 5 -> this returns number but gave it as void
}
// using never for errors, where you need to throw error
function handleError(err) {
    throw new Error(err);
    // return 5 -> this returns number but gave it as void
}
// returning an object
function returnObject() {
    return { name: "henlo" };
}
// ------ typescript weird behaviour ------
function createSomething(_a) {
    var string = _a.name;
    console.log("heyy");
}
createSomething({ name: "yooo" });
// here it's weird
var names = { name: "yoo", id: 5 };
createSomething(names); // here its not catching the error
// ---- unions in functions -----
function getId(id) {
    if (typeof id === "string") {
        console.log(id.toLowerCase);
    }
    else if (typeof id === "number") {
        console.log(id + 10);
    }
}
getId(5);
getId("number");
