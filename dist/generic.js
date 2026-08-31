"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transection = {
    data: "Successfuly transferd",
    status: 200
};
// Function with Generic
function getvalue(value) {
    return value;
}
const name = getvalue("john");
const age = getvalue(25);
const id = getvalue(true);
//how use different types of fixd data type in generic
function getLength(array) {
    return array.length;
}
getLength(['a', 'b', 'c', 'd']);
getLength([1, 2, 3, 4, 5, 6]);
//# sourceMappingURL=generic.js.map