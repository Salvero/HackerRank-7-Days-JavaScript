// Task

// You are given NN numbers. Store them in an array and find the second largest number.
//
// Input Format
//
// The first line contains NN, the size of array AA.
// The second line contains NN space separated elements of array AA.
//
// Output Format
//
// Output the value of the second largest number in array AA.
//
// Sample Input
//
// 5
// 2 3 6 6 5

// This question is not clear to me, so I google to find similar solution. 

function processData(myArray) {
    var storeNumbers = Math.max.apply(null, myArray);
    console.log(Math.max.apply(null, myArray.filter((n) => n != storeNumbers)));
}
