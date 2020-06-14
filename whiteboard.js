//[‘apple’, ‘adam’, ‘betty’, ‘animal’, ‘car’] 
//return an array with only the words that begin with A
//each index of that array is a string
//evaluating the string based on the first char
//if the char is A, it passes

//make func that takes in array
const findTheAs = (array) => {
    //filtering through the array
    return array.filter(value => {
        //use .charAt(0) 
        value.charAt(0) ==='a'
    })
}



//given an array of numbers, return an array, with the numbers sorted from biggest to smallest
let nums = [3, 6, 8, 2, 11]
// 11, 8, 6, 3, 2

//create a function that takes in an array
const bigToSmall = (array) => {
    return array.sort((a, b) => a-b)
}
//sort that array .sort  use .reverse




