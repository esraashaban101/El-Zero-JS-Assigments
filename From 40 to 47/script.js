//Q1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
var _gamal = myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.push(_gamal);
let num2 = num;
num--;
num--;
num--;
// console.log(num,num2)
console.log(myFriends.splice(0, num2)); // ["Ahmed", "Elham", "Osama"];

//Q2

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]

//Q3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

finalArr.push(
  arrTwo.pop(),
  arrOne.pop(),
  arrOne.pop(),
  arrOne.pop(),
  arrTwo.shift(),
  arrTwo.shift()
);
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//Q4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.pop().shift().replace("El", "").toUpperCase()); // ZERO

//Q5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

//First
if (haystack.includes(needle)) console.log("found");

//second
if (haystack.indexOf(needle) !== -1) console.log("found");
//third
for (var i = 0; i < haystack.length; i++) {
  if (haystack[i] == needle) {
    console.log("found");
    break;
  }
}

//Q6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];

// Your Code Here

let allArrs = [];
allArrs.push(arr2.pop(), arr1.pop(), arr2.pop()); // YXF

for (var i = 0; i < allArrs.length; i++) {
  allArrs[i] = allArrs[i].toLowerCase();
}
allArrs.reverse();

let res = allArrs.toString();
res = allArrs.join("");
allArrs = res;
console.log(allArrs);

// fxy
