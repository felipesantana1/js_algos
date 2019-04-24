const arr = [1,2,3,4];

function swapXinY(x, y, arr){

    arr.splice(arr[y], 0, x);
}

swapXinY(2,1, arr);
console.log(arr);