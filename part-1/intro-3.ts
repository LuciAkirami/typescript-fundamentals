// --- intro to types -----

type User = {
    name: string,
    email: string,
    isActive: boolean
}

function createUser(user: User): User {
    return user
}

// createUser({name: "yoo"}) -> complains
createUser({name: "yayy", email: "h@g.com", isActive: true})

// --- "readonly" , "optional" in types -------
type User2 = {
    readonly _id: string // we dont want anyone to change this
    name: string,
    email: string,
    isActive: boolean,
    creidcardDetails?: number // ? => optional field
}

let myUser: User2 = {
    _id: "123",
    name: "yoo",
    email: "g@g",
    isActive: false
}

myUser.email = "jam@j"
// myUser._id = 5 -> it complains saying its a ready only

// uncomment below and check if _id is changed in intro-3.js
// u will see it will be not changed and will remain 123
// myUser._id = 10;

// ----- extending types --------
type cardNumber = {
    cardnumber: string
}
type cardDate =  {
    cardDate: string 
}

// now i want to create cardDetails type that contains both the above
// and an extra field cvv
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

// Unions in Object
type Person = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let someone: Person | Admin = {name:"luci",id:5}
someone = {username:"luciakirami",id:5}


export {}