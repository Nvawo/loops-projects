// let num=prompt("enter your num");
// if(num>=18){
//     console.log("you are an adult");

// }
// else if(num>=13){
//     console.log("you are a tenager");
// }
// else{
//     console.log("you area child");
// }
// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }
// practical assignment 
// question 1
// let sum =0;
// let i=1;
// while(i<=50){
//     sum +=i;
//     i++;
// }
// console.log("the sum is "+ sum);
// question 2
// let userInput = prompt("Please enter a number:");
// let number = parseInt(userInput);

// if (isNaN(number)) {
//     console.log("Please enter a valid number.");
// } else {
//     console.log("Numbers from 1 to " + number + ":");
//     for (let i = 1; i <= number; i++) {
//         console.log(i);
//     }

//     let sum = 0;
//     let counter = 1;
//     while (counter <= number) {
//         sum += counter;
//         counter++;
//     }


//     console.log("The sum of numbers from 1 to " + number + " is: " + sum);
// }
function factorial(n) {
    if (n < 0) {
        return "Error! Factorial for negative numbers does not exist.";
    } else if (n === 0) {
        return 1;
    } else {
        let fact = 1;
        for (let i = 1; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }
}

// Take input from the user
const number = parseInt(prompt("Enter a positive integer: "));

// Display the result
console.log(`The factorial of ${number} is ${factorial(number)}.`);