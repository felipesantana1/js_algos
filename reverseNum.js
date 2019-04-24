var x = 879998;

var reverseNum = function(x) {
    
    if(typeof(x) === 'number'){

        var temp = Math.abs(x)
        temp = temp.toString();
        var newx = "";
        var maxInt = 2147483647;

        for(let i = temp.length-1; i >= 0; i--){

            newx += temp[i];
        }
    } else {
        return NaN;
    }
    newx = Number(newx);

    if(x < 0 && x < maxInt && newx < maxInt){
        return newx*-1;
    } else if(x > 0 && x < maxInt && newx < maxInt) {
        return newx;
    } else {
        return 0;
    }
    
};

console.log(reverseNum());