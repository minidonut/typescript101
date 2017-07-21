function sumMatrix(matrix: number[][]): number{
    var sum: number = 0;
    for (var i=0; i<matrix.length; i++){
        var currentRow = matrix[i];
        for (var j=0; j<currentRow.length; j++){
            sum += currentRow[j];
        }
    }
    return sum;
}

var inpt1 = [[1,2,3,4,5],[1,2,3,4,5],[6,7,8,9,10]];

console.log(sumMatrix(inpt1));