// ---- constructors in class -----
class User{
    public email: string // even if u don't give public, its public
    name: string
    city: string = ""
    readonly id: number = 5
    private privId: number = 10 // saying it's a private in ts
    // #anotherPrivId: number = 100 //another way of saying its private with #
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const newUser = new User("y@y","yoo")
newUser.city = "heycity"
// newUser.id = 10
// newUser.privId not valid as private vars are only accessible within the class

// ---- Professional Way of Writing class -----
// defining class variables in constructor itself
class AnotherUser {

    readonly city: string ="tokio"
    constructor(
        public email: string, 
        public name: string,
        // private id: number = 5, we can also include private
        ){
    }
}

const newUser2 = new User("y@y","yoo")

// ---- Getters and Setters -----

class AnotherUser2 {

    private _courseCount = 1
    protected _anotherCourseCount = 2 // protected can be inherited

    readonly city: string ="tokio"
    constructor(
        public email: string, 
        public name: string,
        // private id: number = 5, we can also include private
        ){
    }

    // --- getters ---
    get someEmail(): string {
        return `some email ${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    // --- setters --- (setter cannot have a return type annotation)
    // so we cannot pass even void, its just nothing
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be > 1")
        }
        this._courseCount = courseNum
    }

    // private functions
    private thisIsPrivate() {
        console.log("heyy I'm private")
    }
}
const newAnotherUser = new AnotherUser2("mailu","luci")
// newAnotherUser.thisIsPrivate -> error as its only accessing within class

// ---- Inheritence in TS -------
// private variables in AnotherrUser2 are not inherited
class SubUser extends AnotherUser2 {
    isFamily: boolean = true
    changeCourseCount(){
        // this._courseCount = 3 doesn't work as private are not inherited
        this._anotherCourseCount
    }
}