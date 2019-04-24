const arr = [5,76,81,2,45];

function minMaxAvg(arr){

    let max = arr[0];
    let min = arr[0];
    let sum = 0;

    for(let i = 0; i < arr.length; i++){

        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }

        sum += arr[i];
    }

    let avg = sum/arr.length;
    let newArr = [max, min, avg];
    
    return newArr;
}

console.log(minMaxAvg(arr));