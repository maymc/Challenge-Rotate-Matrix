const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor( matrix ) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate (direction) {
    // do work here
    console.log(this.matrix);
    console.log("direction: " + direction)
    // console.log("matrix row: " + this.matrix[0]);
    // console.log("element in matrix at this position: " + this.matrix[0][0]);

    let matrixLength = this.matrix.length;
    console.log("matrixLength: " + matrixLength);
    let matrixRows = matrixLength - 1;
    console.log("matrixRows: " + matrixRows);
    let rotatedMatrixCW = [];
    let rotatedRow = [];

    if(direction === "ClockWise"){
      for(let j=matrixRows; j>=0; j--){
        for(let i=matrixRows; i>=0; i--){
          let shiftedRowElem = this.matrix[i].shift();
          console.log("shiftedRowElem: " + shiftedRowElem);
          rotatedRow.push(shiftedRowElem);
          console.log(rotatedRow);
        }
        rotatedMatrixCW.push(rotatedRow);
        console.log(rotatedMatrixCW);
        rotatedRow = []; //reset the row 
      }
      this.matrix = rotatedMatrixCW;
      console.log("done with clockwise");
    }
    else if(direction === "CounterClockWise"){
      for(let j=0; j<matrixLength; j++){
        for(let i=0; i<=matrixRows; i++){
          let poppedRowElem = this.matrix[i].pop();
          console.log("poppedRowElem: " + poppedRowElem);
          rotatedRow.push(poppedRowElem);
          console.log(rotatedRow);
        }
        rotatedMatrixCW.push(rotatedRow);
        console.log(rotatedMatrixCW);
        rotatedRow = []; //reset the row 
      }
      this.matrix = rotatedMatrixCW;
      console.log("done with counterclockwise");
    }

    // must be a valid Direction, see Direction.js

  }
};
