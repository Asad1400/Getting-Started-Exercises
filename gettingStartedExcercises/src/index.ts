/*
  Name: Muhammad Asad Ullah
  Roll No.PIAIC240373
  Batch: 57 
  Quarter: 1
  City: Lahore
  Date: April 7,2024
 */
//TypeScript Assignment comprising of 45 Questions

// 1. Install Node.js, TypeScript and VS Code on your computer.

// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let varPerson = "Asad";
console.log(`Hello ${varPerson}, would you like to learn some python today?`);
console.log();

// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let namePerson: string = "MuhaMMad ASad ullah";
console.log(namePerson);
console.log(namePerson.toLowerCase());
console.log(namePerson.toUpperCase());
let nameSplit: string[] = namePerson.split(" ");
let titlecase: string = "";
for (let i = 0; i < nameSplit.length; i++) {
  titlecase +=
    nameSplit[i].charAt(0).toUpperCase() + nameSplit[i].slice(1).toLowerCase() + " ";
}
titlecase = titlecase.trim();
console.log(titlecase);
console.log();
// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log(
  "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
);
console.log();

// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_Person: string = "Albert Einstein";
let quote: string =
  "A person who never made a mistake never tried anything new.";
console.log(`${famous_Person} once said, “${quote}”`);

// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let namePerson1 : string = "\t\n Muhammad Asad Ullah   \n\t";
console.log(namePerson1);
console.log(namePerson1.trim()); 

// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
let add: number = 5+3, subtract: number = 10-2, multiplication: number = 4*2, division: number = 16/2;
console.log("Addition: " + add);
console.log("Subtraction: " + subtract);
console.log("Multiplication: " + multiplication);
console.log("Division: " + division);
console.log();

// 8. You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log();

// 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favouriteNumber: number = 7;
console.log(`${favouriteNumber} is my favorite number.`);
console.log();

// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let names: string[] = ["Asad", "Fahad", "Saad", "Muneeb", "Ahmad"];
let counter : number = 0
for (let name of names) {
  console.log(`Name ${counter++}: ${name}`);
}
console.log();

// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
for(let name of names) {
  console.log(`Hello ${name}!`);
}
console.log();

// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let list : string[] = ["Honda" , "Toyota" , "Honda"];
for (const li of list) {
  console.log(`“I would like to own a ${li} motorcycle.”`)
}
console.log();

// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guests: string[] = ["Albert Einstein", "Asad", "Ahmad"];
for (const guest of guests) {
  console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place.`);
  console.log();
}

// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
console.log(`${guests[0]} cannot make it to the dinnner.\n`);
guests[0] = "Jawad";
for (const guest of guests) {
  console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place.`);
  console.log();
}

// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
guests.unshift("Saad");
guests.splice(Math.ceil(guests.length/2), 0,"Zaid");
guests.push("Fahad");
for (const guest of guests) {
  console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place.`);
  console.log();
}
console.log("We found a bigger dining table");
console.log();

// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log(`Sorry!We have space for only two people.`);
console.log(guests);
let count = guests.length;
for (; count != 2; count--) {
  let poppedPerson = guests.pop();
  console.log(`Sorry ${poppedPerson}! We cannot invite you to the dinner`);
}
let countInvited = guests.length;
console.log(guests);
for (const guest of guests) {
  console.log(`${guest} is still invited to dinner.`);
}
for (; count != 0; count--) {
  guests.pop();
}
console.log(guests);
console.log();

// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let locations : string[] = ["Germany", "USA", "Saudia Arabia", "France", "Norway"];
// • Print your array in its original order.
console.log("Origional Order: ");
for (let index = 0; index < locations.length; index++) {
  console.log(`${index+1}. ${locations[index]}`);
}
// • Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order:" );
let alphabeticalOrder : string[] = [...locations].sort();
for (let index = 0; index < locations.length; index++) {
  console.log(`${index+1}. ${alphabeticalOrder[index]}`);
}
// • Show that your array is still in its original order by printing it
console.log("Origional Order: ");
for (let index = 0; index < locations.length; index++) {
  console.log(`${index+1}. ${locations[index]}`);
}
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical Order:" );
let reverseAlphabeticalOrder : string[] = [...locations].sort().reverse();
for (let index = 0; index < locations.length; index++) {
  console.log(`${index+1}. ${reverseAlphabeticalOrder[index]}`);
}
// • Show that your array is still in its original order by printing it again.
console.log("Origional Order: ");
for (let index = 0; index < locations.length; index++) {
  console.log(`${index+1}. ${locations[index]}`);
}
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse Order:" );
let reverseOrder : string[] = locations.reverse();
for (let index = 0; index < locations.length; index++) {
  console.log(`${index+1}. ${reverseOrder[index]}`);
}
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Origional Order:" );
let originalOrder : string[] = locations.reverse();
for (let index = 0; index < locations.length; index++) {
  console.log(`${index+1}. ${originalOrder[index]}`);
}
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Alphabetical Order:" );
let alphabetical : string[] = locations.sort();
for (let index = 0; index < locations.length; index++) {
  console.log(`${index+1}. ${alphabeticalOrder[index]}`);
}
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Reverse Alphabetical Order:" );
locations.sort().reverse();
for (let index = 0; index < locations.length; index++) {
  console.log(`${index+1}. ${locations[index]}`);
}
console.log();

// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(`The number of people invited to the dinner are ${countInvited}`);
console.log();

// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
const worldData: string[][] = [
  ["K2", "Everest", "Kilimanjaro", "Matterhorn"],
  ["Chenab", "Nile", "Amazon", "Yangtze"],
  ["Pakistan", "USA", "India", "Brazil", "Japan"],
  ["Lahore", "New York", "Paris", "Tokyo", "Cairo"],
  ["Urdu", "English", "Spanish", "Mandarin", "French"]
];
console.log("2D Array (World Data):");
for (const category of worldData) {
    console.log(category);
}
console.log()

// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
const mountainObject = {
  highestPeak: "Mount Everest",
  famousRanges: ["Himalayas", "Andes", "Rocky Mountains"]
};

const riverObject = {
  longestRiver: "Nile",
  majorRivers: ["Amazon", "Yangtze", "Mississippi"]
};

const countryObject = {
  populousCountries: ["China", "India", "USA"],
  diverseLanguages: ["India", "Papua New Guinea", "Nigeria"]
};

const cityObject = {
  capitalCities: ["Tokyo", "Paris", "Cairo"],
  bustlingMetropolises: ["New York", "Shanghai", "Mumbai"]
};

// Print the objects
console.log("Mountain Object:");
console.log(mountainObject);

console.log("River Object:");
console.log(riverObject);

console.log("Country Object:");
console.log(countryObject);

console.log("City Object:");
console.log(cityObject);

//  22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let fruits: string[] = new Array("Apple", "Banana", "Orange", "Grapes", "Pineapple");
const indexToAccess = 10;
try {
    const fruit = fruits[indexToAccess];
    console.log(`Fruit at index ${indexToAccess}: ${fruit}`);
} catch (error: any) {
    console.error(`Error occurred: ${error.message}`);
}

// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car = 'subaru';
//Test # 1 
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru');
//Test # 2
console.log("Is car == 'honda' ? I predict false. ");
console.log(car == 'honda');
//Test # 3
console.log("Is car != 'honda' ? I predict true");
console.log(car != 'honda');
//Test # 4 
console.log("Is car.length == 6 ? I predict true");
console.log(car.length == 6);
//Test # 5
console.log("Is car.length == 7 ? I predict false");
console.log(car.length == 7);
//Test # 6
console.log("Is car.length > 5 ? I predict true");
console.log(car.length > 5);
//Test # 7
console.log("Is car.length < 3 ? I predict false");
console.log(car.length < 3);
//Test # 8
console.log("Is car.length == 0 ? I predict false");
console.log(car.length == 0);
//Test # 9 
console.log("Is car === 'subaru' ? I predict true");
console.log(car === 'subaru');
//Test # 10
console.log("Is car === car.toUpperCase() ? I predict false");
console.log(car === car.toUpperCase());
console.log();

// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
let fruit1 = "banana", fruit2 = "apple";
// Equality test
console.log("Is fruit1 === to fruit2? I predict false.");
console.log(fruit1 === fruit2);
// Inequality test
console.log("Is fruit1 !== equal to fruit2? I predict true.");
console.log(fruit1 !== fruit2);

// • Tests using the lower case function
let city = "New York";
console.log("Is city.toLowerCase() === 'new york' ? I predict true.");
console.log(city.toLowerCase() === 'new york');
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 5, num2 = 10;
//Equality test
console.log("Is num1 === num2 ? I predict false.");
console.log(num1 === num2);
//Inequality test
console.log("Is num1 !== num2 ? I predict true.");
console.log(num1 !== num2);
//Greater Than test
console.log("Is num1 > num2 ? I predict false.");
console.log(num1 > num2);
//Less Than test
console.log("Is num1 < num2 ? I predict false.");
console.log(num1 < num2);
//Greater Than Equal Test
console.log("Is num1 >= num2 ? I predict false.");
console.log(num1 >= num2);
//Less Than Equal Test
console.log("Is num1 <= num2 ? I predict flase.");
console.log(num1 <= num2);

// • Tests using "and" and "or" operators
let n : number = 6;
// OR Operator
console.log("Is n == 6 || typeof(n) == 'number' ? I predict True");
console.log(n == 6 || typeof(n) == 'number'); 
//AND Operator
console.log("Is n == 6 && typeof(n) == 'number' ? I predict false");
console.log(n == 6 && typeof(n) == 'string'); 

// • Test whether an item is in a array
// let fruits: string[] = new Array("Apple", "Banana", "Orange", "Grapes", "Pineapple");
console.log("Is fruits.includes('Apple') ? I predict true");
console.log(fruits.includes('Apple'));
console.log();

// • Test whether an item is not in a array
// let fruits: string[] = new Array("Apple", "Banana", "Orange", "Grapes", "Pineapple");
console.log("Is fruits.includes('Kiwi') ? I predict false");
console.log(fruits.includes('Kiwi'));
console.log();

// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
let alien_color : string;
let randomNumber : number = Math.floor(Math.random() * 3);
if(randomNumber === 0 )
  alien_color = "green";
else if (randomNumber === 1)
  alien_color = "yellow";
else 
  alien_color = "red";

console.log(`The alien's color is ${alien_color}.`);

if(alien_color === "green")
  console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
console.log();

// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
randomNumber = Math.floor(Math.random() * 3);
if(randomNumber === 0 )
  alien_color = "green";
else if (randomNumber === 1)
  alien_color = "yellow";
else 
  alien_color = "red";

console.log(`The alien's color is ${alien_color}.`);

if(alien_color === "green")
  console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
else
  console.log("Congratulations! You just earned 10 points for shooting down the alien.");
console.log();

// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
randomNumber = Math.floor(Math.random() * 3);
if(randomNumber === 0 )
  alien_color = "green";
else if (randomNumber === 1)
  alien_color = "yellow";
else 
  alien_color = "red";

console.log(`The alien's color is ${alien_color}.`);

if(alien_color === "green")
  console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
else if(alien_color === "yellow")
  console.log("Congratulations! You just earned 10 points for shooting down the yellow alien.");
else 
  console.log("Congratulations! You just earned 10 points for shooting down the red alien.");
console.log();

// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let age : number = 35;
console.log(`Age: ${age}`)
// • If the person is less than 2 years old, print a message that the person is a baby.
if (age > 0 && age < 2)
  console.log(`The person is baby`);
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age >= 2 && age < 4)
  console.log(`The person is a toddler.`);
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age >= 4 && age < 13)
  console.log(`The person is a kid`)
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age >= 13 && age < 20)
  console.log(`The person is a teenager`);
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age >= 20 && age < 65) 
  console.log(`The person is an adult`);
