// ---- giving types while naming variables ----

// String (ts will infer it is a string, so we don't need to write it)
let thisIsString: string = "Henlo";

// number (ts will auto-detect it's a number)
let isNumber = 5;

// boolean(ts will inver this value as bool)
let isBoolean = false;

// case where we need to explicitly use the type
let myVar: string

function myFun() {
    return "Yoooo"
}
// as myFunc can return any type, we need to explicity provide type to myVar
myVar = myFun()

console.log(thisIsString)

// ------ Union Type -------
let score: number | string; // score can be number or string
score = 5;
score = "zero";

// the below is used to remove errors
export {}