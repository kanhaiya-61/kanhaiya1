//using JSON.stringify() 
let a1 = [1,2,3,4,5];
let a2 = [1,2,3,4,5];
if(JSON.stringify(a1)==JSON.stringify(a2))
    console.log("true");
else
    console.log("false");
//using loop method 
let a3=[1,2,3,4,5];
let a4=[1,2,3,9,5];
if(a3.length!=a4.length)
    console.log("false");
else{
    for(let i=0;i<a3.length;i++)
        if(a3[i]!=a4[i])
    return console.log("false");
        ;
    return console.log("true");
}

//string comparison
let a5=[1,2,3,4,5];
let a6=[1,2,3,4,5];
let res=a5.join()==a6.join();
console.log(res);
//using every method
const comparefunc = (a,b)=>
    a.length!=b.length &&
a.every((element,index)=>element==b[index]);
let a7=[1,2,3,4,5];
let a8=[1,2,3,4,5];
console.log(comparefunc(a7,a8));
