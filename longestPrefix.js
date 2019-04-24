const arr = ["aabbder","aabberr","aabeer","aabl"];

var longestPrefix = function(arr){

    var word = "";

    for(let i of arr){
        let checker = 0, next = i+1;
        while(checker < i.length){
            if(i[checker] === i+1[checker]){
                word += i[checker];
                
            }
        }
    }
    return word;
}


console.log(longestPrefix(arr));