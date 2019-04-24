const x = [1,2,3,4,5];

function reverseArr(arr){

    let temp;

    for(let i = 0; i < Math.floor(arr.length/2); i++){
        
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
}

reverseArr(x);
console.log(x);