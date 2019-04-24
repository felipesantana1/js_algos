function oddArr(){

    let arr = [];

    for(let i = 1; i < 256; i += 2){

        arr.push(i);
    }
    return arr;
}

console.log(oddArr());