const arr_check = [4,3,1,5,10,8,6,11,13]
const target_sum = 14

const twoNumberSum = (arr, target) => {
    var idx_arr = []
    arr.map( x => {
        for(let i = arr.indexOf(x)+1; i < arr.length; i++){
            if(arr[i] + x === target){
                let set = [arr.indexOf(x), i]
                idx_arr.push(set);
            }
        }
    })

    return idx_arr
}

console.log(twoNumberSum(arr_check, target_sum));