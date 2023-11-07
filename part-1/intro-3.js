"use strict";
// --- intro to types -----
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return user;
}
// createUser({name: "yoo"}) -> complains
createUser({ name: "yayy", email: "h@g.com", isActive: true });
var myUser = {
    _id: "123",
    name: "yoo",
    email: "g@g",
    isActive: false
};
myUser.email = "jam@j";
var someone = { name: "luci", id: 5 };
someone = { username: "luciakirami", id: 5 };
