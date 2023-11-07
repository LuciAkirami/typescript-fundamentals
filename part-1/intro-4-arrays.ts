// ---- Arrays -----
const fruits: string[] = []
fruits.push("oranges")

// other way to declare it
const dec: Array<number> = []
dec.push(5)

// null array
const nully: [] = []
// nully.push(4) -> gives error

// object array
type User = {
    name: string
    id: number
}

const userArray: Array<User> = [] // or userArray: User[] = []
userArray.push({name: "heyy", id: 2})

// ---- 2D Arrays ------
const picture2D: number[][] = []
picture2D.push([1,2,3])

// ----- Unions in Arrays ------
const mixedArray: (string | number)[] = [1,"two"]
const anotherArra: Array<string | boolean> = ["hey",true]

// ----- Any one of the Given ------
let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "middle"
// seatAllotment = "crew" -> gives error as its not present above

export {}
