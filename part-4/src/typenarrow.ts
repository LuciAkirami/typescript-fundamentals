interface User {
    name: string,
    email: string
}

interface Admin extends User {
    isAdmin: boolean
}

function isThatAdmin(user: User | Admin): string {
    if("isAdmin" in user) {
        return "Yas Admin"
    }
    return "No not Admin"
}

function isString(val: string | null): string {
    if(!val){
        return "Yes not Null"
    }
    return "No Null"
}

type Fish = {swim: () => void}
type Bear = {walk: () => void}

function whatAnimal(animal: Fish | Bear): string {
    if("swim" in animal){
        return "yayy fish"
    }
    return "nooo bear"
}

// ------ Type Predicates ---------
// to check if its fish, if it is, it return pet as fish
function isFish(animal: Fish | Bear): animal is Fish {
    return (animal as Fish).swim !== undefined
}

// using above fn in other funcs
function getFood(animal: Fish | Bear) {
    if(isFish(animal)){
        return "fish food"
    } else {
        return "bear food"
    }
}

// ---- Type Narowing with Instance of -----
// checks if the object is an instance of some class etc
function logValue(x: Date | string) {
    if(x instanceof Date){
        console.log(x.toUTCString);
    }
    else {
        console.log(x.toLowerCase());
    }
}