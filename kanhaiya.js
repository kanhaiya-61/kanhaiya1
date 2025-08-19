let arr=[10,35,25,44,78,];
let maxnum= Math.max(...arr);
console.log("maximum number is :",maxnum);
let ar=[10,50,60,3,4,5,6];
let minnum=Math.min(...arr);
console.log("minimum number is",minnum);
let as=[10,20,30,40,50,60,];
let sum=0;
for(let i=0;i<as.length;i++)
{
    sum+=as[i];
}
console.log("sum of all the elements is:",sum);
let af=[10,11,4,7,8,9,5];
let evennumber=af.filter(num=>num%2==0);
console.log("even numbers are:",evennumber);
let oddnumber=af.filter(num=>num%2!=0);
console.log("odd number is:",oddnumber);
