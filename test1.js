//find the second largest element in the array .
function second_largest(arr){
    let largest= -Infinity,second= - Infinity;
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
    second=largest ;
    largest = arr[i];
}else if (arr[i]>second&&arr[i]!=largest){
    second =arr[i];
}
}
return second
}
console.log(second_largest([10,30,2,6,80,90]));
//remove the duplicate elements of the given array .
function remove_duplicate(arr){
    let result=[];
    for(let i=0;i<arr.length;i++){
        let exists = false;
        for(let j=0;j<result.length;j++){
            if(arr[i]===result[j]){
                exists=true;
                break;
            
            }
        }
        if(!exists)result.push(arr[i]);
    }
    return result;
}
console.log(remove_duplicate([1,1,2,3,4,5,5,6,7]));
//rotate an array by k position.
function rotatearray(arr,k){
    let n = arr.length ;
    k=k%n;
    for (let i=0;i<k;i++){
        let last = arr[n-1];
        for(let j=n-1;j>0;j--){
            arr[j]=arr[j-1];
        }
        arr[0]=last;
    }
    return arr;
}
console.log(rotatearray([1,2,3,4,5,6,7],3));
//sort an array in ascending order .
function sortarray(arr){
    for(let i=0;i<arr.length -1;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if (arr[j]>arr[j+1]){
                let temp =arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
console.log(sortarray([1,4,6,3,9,4,8,0,3]));
//find all the pairs with a given target sum 
function find_pairs(arr,target){
    let pairs =[];
    for (let i=0;i<arr.length;i++){
        for ( let j=i+1;j<arr.length;j++){
            if ( arr[i]+arr[j]===target){
                pairs.push([arr[i],arr[j]]);
            }
        }    }
        return pairs;
}
console.log(find_pairs([1,2,3,4,5,6,7],8));
//intersection of two elements
function intersection(arr1,arr2){
    let result=[];
    for(let i = 0;i<arr1.length;i++){
        for (let j =0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                let exists=false;
                for(let k=0;k<result.length;k++){
                    if(result[k]==arr1[i]){
                    exists=true;
                    break;
                }
            }
            if(!exists)result.push(arr1[i]);
        }
    }
}
return result ;
}
console.log(intersection([1,2,3,4,5,6],[3,4,5,6,7,8]));
//count any frequency of each element
function frequencycount(arr){
    let freq={};
    for ( let i=0; i<arr.length; i++){
        if ( freq[arr[i]]){
            freq[arr[i]]++;
        }else{
            freq[arr[i]]=1;
        }
    }
    return freq;
}
console.log(frequencycount([1,2,3,4,4,5,5,6,6]));
//maximum subarray sum 
function maxsubarraysum(arr){
    let maxsofar=arr[0];
    let currentmax=arr[0];
    for(let i=1;i<arr.length;i++){
        currentmax=Math.max(arr[i],currentmax+arr[i]);
        if(currentmax>maxsofar){
            maxsofar=currentmax;
        }
    }
    return maxsofar;
}
console.log(maxsubarraysum([1,2,3,4,5,6,7]));
//merge two sorted array 
function mergesortedarrays(arr1,arr2){
    let i =0,j=0,result=[];
    while(i<arr1.length && j< arr2.length){
        if ( arr1[i]<arr2[j]){
            result.push(arr1[i++]);
        }else{
            result.push(arr2[j++]); 
        }
    }
    while(i<arr1.length) result.push(arr1[i++]);
    while(j<arr2.length) result.push(arr2[j++]);
    return result;
} 
console.log(mergesortedarrays([1,2,3,4,5],[2,5,6,8,9]));
// check if an array is palindrome
function ispalindrome(arr){
    let n=arr.length;
    for(let i=0;i<Math.floor(n/2);i++){
        if ( arr[i]!==arr[n-1-i]) return false;
    }
    return true ;
}
console.log ( ispalindrome([1,2,3,4,5,4,3,2,1]));

