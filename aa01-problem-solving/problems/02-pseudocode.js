/*
Pseudocode With Polya's

Write pseudocode for Step 1 and 2 of Polya's Problem Solving framework for the
given problem statement. Then execute Step 3 of Polya's Problem Solving
framework. Finally, test your code in Step 4 of Polya's Problem Solving
framework.
*/
/* 1. Understand the problem: I am writing a function to find if any given number
falls within the parameters of 5 within 100.

2. Devise a plan: The plan is to write a block of code so that the given number 
is true if it falls within 5 of 100 and false if it doesn't. Setting num >= 95 
ensures that my lower parameters are met, and setting num <= 105 ensures the 
higher one's are met.

/*
Problem Statement:
Given a number, write a function called within5Of100 to return true if the given
number is within 5 of 100.
*/
function within5Of100 (num) {
    return num >= 95 && num <= 105;
}
console.log(within5Of100(94));  //=> false
console.log(within5Of100(95));  //=> true
console.log(within5Of100(100)); //=> true
console.log(within5Of100(105)); //=> true
console.log(within5Of100(106)); //=> false

// CHALLENGE: Can you design a function that would return true if a given number
// is within X of another given number Y?


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = within5Of100;
