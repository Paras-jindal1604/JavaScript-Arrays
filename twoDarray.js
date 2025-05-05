
//? How to create 2D array in JS and access elements from it - 


// A 2D array in JavaScript is an array of arrays like a table/matrix with rows and columns. 

const arr2d = [ [1,2,3],[4,5,6],[8,9,0] ];
console.log(arr2d);
console.log(arr2d[1][2]);
console.log(arr2d[2][0]);
// to access elements, first index is row number and second index is column number.


//? how to create a 3D array -

const arr3d = [ [1,2,[4,5]], [8,9]];
console.log(arr3d);
console.log(arr3d[0][2][0]);
// look for the index of bracket that holds element to access element.


//*  .flat()  -  to convert multi-dimensional arrays into one dimensional array.

const arr2D = [[1,2],[3,4]];
const arr3D = [ [1,2,3,[45,66]],[8,9,0]];
const arr4D = [[1,2,[3,4,[55]]],[8,9]];

const arrfrom2D = arr2D.flat();
console.log(arrfrom2D);

const arrfrom3D = arr3D.flat(2);
console.log(arrfrom3D);

const arrfrom4D = arr4D.flat(3);
console.log(arrfrom4D);

// .flat() takes a parameter - "level" which is by default 1 to conver 2D array.
//  but to convert other multi dimensional arrays, set level = array dimension - 1.
// its better to pass "infinity" as parameter into .flat() so it can convert array of any dimension into 1D.






























