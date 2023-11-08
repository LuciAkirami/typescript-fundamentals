"use strict";
// we are telling the the U extends Database
function afunc(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
// the below also works and simple
// function afunc<T, Database>(valOne:T, valTwo:Database): object {
//     return {
//         valOne,
//         valTwo
//     }
// }
// afunc(3,"4") doesnt work
// afunc(3,{username:"blah",password:"blah",connection:"blah"})
// ---- Generics in Classes ------
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
