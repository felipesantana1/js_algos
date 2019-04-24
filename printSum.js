function printSum(){
    
    let sum = 0;

    for(i = 0; i < 5001; i++){

        sum += i;
    }
    return sum;
}

console.log(printSum());