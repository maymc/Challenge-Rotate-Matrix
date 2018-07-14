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
    console.log("matrixLength: " + this.matrix.length);
    let rotatedMatrixCW = [];   //array to store all new rotated rows
    let rotatedRow = [];      //array to store rotated elements

    //If the direction is clockwise
    if(direction === "ClockWise"){

      //Starting from the first column, create new rows of rotated elements and then move to the next column to the right
      for(let j=this.matrix.length - 1; j>=0; j--){
        //From each row, starting from the last row, take the first element and push it into the new row array
        for(let i=this.matrix.length - 1; i>=0; i--){
          // let shiftedRowElem = this.matrix[i].shift();
          // console.log("shiftedRowElem: " + shiftedRowElem);

          rotatedRow.push(this.matrix[i].shift());
          // console.log(rotatedRow);
        }
        //Add this row to the new rotated matrix array
        rotatedMatrixCW.push(rotatedRow);

        rotatedRow = [];    //reset the row array for the next row
      }

      //Set the object's matrix property with a new rotated matrix
      console.log(rotatedMatrixCW);
      this.matrix = rotatedMatrixCW;
      // console.log("done with clockwise");
    }
    //Else is the direction is Counter Clockwise
    else if(direction === "CounterClockWise"){

      //From each row, starting from the first row, pop the last element and push it into the new row array
      for(let j=0; j<this.matrix.length; j++){
        for(let i=0; i<=this.matrix.length - 1; i++){
          // let poppedRowElem = this.matrix[i].pop();
          // console.log("poppedRowElem: " + poppedRowElem);

          rotatedRow.push(this.matrix[i].pop());
          // console.log(rotatedRow);
        }
        //Add this new rotated row to the new rotated matrix array
        rotatedMatrixCW.push(rotatedRow);
        
        rotatedRow = [];    //reset the row for the next row
      }

      //Set the object's matrix property with a new rotated matrix
      console.log(rotatedMatrixCW);
      this.matrix = rotatedMatrixCW;
      // console.log("done with counterclockwise");
    }

    // must be a valid Direction, see Direction.js

  }
};
