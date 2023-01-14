console.time("start")

const LIMIT = 1000000;

const words = new Array(LIMIT);

for (let i=0; i <LIMIT;i++)
{
    words[i] = i;
}

//words = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]
let tempArr = []
let n = 3
for (let k=0;  k<words.length; k+=n){
    let newArr = []
    if (words.length-k>n-1){
        for (let i = 0; i<n; i++){
            newArr.push(words[k+i])
        }
    }
    else{
        let arr = words.splice(k, n);
        for (let i = 0; i<arr.length; i++){
            newArr.push(arr[i])
        }
    }
    tempArr.push(newArr);
}
console.log(tempArr);

/*function splitArr(arr, n){
    let newArr = [];
    for (let i=0;i<words.length;i+n){
        newArr.push(arr.splice(i, n));
    }
    return newArr;
}*/

/*
var newArr = [];
function splitArr(arr, n){
    if (arr.length){
        newArr.push(arr.filter(word => arr.indexOf(word) < n))
        splitArr(arr.splice(n, arr.length-1),n)
    }
}
*/

//console.log(splitArr(words, 3));


// console.timeLog("start")
console.timeEnd("start")
