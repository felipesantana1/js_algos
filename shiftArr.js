const arr = [1,4,5,12];

function shiftArr(arr){

    for(let i = 0; i < arr.length; i++){

        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = 0;
}

shiftArr(arr);
console.log(arr);