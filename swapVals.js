const x = [1,2,3,4];

function swapVals(arr){

    let temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    return arr;
}

console.log(x)
console.log(swapVals(x));