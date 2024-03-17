// Log onto console
  // console.log('Hello World');
  // console.error('This is an error');
  // console.warn('This is a warning');

// var, let, const
  // let age = 27;
  // age = 28;
  // console.log(age);
  // const firstName = 'Shaun';
  // const lastName = 'Wilson';
  // console.log(firstName + ' ' + lastName);

// String, Numbers, Booleans, null, undefined, Symbol
  // const myName = 'Shaun';
  // let age = '27'
  // const rating = 9.9;
  // const isCool = true;
  // const x = null;
  // const y = undefined;
  // let z;
  // console.log(typeof x);

// Concatenation
  // const firstName = 'Shaun'
  // const age = 27
  // console.log('My name is ' + firstName + ' and I am ' + age);
// Template String Aka Backtick
  // console.log(`My name is ${firstName} and I am ${age}`);
  // const hello = `My name is ${firstName} and I am ${age}`

  // console.log(hello)

// Methods - Functions associated with an object
  // const s = 'Hello World';
  // console.log(s.length);
  // console.log(s.toUpperCase());
  // console.log(s.substring(0, 5).toUpperCase())
  // console.log(s.split(''))
  // const services = 'Tech, Sports, Music'
  // console.log(services.split(', '));

// Arrays - Variables that hold multiple values
  // const fruits = ['apples', 'oranges', 'pears', 10, true]

  // fruits[5] = 'grapes';
  // fruits.push('mangos')
  // fruits.unshift('strawberries')
  // fruits.pop()

  // console.log(Array.isArray(fruits));
  // console.log(fruits);
  // console.log(fruits[0]);
  // console.log(fruits.indexOf('oranges'));

// Object literals - key / value pairs
  // const person = {
  //   firstName:'John',
  //   lastName:'Doe',
  //   age: 30,
  //   hobbies: ['music', 'movies', 'sports'],
  //   address: {
  //     street: '24 main street',
  //     city: 'London',
  //   }
  // }
  // console.log(person.firstName, person.lastName);
  // console.log(person.hobbies[1]);
  // console.log(person.address.city);

  // const {firstName, lastName, address:{city}} = person // Can pull data out of object
  // console.log(city);

  // person.email = 'john@email.com';
  // console.log(person);

// Arrays Of Objects
  // const todos = [
  //   {
  //     id: 1,
  //     text: 'Take out trash',
  //     isCompleted: true
  //   },
  //   {
  //     id: 2,
  //     text: 'Meeting with boss',
  //     isCompleted: true
  //   },
  //   {
  //     id: 3,
  //     text: 'Dentist appointment',
  //     isCompleted: false
  //   },
  // ];

// JSON files
  // console.log(todos[1].text);
  // const todoJSON = JSON.stringify(todos);
  // console.log(todoJSON);

// For Loops
// for(let i = 0; i < todos.length; i++) {
//   console.log(todos[i].text);
// }

// For Of
  // for(let todo of todos) {
  //   console.log(todo.text);
  // }

// While Loops
  // let i = 0;
  // while(i < 10) {
  //   console.log(`While Loop Number: ${i}`);
  //   i++;
  // }

// forEach, map, filter
  // todos.forEach(function(todo){
  //   console.log(todo.text);
  // })

  // const todoMap = todos.map(function(todo) {
  //   return todo.text;
  // });
  // console.log(todoMap);

  // const todoFilter = todos.filter(function(todo) {
  //   return todo.isCompleted === true
  // });
  // console.log(todoFilter);

  // const todoCompleted = todos.filter(function(todo){
  //   return todo.isCompleted === true;
  // }).map(function(todo) {
  //   return todo.text
  // }
  // )
  // console.log(todoCompleted);

// Conditionals

  // const x = '10';

  // if(x == 10) {
  //   console.log('x is 10');
  // }

  // const y = 4;

  // if(y === 10) {
  //   console.log('y is 10');
  // } else if(y > 10) {
  //   console.log('y is greater than 10');
  // }
  // else {
  //   console.log('y is less than 10');
  // }

  // const a = 6;
  // const b = 11;

  // if (a > 5 || b > 10) {
  //   console.log('a is greater than 5 OR b is greater than 10');
  // }

  // if (a > 5 && b > 10) {
  //   console.log('a is greater than 5 AND b is greater than 10');
  // }
  
