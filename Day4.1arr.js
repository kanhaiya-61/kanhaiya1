//string comparison
let a5=[1,2,3,4,5];
let a6=[1,2,3,4,5];
let res=a5.join()==a6.join();
console.log(res);
//using every method
const comparefunc = (a7,a8) =>
    a7.length=a8.length &&
    a7.every((element , index) => element == a8[index]);
        
let a7=[1,2,3,4,5];
let a8=[1,2,3,4,5];
console.log(comparefunc(a7,a8));
//using set method
function compareArrays(a1, a2) {
    const s1 = new Set(a1);
    const s2 = new Set(a2);

    if (s1.size !== s2.size) {
        return false;
    }

    for (const item of s1) {
        if (!s2.has(item)) {
            return false;
        }
    }

    return true;
}

const a3 = [1, 2, 3, 4];
const a4 = [4, 3, 2, 7];

console.log(compareArrays(a3, a4));
//using reduce and sum method
function arraysEqual(a1, a2) {
    if (a1.length !== a2.length) return false;

    let s1 = a1.slice().sort();
    let s2 = a2.slice().sort();

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) return false;
    }
    return true;
}
let a1 = [3, 1, 2];
let a2 = [2, 3, 1];

console.log(arraysEqual(a1, a2));