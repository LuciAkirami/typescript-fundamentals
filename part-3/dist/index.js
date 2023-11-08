"use strict";
// ---- constructors in class -----
class User {
    // #anotherPrivId: number = 100 //another way of saying its private with #
    constructor(email, name) {
        this.city = "";
        this.id = 5;
        this.privId = 10; // saying it's a private in ts
        this.email = email;
        this.name = name;
    }
}
const newUser = new User("y@y", "yoo");
newUser.city = "heycity";
// newUser.id = 10
// newUser.privId not valid as private vars are only accessible within the class
// ---- Professional Way of Writing class -----
// defining class variables in constructor itself
class AnotherUser {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "tokio";
    }
}
const newUser2 = new User("y@y", "yoo");
// ---- Getters and Setters -----
class AnotherUser2 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this._anotherCourseCount = 2; // protected can be inherited
        this.city = "tokio";
    }
    // --- getters ---
    get someEmail() {
        return `some email ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // --- setters --- (setter cannot have a return type annotation)
    // so we cannot pass even void, its just nothing
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be > 1");
        }
        this._courseCount = courseNum;
    }
    // private functions
    thisIsPrivate() {
        console.log("heyy I'm private");
    }
}
const newAnotherUser = new AnotherUser2("mailu", "luci");
// newAnotherUser.thisIsPrivate -> error as its only accessing within class
// ---- Inheritence in TS -------
// private variables in AnotherrUser2 are not inherited
class SubUser extends AnotherUser2 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        // this._courseCount = 3 doesn't work as private are not inherited
        this._anotherCourseCount;
    }
}
