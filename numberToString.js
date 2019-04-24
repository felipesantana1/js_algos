const arr = [11,-2,-5,44,6,-1];

function numberToString(arr){

    for(let i = 0; i < arr.length; i++){

        if(arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
}

numberToString(arr);
console.log(arr);