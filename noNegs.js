const arr = [12,-44,-2,55,67,-1];

function noNegs(arr){

    for(let i = 0; i < arr.length; i++){

        if(arr[i] < 0){
            arr[i] = ":)"
        }
    }
}

noNegs(arr);
console.log(arr);