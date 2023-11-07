"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----- Tuples - Having Order-------
var user = ["yoo", 1];
// if order is not mainted gives error
// const anotherUser: [string, number] = [1,"ypp"] complains as order not matched
var rgb = [124, 125, 255];
var newUser = [112, "heyahh"];
newUser[1] = "yooo"; //weird behaviour of overwriting
// another weird behaviour
// newUser.push("yoo") not detecting error 
// ------------ Enums -----------
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
var mySeat = SeatChoice.WINDOW;
// -- chaning incr value ---- 
var SeatChoiceUpdated;
(function (SeatChoiceUpdated) {
    SeatChoiceUpdated[SeatChoiceUpdated["AISLE"] = 10] = "AISLE";
    SeatChoiceUpdated[SeatChoiceUpdated["MIDDLE"] = 11] = "MIDDLE";
    SeatChoiceUpdated[SeatChoiceUpdated["WINDOW"] = 12] = "WINDOW";
})(SeatChoiceUpdated || (SeatChoiceUpdated = {}));
// enum SeatChoiceUpdated {
//     AISLE, // this has a val of 21
//     MIDDLE = 22, // this has a val of 22
//     WINDOW // this has a val of 23
// }
// using strings in enums
var Color;
(function (Color) {
    Color["RED"] = "red";
    Color["BLACK"] = "black";
})(Color || (Color = {}));
// using strings and numbersin enums 
var ColorAnother;
(function (ColorAnother) {
    ColorAnother["RED"] = "red";
    ColorAnother[ColorAnother["BLACK"] = 9] = "BLACK";
    ColorAnother[ColorAnother["BLUE"] = 10] = "BLUE";
    ColorAnother[ColorAnother["GREY"] = 11] = "GREY";
})(ColorAnother || (ColorAnother = {}));
var mycolor = "red" /* AnotherColor.RED */;
