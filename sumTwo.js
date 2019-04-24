var nums = [2,7,11,15]
var target = 18;

var twoSum = function(nums, target){

    for(let i = 0; i < nums.length; i ++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j];
            };
        };
    };
    return "No two elements equal to target!";
}

console.log(twoSum(nums, target));