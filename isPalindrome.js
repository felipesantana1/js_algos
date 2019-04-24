let x = 121
let y = 122
let z = 1221

let a = "hello"
let b = "racecar"
let c = "wow"

const isPlaindrome = {
    
    number: (number) => {

    let temp = number.toString();
    temp = temp.split("");
    let result = "";

    for(let i = temp.length-1; i >= 0; i--){
        result += temp[i];
    }

    if(result == number){
       return true;
    }

    return false;
    },

    string: (string) => {

        let temp = string.split("")
        let result = ""

        for(let i = temp.length-1; i >= 0; i--){
            result += temp[i];
        }

        if(result === string){
            return true;
        }

        return false;
    }
};

console.log(isPlaindrome.number(y));
console.log(isPlaindrome.string(b));