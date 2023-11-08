"use strict";
// ------- Generics -------
// creating a func that is generic over type T
function identityOne(val) {
    return val;
}
// using the generic fn with primitive types
identityOne("stringss");
identityOne(123);
// now bottlefn is a fn that takes Bottle
let bottlefn = (identityOne);
bottlefn({ brand: "zah", type: 5 });
// ---- Arrays and Generics in Functions and Arrow Functions -------
// fn that takes in array that is generic over type T
function getProds(products) {
    return products.length;
}
// writing the above as a arrow function 
const getProdsArrow = (products) => {
    return products.length;
};
// calling in the above generic func with arrays containing different types
const numArray = [1, 2, 3];
const strArray = ["one", "two", "three"];
// check this in live-server
console.log(getProds(numArray));
console.log(getProdsArrow(strArray));
