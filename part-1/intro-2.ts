// ---- functios in typescript with types ----
// in functions, you need to explicitly give types
function addTwo(num1: number, num2:number){
    console.log(num1 + num2)
    // comment above and uncomment below
    // return "hello"
    // above works because we haven't specified the return type
    // in function signature
}

function giveString(name: string){
    console.log(name)
}

addTwo(1,2)
giveString("Lucifer")

// --- arrow functions and setting default params to arguments ---
let login = (name: string, email: string, isPaid = false) => {}
login("blah","blah@blah.com") // here isPaid is infered as false
login("blah","blah@blah.com",true)

// -- specifiying return type in fn signature

function returnTwo(): number {
    return 2
    // return "give" -> this gives err as its returns string
}

returnTwo()

const getString = (s: string): string => {
    return "yoo"
}

// --- type in map func in arrays ---
let fruits = ["apples","oranges","bananas"]
fruits.map((fruit) => {return `this is ${fruit}`})
fruits.map((fruit): number => {return fruit.length})

// fn where you want to console log instead return

function consoleIt(err): void {
    console.log(err)
    // return 5 -> this returns number but gave it as void
}

// using never for errors, where you need to throw error
function handleError(err): never {
    throw new Error(err)
    // return 5 -> this returns number but gave it as void
}

// returning an object
function returnObject(): {name: string} {
    return {name: "henlo"}
}

// ---- unions in functions -----
function getId(id: number | string) {
    if( typeof id === "string") {
        console.log(id.toLowerCase)
    }
    else if (typeof id === "number") {
        console.log(id+10)
    }
}
getId(5)
getId("number")

export {}