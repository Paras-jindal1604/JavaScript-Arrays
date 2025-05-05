
// ? Different methods to perform various operation on arrays - 


//*  .push() -   adds a new element to an array (at the end).
const arr10 = [1,2,3,4,5];
arr10.push(99);
arr10.push(82);
console.log(arr10);
console.log(arr10.push());
//  .push() method returns the length of new array formed.


//* .pop()  -  removes the last element from an array.

arr10.pop();
arr10.pop();
arr10.pop();
console.log(arr10);
console.log(arr10.pop());
// .pop() method returns the length of new array formed after deleting elements.


//* .unshift()  -  adds a new element to the starting of the array.

const arr11 = [10,20,30,40];
arr11.unshift(99);
arr11.unshift(89);
console.log(arr11);
console.log(arr11.unshift());
// .unshift() returns the length of new array formed after adding element to the starting.


//*  .shift()  -  remove the elements from the starting of array.

arr11.shift();
console.log(arr11.shift());
console.log(arr11.shift());
console.log(arr11);
//  .shift() return the element that was deleted/shifted out.



//* .delete()  -  deletes the array element from any index and leaves "undefined holes" in the array.

const arr12 = [20,30,40,50,60];
console.log(delete arr12[1]);
console.log(arr12);
// it returns "true" if the array element is deleted successfully.
//? when the element is deleted it shows <1 empty item>  and that space is reserved, thus a hole is formed.



//* .indexOf()  -  searches an element in array and returns index of its first occurence.

const arr13 = [22,33,44,55,66,99,33,44];
console.log(arr13.indexOf(33));
console.log(arr13.indexOf(66));
console.log(arr13.indexOf(90));
// if element is not present in array then it returns -1.


//* .lastIndexOf() - return the index of last occurence of element in array.

console.log(arr13.lastIndexOf(33));
console.log(arr13.lastIndexOf(44));
console.log(arr13.lastIndexOf(88));
// if element is not present in array then it returns -1.


//* .includes()  -  returns true if an element is present in array else returns false.

console.log(arr13.includes(55));
console.log(arr13.includes(33));
console.log(arr13.includes(90));




//* .slice()  -  slice out a piece of array from starting-index(included) to ending-index(not included).

const arr14 = ["a","e","i","o","u"];
console.log(arr14.slice(1,4));
console.log(arr14.slice(2,4));

// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.


//* .splice() -  takes two parameter as starting-index and elements-to-remove from array.
//*               removes the number of elements from that index.

const arr15 = [101,102,103,104,105,106,109,110];
console.log(arr15.splice(2,3));
console.log(arr15);
// .splice() changes the original array and create a new array of removed elements.


//^ if we want to add elements at a particular index using splice then -
//^ pass those values as parameters in splice method after elements to removed.

const arr16 = [111,112,113,114,115,116,118,119];
arr16.splice(2,3,"batman","thor");
console.log(arr16);
//  here 3 elements (113,114,115) from 2-index are deleted and "batman","thor" are added in original array.


//^ if we dont want to add elements without removing elements then pass second parameter as 0.

const arr17 = [221,222,223,224,225];
arr17.splice(3,0,"x","y","z");
console.log(arr17);
// here no elements are deleted from 3-index and elements are added to original array.



//* .toString()  -  converts an array into string.
const arr18 = [22,true,33,"batman",55];
console.log(arr18.toString());
console.log(typeof arr18.toString());


//* .join()  -  joins all the elements of array into string, we can also specify the seperator b/w elements.
console.log(arr18.join(" * "));
console.log(arr18.join(" ! "));
console.log(arr18.join(" "));
console.log(arr18.join("..."));



//*  .concat()  -  it creates a new array by merging two or more existing arrays.

const arr19 = [23,45,68,92,22];
const arr20 = [3,5,8,2,9];
const arr21 = [20,50,80];

let newarr = arr19.concat(arr20,arr21);
let newarr2 = arr20.concat(arr21,arr19);
console.log(newarr);
console.log(newarr2);

// The concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments.
// Elements are added in the order of arrays specified in method.

//? we can also concatenate a string to array as - 

const arr22 = [2,3,4,5];
let str = ["batman","hulk","thor"];
let arr23 = arr22.concat(str);
console.log(arr23);


//^ NOTE - If we push an array into another array using .push() then it creates a 2D array.

const arr24 = [1,2,3];
const arr25 = ["batman",5];
arr24.push(arr25);
console.log(arr24);

console.log(arr24[3][0]);
// arr24 is now a 2D array with arr25 at 3rd-index. 


