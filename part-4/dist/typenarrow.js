"use strict";
function isThatAdmin(user) {
    if ("isAdmin" in user) {
        return "Yas Admin";
    }
    return "No not Admin";
}
function isString(val) {
    if (!val) {
        return "Yes not Null";
    }
    return "No Null";
}
function whatAnimal(animal) {
    if ("swim" in animal) {
        return "yayy fish";
    }
    return "nooo bear";
}
// ------ Type Predicates ---------
// to check if its fish, if it is, it return pet as fish
function isFish(animal) {
    return animal.swim !== undefined;
}
// using above fn in other funcs
function getFood(animal) {
    if (isFish(animal)) {
        return "fish food";
    }
    else {
        return "bear food";
    }
}
// ---- Type Narowing with Instance of -----
// checks if the object is an instance of some class etc
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString);
    }
    else {
        console.log(x.toLowerCase());
    }
}
