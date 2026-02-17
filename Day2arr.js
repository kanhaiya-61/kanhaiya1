//inserting element in an array 
//inserting at the begining 
let a=[2,3,4,5,6];
let b= 1;
a.unshift(b);
console.log(a);
//inserting at the end 
let a1=[1,2,3,4,5];
let b1=6;
a1.push(b1);
console.log(a1);
//inserting in between 
let a2=[1,2,5,6];
let pos=2;
let b2=3,b3=4;
a2.splice(pos,0,b2,b3);
console.log(a2);