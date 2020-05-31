/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
    printMatrix(matrix)
    var i = 0, j = 0;
    var isUp = true, n = matrix.length, temp = n * n;
    while (temp != 0) {
        if (isUp) {
            for (; i >= 0 && j < n; i--, j++) {
                console.log(matrix[i][j]);
                temp--;

            }
            if (i < 0 && j<=n-1)
                i=0;
            if (j ==n){
             
                j--;
                   i+=2
            }
            
        } else {
            for (; j >= 0 && i < n; j--, i++) {
                console.log(matrix[i][j]);
                temp--;
            }
            if (j < 0 && i<=n-1)
                j=0;
            if (i ==n)
                {i--;
                    j+=2;

                }
            
        }
        isUp = !isUp;
       
    }
};
function printMatrix(matrix){
    var str1=''
    for(var i of matrix){
        for(var j of i){
            str1+=j+' '
        }
        str1+="\n"
    }
    console.log(str1);
    
    return;
}

findDiagonalOrder([[1, 2, 3,10], [4, 5, 6,20], [7, 8, 9,30],[40,50,60,70]])