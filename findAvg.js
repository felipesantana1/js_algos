const arr = [2,5,88,22,34,-6];

function findAvg(arr){

    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        
        sum += arr[i];
    }
    return sum/arr.length;
}

console.log(findAvg(arr));