// ASSIGNMENT : 1
let people = {
    friends: []
};
let friend1 = {
    firstName: "Maira",
    lastName: "Khan",
    id: 653
};
let friend2 = {
    firstName: "Ali",
    lastName: "Zafar",
    id: 653
};
let friend3 = {
    firstName: "sana",
    lastName: "Hashim",
    id: 653
};
let add = people.friends = [friend1, friend2, friend3];
console.log(add);
//  Assignment 2:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to: 
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or 
// create temporary arrays).
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.shift();
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray.splice(1, 3);
scrambledArray.splice(2, 3, "student", "of");
scrambledArray.splice(4, 1, "GIAIC");
console.log(scrambledArray.join(" "));
//ASSIGNMENT: 3
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.
let inventory = [];
let product1 = {
    name: "heavy bike",
    model: "2023",
    cost: 240990,
    quantity: 50,
};
let product2 = {
    name: "Iphone",
    model: "2024",
    cost: 300000,
    quantity: 800,
};
let product3 = {
    name: "Toyota Corola",
    model: "2020",
    cost: 4500000,
    quantity: 15
};
inventory = [product1, product2, product3];
console.log(inventory);
let accessThirdProperty = [inventory[2].quantity];
console.log(accessThirdProperty);
let newProduct = {
    name: "watch",
    model: "latest",
    cost: 65000,
    quantity: 70,
};
;
let updatedInventory = [product1, product2, product3, newProduct];
console.log(updatedInventory);
let accessSecondProperty = [updatedInventory[1].name];
console.log(accessSecondProperty);
//ASSIGNMENT : 4
// Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes 
// student information like name, senior status (true/false), and whether they've completed 
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the 
// Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors 
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have 
// a function that removes students who haven't completed their assignments 
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)
import chalk from "chalk";
;
let students = [
    {
        name: "Maira",
        senior_status: true,
        assignment: true,
    },
    {
        name: "sohail",
        senior_status: false,
        assignment: true,
    },
    {
        name: "Aliya",
        senior_status: true,
        assignment: false,
    },
    {
        name: "Shahzain",
        senior_status: false,
        assignment: false,
    },
    {
        name: "Zain",
        senior_status: false,
        assignment: true,
    },
];
console.log(chalk.yellow("This is a student list in class:"));
let studentsList = students;
console.log(studentsList);
function findSeniorStudent() {
    let seniorStudent = students.filter(x => x.senior_status === true && x.assignment === true);
    return seniorStudent;
}
;
console.log(chalk.blue("congrats!SENIOR STUDENT WITH COMPLETED ASSIGNMENT"));
console.log(findSeniorStudent());
function updateList() {
    let removeStudent = students.filter(x => x.assignment === false);
    return removeStudent;
}
;
console.log(chalk.green("THESE STUDENTS HAVN'T COMPLETE THEIR ASSIGNMENT:"));
console.log(updateList());
