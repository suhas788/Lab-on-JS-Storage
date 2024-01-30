//Challenge 1: Store the user's first name, last name, age, country, and state in your browser's localStorage using the setItem() method and print the localStorage in the console.
// Store user information in localStorage
localStorage.setItem('firstName', 'John');
localStorage.setItem('lastName', 'Doe');
localStorage.setItem('age', '30');
localStorage.setItem('country', 'United States');
localStorage.setItem('state', 'California');

// Retrieve and print localStorage content
console.log(localStorage);

//Challenge 2: Get the users data stored on your browser's localStorage using the getItem() method and print the localStorage in the console.

var firstName = localStorage.getItem('firstName');
var lastName = localStorage.getItem('lastName');
var age = localStorage.getItem('age');
var country = localStorage.getItem('country');
var state = localStorage.getItem('state');

// Print user information from localStorage
console.log('First Name: ' + firstName);
console.log('Last Name: ' + lastName);
console.log('Age: ' + age);
console.log('Country: ' + country);
console.log('State: ' + state);



//Challenge 3: Using removeItem() method, remove the "state" data stored in your browser's localStorage and print the localStorage in the console.

// Remove the "state" data from localStorage
localStorage.removeItem('state');

// Print localStorage after removing "state"
console.log(localStorage);

// Remove all data from localStorage
localStorage.clear();

// Print localStorage after clearing
console.log(localStorage);

//Challenge 5: Using JSON.stringify() convert the given object into the string and print the same.
const user = {
  firstName: 'Rajat',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};

// Convert the object to a string using JSON.stringify()
const jsonString = JSON.stringify(user);

// Print the string representation of the object
console.log(jsonString);

