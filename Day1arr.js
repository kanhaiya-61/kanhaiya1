//convering set to array
//Using spred operetor
let s = new Set(['GFG', 'JS']);
let a = [...s];
console.log(a);
//using Array.form()
let s1 = new Set ([1,2,3,4,5,6]);
let a1 = Array.from(s1);
console.log(a1);
//using push method 
let s3 = new Set (['ka','rj']);
let a3=[];
let f = function (val){
    a3.push(val);
}
s3.forEach(f);
console.log(a3);

//Using Loadash library
const _ = require("lodash");
let s4 = new Set (['kan','raj','ad']);
console.log(_.toArray(s4));