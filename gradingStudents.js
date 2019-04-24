function solve(grades){

    for(let i = 0; i < grades.length; i++){
        
        if(grades[i] <= 38 || grades[i] >= 100){
            continue;
        }
        else if((grades[i] % 5) > 3){
            grades[i] = grades[i] + (5 - (grades[i]%5));
        }
    }
    console.log(grades);
}

solve([73,67,38,33,44,56,78,90,23,45,67,101]);