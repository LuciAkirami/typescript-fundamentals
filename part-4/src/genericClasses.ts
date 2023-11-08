interface Database {
    connection: string,
    username: string,
    password: string
}

// we are telling the the U extends Database
function afunc<T, U extends Database>(valOne:T, valTwo:U): object {
    return {
        valOne,
        valTwo
    }
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

class Sellable<T> {
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}