// • If the person is age 65 or older, print a message that the person is an elder.
else if (age >= 65)
  console.log(`The person is an elder`);
console.log();

// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits : string[] = ["Banana", "Apple", "Mango"];
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if(favorite_fruits.includes("Banana"))
  console.log("I really like bananas!");
if(favorite_fruits.includes("Apple"))
  console.log("I really like Apples!");
if(favorite_fruits.includes("Mango"))
  console.log("I really like Mango!");
if(favorite_fruits.includes("Kiwi"))
  console.log("I really like Kiwi!");
if(favorite_fruits.includes("Orange"))
  console.log("I really like Orange!");
console.log();

// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
let userNames : string[] = ["Admin", "Asad", "Fahad", "Saad", "Ahmad"];
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
for (const username of userNames) {
  if(username === 'Admin') 
  console.log(`Hello ${username}, would you like to see a status report?`);
  else 
  console.log(`Hello ${username}, thank you for logging in again.`);
}
console.log();

//  31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
userNames = [];
if(userNames.length === 0)
  console.log("We need to find some users!");
console.log();

// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let current_users : string[] = ["Abdullah", "Asad", "Fahad", "Saad", "Ahmad", "Jawad"];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users : string[] = ["Asad" , "Mohsin", "Talha", "Ali", "Ahad"];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
function isUsernameTaken(username: string): boolean {
  return current_users.some((existingUser) => existingUser.toLowerCase() === username.toLowerCase());
}
for (const users of new_users) {
  if (isUsernameTaken(users)) {
    console.log(`${users} will need to enter a new username`)
  } else {
    console.log(`The username ${users} is availiable`);
  }
}
console.log();

// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
let numOrdinal : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
for (const num of numOrdinal) {
  if(num === 1)
    console.log(`${num}st`);
  else if(num === 2)
    console.log(`${num}nd`);
  else if(num === 3)
  console.log(`${num}rd`);
  else
  console.log(`${num}th`);
}
console.log();

// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let fav_Pizza : string[] = ["Hot n spicy", "Tandoori", "Mushroom"];
for (const fav of fav_Pizza) {
  console.log(`I like ${fav} pizza.`);
}
console.log(`I really love pizza!`);

// 35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals : string[] = ["Parrot" , "Cat", "Dog", "Tiger", "loin"];
for (const animal of animals) {
  console.log(`A ${animal} would be a great pet.`);
}
console.log(`Any of these animal would be a great pet!`);
console.log();

// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size: string, message: string): void {
  console.log(`T-Shirt Summary: Size ${size.toUpperCase()} - Message: "${message}"`);
}

// Example usage:
make_shirt('medium', 'Keep Calm and Code On');
make_shirt('large', 'I Love TypeScript');
console.log();

// 37. Large Shirts: Modify the make_shirt1() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt1(size: string = "LARGE", message: string = "I love TypeScript"): void {
  console.log(`T-Shirt Summary: Size ${size.toUpperCase()} - Message: "${message}"`);
}

// Example usage:
make_shirt1(); // Large shirt with default message
make_shirt1('MEDIUM'); // Medium shirt with default message
make_shirt1("SMALL", "I love JavaScript"); // Custom-sized shirt with a different message
console.log();

// 38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city:string, country:string = "Pakistan") {
  console.log(`${city} is in ${country}.`);
} 
//Example usage:
describe_city("Karachi");
describe_city("Lahore");
describe_city("London", "United Kingdom");
console.log();

// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city:string, country:string) { 
  return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "USA"));
console.log(city_country("Beijing", "China"));
console.log();

//  40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist: string, albumTitle: string, numTracks?: number): object {
  if(numTracks) {
    const album: object = {
      artist: artist,
      albumTitle: albumTitle,
      numTracks:numTracks,
    };
    return album;
  }
  const album: object = {
    artist: artist,
    albumTitle: albumTitle,
  };
  return album;
  }
 // Create three albums
  const album1 = make_album("The Beatles", "Abbey Road");
  const album2 = make_album("Queen", "A Night at the Opera");
  const album3 = make_album("Bob Dylan", "Blood on the Tracks", 10);

  // Print the albums
  console.log(album1);
  console.log(album2);
  console.log(album3);
  console.log();

// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
      console.log(magician);
  }
}
// Example magician names
const magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Call the function to display the magician names
show_magicians(magicianNames);
console.log();

// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(originalNames: string[]): string[] {
  // Create a new array with modified magician names
  const greatNames: string[] = [];
  for (const name of originalNames) {
      console.log(`The Great ${name}`);
  }
  return greatNames;
}
// Call the function to display the magician names
make_great(magicianNames);
console.log();

// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Create a copy of the original list and modify it

// Print the original and modified magician names
console.log("Original Magicians:");
show_magicians(magicianNames);

console.log("\nGreat Magicians:");
const greatMagicians: string[] = make_great(magicianNames);
show_magicians(greatMagicians);
console.log();

// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwich(...items: string[]): void {
  console.log("Sandwich Summary:");
  if (items.length === 0) {
      console.log("No items selected. Your sandwich is empty!");
  } else {
      console.log(`You ordered a sandwich with: ${items.join(', ')}`);
  }
  console.log();
}

// Call the function with different numbers of arguments
make_sandwich('Turkey', 'Lettuce', 'Tomato');
make_sandwich('Chicken', 'Cheese');
make_sandwich(); // Empty sandwich

// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacturer: string, model: string, color?: string, features?: string[]) {
  if (color&&features) {
    const carInfo = {
      manufacturer,
      model,
      color,
      features,
  }
  return carInfo;  
  }
  const carInfo = {
      manufacturer,
      model,
  };
  return carInfo;
}

// Example usage:
const myCar1 = createCar('Honda', 'Civic');
console.log(myCar1);
const myCar2 = createCar('Toyota', 'Camry', 'Blue', ['GPS', 'Sunroof']);
console.log(myCar2);