// Ternary Operator - Shorthand if statement - often used to assign variables based on a condition

  // const x = 11;
  // const color = x > 10 ? 'red' : 'blue'
  // console.log(color);

// Switches - Similar to if else statements

// switch(color) {
//   case 'red':
//     console.log('The color is red');
//     break;
//   case 'blue':
//     console.log('The color is blue');
//     break;
//   default:
//     console.log('The color is neither red or blue');
//     break;
// }

// Functions
  // function addNums(num1 = 1, num2 = 1) {
  //   return num1 + num2;
  // }
  // console.log(addNums(5, 5));

// Arrow Functions - Function shorthand
  // const addNumbers = (number1 = 1, number2 = 1) => {
  //   return number1 + number2
  // }

  // console.log(addNumbers(5, 4))

// Arrow Functions - Even shorter way if no variables ect - Even less with only one parameter
  // const numsExample = (nExample1 = 1, nExample2 = 1) => nExample1 + nExample2

  // console.log(numsExample(2, 2));

// Object Oriented Programming

// Constructor Function
  // function Person(firstName, lastName, dob) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.dob = new Date(dob);
  // Adding methods to this function - Replaced with Prototypes below this function


// Prototypes
  // Person.prototype.getBirthYear = function() {
  //   return this.dob.getFullYear();
  // }

  // Person.prototype.getFullName = function() {
  //   return `${this.firstName} ${this.lastName}`
  // }


// Instantiate Object
  // const person1 = new Person('John', 'Doe', '4-3-1980');
  // const person2 = new Person('Mary', 'Smith', '3-6-1970');


  // console.log(person1);
  // console.log(person2.dob.getFullYear());

  // console.log(person1.getBirthYear());
  // console.log(person1.getFullName());

// Class - Same thing as above but prettier
  // class Person {
  //   constructor(firstName, lastName, dob) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //     this.dob = new Date(dob);
  //   } 

  //   getBirthYear() {
  //     return this.dob.getFullYear();
  //   }

  //   getFullName() {
  //     return `${this.firstName} ${this.lastName}`
  //   }
  // }

// Instantiate Object - Same as above but just for demonstration that it is the same even though we are using Class
    // const person1 = new Person('John', 'Doe', '4-3-1980');
    // const person2 = new Person('Mary', 'Smith', '3-6-1970');

    // console.log(person2.getFullName());
    // console.log(person1);

// DOM aka Document Object Model - Aka how we interact with out page

// Single Element
  // const form = document.getElementById('my-form')
  // console.log(form);

  // console.log(document.querySelector('h1')); 

// Multiple
  // console.log(document.querySelectorAll('.item'));
  // console.log(document.getElementsByClassName('.item'));
  // console.log(document.getElementsByTagName('li'));

  // const items = document.querySelectorAll('.item');
  // items.forEach((item) => console.log(item));

// Manipulating the DOM - aka User Interface
  // const ul = document.querySelector('.items');
  // ul.lastElementChild.remove()
  // ul.firstElementChild.textContent = 'Hello';
  // ul.children[1].innerText = 'Shaun'
  // ul.lastElementChild.innerHTML = '<h1>ADDED USING JAVASCRIPT</h1>';

  // const btn = document.querySelector('.btn');
  // btn.style.background = 'red';

  // const btn = document.querySelector('.btn');

  // btn.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   console.log('click');
  // });

  // btn.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   console.log(e.target.className);
  // });

  // btn.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   document.querySelector('#my-form').style.background = '#ccc';
  //   document.querySelector('body').classList.add('bg-dark');
  //   document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
  // });
  
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
  
myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();

  if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error')
    msg.innerHTML = 'Please enter all fields';

    setTimeout(() => msg.remove(), 3000)
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    userList.appendChild(li);

    // Clear Fields
    nameInput.value = '';
    emailInput.value = '';
  }
}