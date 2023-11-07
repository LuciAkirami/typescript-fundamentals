"use strict";
// ---- giving types while naming variables ----
Object.defineProperty(exports, "__esModule", { value: true });
// String (ts will infer it is a string, so we don't need to write it)
var thisIsString = "Henlo";
// number (ts will auto-detect it's a number)
var isNumber = 5;
// boolean(ts will inver this value as bool)
var isBoolean = false;
// case where we need to explicitly use the type
var myVar;
function myFun() {
    return "Yoooo";
}
// as myFunc can return any type, we need to explicity provide type to myVar
myVar = myFun();
console.log(thisIsString);
// ------ Union Type -------
var score;
score = 5;
score = "zero";
