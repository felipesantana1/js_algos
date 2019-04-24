const arr = [22,34,122,56,888,345];
const y = 100;

function greaterThanY(arr, y){

    let count = 0;

    for(let i = 0; i < arr.length; i++){

        if(arr[i] > y){

            count ++;
        }
    }
    return count;
}

console.log(greaterThanY(arr, y));