function randomArr(){

    let x = [];

    for(let i = 0; i < 11; i++){

        x.push(Math.floor(Math.random()*100));
    }
    return x;
}

console.log(randomArr());
