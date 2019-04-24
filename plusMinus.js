var arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
    var p = 0;
    var n = 0;
    var z = 0;
    
    for(let i = 0; i < arr.length; i++){

        if(arr[i] > 0){
            p += 1;
        }
        else if(arr[i] < 0){
            n += 1;
        }
        else{
            z += 1;
        }
    }
    console.log(p/arr.length, n/arr.length, z/arr.length);
}

plusMinus(arr);