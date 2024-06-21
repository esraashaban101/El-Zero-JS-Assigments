/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
var _gamal =my.pop() , _Ameer = my.pop();

my.reverse();
// Q-console.log() => ["Osama", "Elham", "Mazero", "Ahmed"]

console.log(my); 

// Q-console.log()  => ["Elham", "Mazero"]

console.log(my.slice(++zero,counter)); 

//Q- console.log(""Elzero"")

my.push("Elzero")
console.log(my[++counter]); // "Elzero"

// Q- console.log("rO") 
//counter = 4   zero=0
console.log(my[counter][counter]+my[--zero][zero]); // rO