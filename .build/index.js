"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// Course topic ideas: functions are values, code as data, callbacks and higher-order functions, abstract data types
app.get('/', (req, res) => {
    res.send('Hello Express!');
});
// Concept 1: Higher order functions
// Composing functions
//function add(y: int, f: int -> int) {
//    return function (x: int) {
//        y + f(x) 
//    }
//}
//
//function multiply(y: int, f: int -> int) {
//    return function (x: int) {
//        y * f(x) 
//    }
//}
//
//// Chaining via 'next'
//
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
