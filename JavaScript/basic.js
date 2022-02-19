// // print message
// console.log("Hello, I am Vishal");

// // Constant and Variables
// var a = 3;
// a = 5;
// const PI = 3.14;

// // Operators
// var num1 = 4;
// var num2 = 2;

// // arithmethic Operator
// // console.log("Value of 4 + 2 ", num1 + num2 );
// // console.log("Value of 4 - 2 ", num1 - num2 );
// // console.log("Value of 4 * 2 ", num1 * num2 );
// // console.log("Value of 4 / 2 ", num1 / num2 );
// // console.log("Value of 4 ** 2 ", num1 ** num2 );
// // 4 ** 2 == 4*4 = 16

// // Unary and Binary Operator

// // console.log(num1++); //post increament
// // console.log(num1--); // post decreament
// // console.log(++num1); // pre increament
// // console.log(--num1); // pre decreament
// console.log(-num1);

// // conditional operator
// // 5 >= 4 -- greater than equal to 
// // 6 <= 10 -- less than equal to
// // 5 > 4 -- greater than
// // 6 < 10 -- less than

// // Conditionals(if else   switch)
// var a = "#";

// // Vowel Consonant Alphabet hi nhi hoga
// // Or operator ||
// if(a === "a" || a === "i" || a === "e" || a === "o" || a === "u"){
//     console.log(a, " is a vowel");
// }
// else if(a >= "a" && a <= "z"){
//     console.log(a, " is a consonant");
// }
// else {
//     console.log(a, " is not a alphabet");
// }

// // Switch Case
// age = 26;

// switch(age){
//     case 18:
//         console.log("You can vote");
//         break;
//     case 21:
//         console.log("You can marry");
//         break;
//     case 25:
//         console.log("You can drive a plane");
//         break;
//     default:
//         console.log("Enjoy, no work");
// }

// // Array 
// var marks = [95, 99, 97, 98, 90]; 
// marks.push(85); // add 85 at the end of array -- 95, 99, 97, 98, 90, 85
// marks.pop(); // delete last element of array -- 95, 99, 97, 98, 90
// marks.shift(); // delete first element of array -- 99, 97, 98, 90
// marks.unshift(90); // add 90 at start of the array -- 90, 99, 97, 98, 90
// marks.length // length of array( number of subjects)
// console.log(marks[0]) --> 95
// // Object
// var subjectMarks = {
//     subject: "Maths",
//     marks: 95,
//     grade: "A+"
// }

// console.log(subjectMarks.marks);

// // Loops:
// const students = ["chirag", "Sneha", "Shivani", "Gaurav", "Neha"];

// for(let i=0; i<students.length; i++){
//     console.log(students[i]);
// }
// // i = 0, students[0] = Chirag
// // i = 1, students[1] = Sneha
// const nums = [1, 2, 3, 4, 5];
// let sum = 0;
// for(let i=0; i<nums.length; i++){
//     sum += nums[i];
// }
// // i = 0, sum = 1;
// // i = 1, sum = 3;
// // i = 2, sum = 6;
// // i = 3, sum = 10;
// // i = 4, sum = 15;
// console.log(sum);

// // forEach --> callback function

// students.forEach(function(student){
//     console.log(student);
// })

// // for ... in
// var student = {
//     "first name": "Vishal",
//     class: 10,
//     percentage: 90,
//     schoolName: "xyz"
// }
// // objectName.keyName || objectName[keyName];
// for(let key in student){
//     console.log(key, " is ", student[key])
//     console.log(key, " is ", student.key)
// }

// // while loop
// let i = 0;// Initialize
// // Condition i < students.length
// while(i < students.length){
//     console.log(students[i]);
//     i++;
// }

// // do ... while
// i = 0;
// do{
//     console.log(students[i]);
//     i++;
// }while(i<students.length)

// Normal function
// function helloName(name){
//     // String Literal
//     return `Hello ${name}`;
// }

// Array Function
const helloName = name => `Hello ${name}`;

const members = ["Chirag", "Gaurav", "Sneha"]

// members.forEach((member) => console.log(helloName(member)));

// // Map
// const nums  = [1, 2, 3, 4, 5];
// console.log(nums);
// const newNums = nums.map((num) => num*2);
// console.log(newNums);
// console.log(nums);


// // Filter
// const FilteredNums = nums.filter((num) => num < 3);
// console.log(FilteredNums);

// // reduce
// const sum = nums.reduce((total, curr) => total + curr);
// console.log(sum);

// DOM --> Document Object Model 

// HTML Elements --> object, properties, events, method

// getElement by Id
// const heading = document.getElementById('heading');

// console.log(heading);
// heading.innerText = "heading";

// // get elements by class Name
// const container = document.getElementsByClassName('container');
// console.log(container[0])

// // get element using query selector
// const para = document.querySelector('#para');
// console.log(para)

// // get elements using query selector all
// const list = document.querySelectorAll('.list');
// console.log(list);

// // get element by tag name
// const button = document.getElementsByTagName('button');
// console.log(button);