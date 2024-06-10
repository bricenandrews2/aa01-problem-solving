/*
Pseudocode With Polya's

Write pseudocode for Step 1 and 2 of Polya's Problem Solving framework for the
given problem statement. Then execute Step 3 of Polya's Problem Solving
framework. Finally, test your code in Step 4 of Polya's Problem Solving
framework.
*/

/* 1. Understand the Problem: I need to create a function called funnyStringConcat
that intakes 2 parameters, and returns a new string consists of the first 3 letters
of string 1 and the last 3 of str2.

2. Devise a Plan: write my function and define it with provided parameters.
*/
/*
Problem Statement:
Write a `funnyStringConcat` function that receives two string parameters: 
`str1` and `str2`. The function should return a new string consisting of the 
first 3 letters of `str1` followed by the last 3 letters of `str2`.

(You can assume that the strings passed to `funnyStringConcat` will always have 
at least 3 letters.)


**Challenge:** Once you get `funnyStringConcat` working, refactor it so that it
uses the String `substring` method--look it up on MDN!--and consists of only one 
line inside the function block.
*/
function funnyStringConcat ( str1, str2 ) {
    // let firstThreeCharacters = str1.substring(0,3)
    // let lastThreeCharacters = str2.substring(str2.length-3)
    // return firstThreeCharacters + lastThreeCharacters

    // return str1.substring(0,3) + str2.substring(str2.length-3);

    // return str1.slice(0,3) + str2.slice(-3);

    return `${str1.slice(0,3)}${str2.slice(-3)}`

}

console.log(funnyStringConcat("abc", "def"));  //=> "abcdef"
console.log(funnyStringConcat("number", "soldier"));  //=> "numier"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = funnyStringConcat;
