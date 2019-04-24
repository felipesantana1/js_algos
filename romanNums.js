const romans = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
};

let x = "III"
let y = "LVII"
let z = "XXXIIV"

//NOT FINISHED!! Not even close :/
const convertRomans = (roman) => {
    let temp = roman.split("")
    let result = 0;
    for(let i = 0; i < temp.length; i++){
        if(temp[i] === "I"){
            result += 1;
        }
        if(temp[i] === "V"){
            result += 5;
        }
        if(temp[i] === "X"){
            result += 10;
        }
        if(temp[i] === "L"){
            result += 50;
        }
        if(temp[i] === "C"){
            result += 100;
        }
        if(temp[i] === "D"){
            result += 500;
        }
        if(temp[i] === "M"){
            result += 1000;
        }
    }
    console.log(result);
}

convertRomans(z);
