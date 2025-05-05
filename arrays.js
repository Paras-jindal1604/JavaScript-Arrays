
//? An Array is a special variable, which can hold more than one value.

//*  creating an array using array literal.

const arr = [2,3,"batman", true, 4,5];
console.log(arr);

// we can find its length and element at any index as -

console.log(arr.length);
console.log(arr[0]);
console.log(arr[4]);
console.log(arr[9]);
// if index is more than array length, then it will print "undefined".

//* How to check for an array -  Array.isArray()
console.log(Array.isArray(arr));
// it returns true if parameter is array else returns false.


//* we can create an array first, then add elements to it - 

const arr2 = [];
arr2[0] = "hello";
arr2[2] = 45;
arr2[3] = 9;
console.log(arr2);
// if an element of array isn't given by us, then it shows <1 empty item> so that no other item could take that space.



//* creating an array using new keyword - 

const arr3 = new Array(17,45,18,33);
console.log(arr3)

// However, this method is not convinient as if we pass only one value then it consider that value as size of array.
const fault = new Array(5);
console.log(fault);
// this throws [ <5 empty items> ] as output because it takes values only when more than 2 parameters are passed.



//* to access array elements using .at() method -

const arr4 = [98,33,56,25,19];
console.log(arr4.at(2));
console.log(arr4.at(4));
console.log(arr4.at(10));
// it will show undefined if the passed parameter is more than array length.

//  .at() method also accept negative indexes. 
//  the negative index of an array start from -1 from the last element of array.

console.log(arr4.at(-2));
console.log(arr4.at(-5));
console.log(arr4.at(-9));



//* creating a new array using old array - 

const arr5 = [1,2,3,4,5];
const arr6 = arr5;
console.log(arr6);
console.log(arr5 == arr6);
console.log(arr5 === arr6);
// since, array is created in heap memory, so arr5 and arr6 both point towards same memory address.

// But if we want to create a new array having new memory address using values of old array - 

const arr7 = structuredClone(arr5);
console.log(arr7);
console.log(arr7 == arr5);
// structuredClone only clones the element of old array and creates the new array at new memory address.




//^ NOTE --->  In JS array elements are not stored contiguous memory locations.
//^  Because we can store different datatypes in array in JS and they require different memory size,
//^  and we can modify elements of array in JS, so elements are not stored continuously.

/* 
e.g. suppose there is an array of 30 integer elements so they require 8byte space each and if they are
 stored at contiguous memory locations and then we update the second element and add a string in its place,
 now the string needs 12 byte space then we have to shift other 28 elements inside memory
 after second element which is not feasible.
 */




 