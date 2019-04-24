const arr = [-2,3,5,77,8,1];

function findMax(arr){
    
    let max = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(arr));