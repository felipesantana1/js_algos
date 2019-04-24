const arr = [2,5,8,9,15];

function squareVals(arr){

    for(let i = 0; i < arr.length; i++){

        arr[i] = arr[i] * arr[i];
    }
}

squareVals(arr);
console.log(arr);