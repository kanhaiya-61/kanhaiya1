//Delete from a js array 
//delete from the begining 
let a=[1,2,3,4,5,6];
let res= a.shift();
console.log(res);
//Delete from a given position in an array 
let a1=[1,2,3,4,5,6];
let idx=2;
let res1 = a1.splice(idx,1);
console.log(res1);
//delete an array from the end of an array 
let a2=[1,2,3,4,5,6];
let res2=a.pop();
console.log(res2);
//delting the first occurence of an element in an array
let a3=[1,2,3,2,4,5,6];
let x=2;
let idx1=a3.indexOf(x);
if(idx1!=-1){
    a3.splice(idx1,1);
}
console.log(a3);
//Delete last occurence of an element in an array 
let a4=[1,2,3,2,4,5,6,];
let x1=2;
let idx2=a4.lastIndexOf(x1);
if(idx2!=-1){
    a4.splice(idx2,1);
}
console.log(a4);
//Delete all occurence in an array
let a5=[1,2,3,2,4,5,6];
let x2=2;
let res3=a5.filter(e=>e!==x);
console.log(res3);