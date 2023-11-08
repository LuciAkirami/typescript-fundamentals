// ------- Generics -------

// creating a func that is generic over type T
function identityOne<T>(val: T): T {
    return val
}

// using the generic fn with primitive types
identityOne("stringss")
identityOne(123)

// using generic fn with interfaces
interface Bootle {
    brand: string,
    type: number
}

// now bottlefn is a fn that takes Bottle
let bottlefn = identityOne<Bootle>
bottlefn({brand: "zah", type: 5})

// ---- Arrays and Generics in Functions and Arrow Functions -------
// fn that takes in array that is generic over type T
function getProds<T>(products: Array<T>): number{ // or products: T[]
     return products.length
}

// writing the above as a arrow function 
const getProdsArrow = <T,>(products: T[]): number => { // any of <T> or <T,>
    return products.length
}

// calling in the above generic func with arrays containing different types
const numArray: Array<number> = [1,2,3]
const strArray: string[] = ["one","two","three"]

// check this in live-server
console.log(getProds(numArray))
console.log(getProdsArrow(strArray))