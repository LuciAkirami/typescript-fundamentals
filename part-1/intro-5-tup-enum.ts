// ----- Tuples - Having Order-------
const user: [string, number] = ["yoo",1]
// if order is not mainted gives error
// const anotherUser: [string, number] = [1,"ypp"] complains as order not matched

let rgb: [number, number, number] = [124,125,255];
// rgb = [255,255,255,0]; -> error as it needs only 3 but we gave 4 nums

// --- example with type ----
type User = [number, string]
const newUser: User = [112,"heyahh"]
newUser[1] = "yooo" //weird behaviour of overwriting

// another weird behaviour
// newUser.push("yoo") not detecting error 

// ------------ Enums -----------
enum SeatChoice {
    AISLE, // this has a val of zero
    MIDDLE, // this has a val of one and so on incrementally
    WINDOW
}

const mySeat = SeatChoice.WINDOW

// -- chaning incr value ---- 
enum SeatChoiceUpdated {
    AISLE = 10, // this has a val of 10
    MIDDLE, // this has a val of 11 and so on
    WINDOW
}
// enum SeatChoiceUpdated {
//     AISLE, // this has a val of 21
//     MIDDLE = 22, // this has a val of 22
//     WINDOW // this has a val of 23
// }

// using strings in enums
enum Color{
    RED = "red",
    BLACK = "black"
}

// using strings and numbersin enums 
enum ColorAnother{
    RED = "red",
    BLACK = 9,
    BLUE, // this will be 10
    GREY, // this will be 11 and so on
}

// the above enums generated too much js code(IVFY style), so we can do the below
const enum AnotherColor{
    RED =  "red",
    BLUE = 1,
    GREY,
}
let mycolor = AnotherColor.RED
// transcompile above and check in js file the difference
export {}