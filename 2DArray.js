const arr = [ [ 1, 1, 1, 0, 0, 0 ],
[ 0, 1, 0, 0, 0, 0 ],
[ 1, 1, 1, 0, 0, 0 ],
[ 0, 9, 2, -4, -4, 0 ],
[ 0, 0, 0, -2, 0, 0 ],
[ 0, 0, -1, -2, -4, 0 ] ];

function twoDArray(arr){

    var count = 0;

    for(var i = 0; i < arr.length; i++){
        
        count += (arr[i][0] + arr[i][1] + arr[i][2]);
        count += arr[i+1][1];
        console.log(count)
    }

}

console.log(arr[0].slice(0,3));
twoDArray(arr)