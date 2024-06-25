let score = 0;

export const questionsData = [
    {
      text: 'What are the differences between Java and JavaScript?',
      options: [
        { label: 'Javascript: light-weighted programming language (“scripting language”) for developing interactive web pages \n\
        Java: object-oriented programming language that allows you to create compiled programs that run on nearly every platform.', value: 'a' },
        { label: 'Javascript: heavy-weighted programming language for development on nearly every platform \n\
        Java: light-weighted programming language (“scripting language”) for developing interactive web pages', value: 'b' },
        { label: 'Javascript: its exclusively used for static web content creation \n\
        Java: is exclusively used for dynamic web content creation', value: 'c' },
        { label: 'Javascript: is a complied language, allowing for faster execution \n\
        Java: relies on interpretation, leading to slower performance.', value: 'd' },
      ],
      correctAnswer: 'a'
    },
    {
      text: 'What are the various data types that exist in JavaScript?',
      options: [
        { label: 'Text, Digit, Empty, Truthy, Falsy, Item, Emblem', value: 'a' },
        { label: 'Binary, Float, Array, Point, Literal, Instance, Alias', value: 'b' },
        { label: 'Boolean, Null, String, Number, Undefined, Object, Symbols', value: 'c' },
        { label: 'True, False, NaN, Infinity, Hash, Class, Collection', value: 'd' },
      ],
      correctAnswer: 'c'
    },
    {
      text: 'Which symbol is used for comments in JavaScript?',
      options: [
        { label: 'Backlash with Asterisk', value: 'a' },
        { label: 'Double slash or Slash with Asterisk', value: 'b' },
        { label: 'Exclamation Mark and Question Mark', value: 'c' },
        { label: 'Dollar Sign', value: 'd' },
      ],
      correctAnswer: 'b'
    },
    {
      text: 'What would be the result of 3+2+"7″?',
      options: [
        { label: '12', value: 'a' },
        { label: '57', value: 'b' },
        { label: '327', value: 'c' },
        { label: 'None of the above', value: 'd' },
      ],
      correctAnswer: 'b'
    },
    {
      text: 'What is the use of the isNaN function?',
      options: [
        { label: 'The isNan function determines whether the passed value is greater than another', value: 'a' },
        { label: 'The isNan function determines whether the passed value contains alphabetical characters', value: 'b' },
        { label: 'The isNan function determines whether the passed value is divisible by zero and is of the type “Number”.', value: 'c' },
        { label: 'The isNan function determines whether the passed value is NaN (Not a number) and is of the type “Number”.', value: 'd' },
      ],
      correctAnswer: 'd'
    },
    {
      text: 'How do you create an object in JavaScript?',
      options: [
        { label: 'const student = { name: "John", age: 17 }', value: 'a' },
        { label: 'const student = { name: John, age: 17 }', value: 'b' },
        { label: 'const student =  {{ name: "John"}, {age: 17 }}', value: 'c' },
        { label: 'student = { name: "John", age: 17 }', value: 'd' },
      ],
      correctAnswer: 'a'
    },
    {
      text: 'How do you create an array in JavaScript?',
      options: [
        { label: 'let arr = (1, 2, 3, 4, 5);', value: 'a' },
        { label: 'let arr = [1 : 2 : 3 : 4 : 5];', value: 'b' },
        { label: 'let arr = [1, 2, 3, 4, 5];', value: 'c' },
        { label: 'let arr = Array.from(12345);', value: 'd' },
      ],
      correctAnswer: 'c'
    },
    {
      text: 'What are all the looping structures in JavaScript?',
      options: [
        { label: 'Repeat, cycle and circular loops ', value: 'a' },
        { label: 'Spin, Wiggle and Whirl loop', value: 'b' },
        { label: 'if, progession and sequence loop', value: 'c' },
        { label: 'for, while and do loops', value: 'd' },
      ],
      correctAnswer: 'd'
    },
    {
      text: 'What are some of the built-in methods in JavaScript?',
      options: [
        { label: 'calculatePi(), findPrimeNumbers(), sortDescending(), changeFontColor(), addTwoNumbers(), moveRight()', value: 'a' },
        { label: 'shuffle(), split(), reverseString(), getRandomNumber(), uppercase(), removeAll()', value: 'b' },
        { label: 'push(), pop(), concat(), Date(), round() and length()', value: 'c' },
        { label: 'fetchDataFromApi(), drawCircle and do playSound()', value: 'd' },
      ],
      correctAnswer: 'c'
    },
    {
      text: 'What types of errors are shown in JavaScript?',
      options: [
        { label: 'Syntax, Logical and Runtime', value: 'a' },
        { label: 'Design, Execution and Integration', value: 'b' },
        { label: 'Input, Output and Complitation', value: 'c' },
        { label: 'Semantical, Typographical and Interprational', value: 'd' },
      ],
      correctAnswer: 'a'
    },
    {
      text: 'Inside which HTML element do we put the JavaScript?',
      options: [
        { label: '<js>', value: 'a' },
        { label: '<javascript>', value: 'b' },
        { label: '<script>', value: 'c' },
        { label: '<scripting>', value: 'd' },
      ],
      correctAnswer: 'c'
    },
    {
      text: 'How do you create a function in JavaScript?',
      options: [
        { label: 'function myFunction()', value: 'a' },
        { label: 'function = myFunction()', value: 'b' },
        { label: 'function = new myFunction()', value: 'c' },
        { label: 'function:myFunction()', value: 'd' },
      ],
      correctAnswer: 'a'
    },
    {
      text: 'How do you call a function in JavaScript?',
      options: [
        { label: 'call function myFunction()', value: 'a' },
        { label: 'call myFunction()', value: 'b' },
        { label: 'call new myFunction()', value: 'c' },
        { label: 'myFunction()', value: 'd' },
      ],
      correctAnswer: 'd'
    },
    {
      text: 'How to write an IF statement in JavaScript?',
      options: [
        { label: 'if i = 5 then', value: 'a' },
        { label: 'if i = 5', value: 'b' },
        { label: '(if i == 5)', value: 'c' },
        { label: 'if i == 5 then', value: 'd' },
      ],
      correctAnswer: 'b'
    },
    {
      text: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
      options: [
        { label: 'if i <> 5', value: 'a' },
        { label: 'if (i <> 5)', value: 'b' },
        { label: 'if (i != 5)', value: 'c' },
        { label: 'if i != 5 then', value: 'd' },
      ],
      correctAnswer: 'c'
    },
    {
      text: 'How does a WHILE loop start?',
      options: [
        { label: 'while i = 1 to 10', value: 'a' },
        { label: 'while (i <=10;i++)', value: 'b' },
        { label: 'while i <= 10 then', value: 'c' },
        { label: 'while (i <= 10)', value: 'd' },
      ],
      correctAnswer: 'd'
    },
    {
      text: 'How does a FOR loop start?',
      options: [
        { label: 'for (i <= 5; i++)', value: 'a' },
        { label: 'for (i =0; i <= 5; i++)', value: 'b' },
        { label: 'for (i = 0; i++)', value: 'c' },
        { label: 'for i = 1 to 5', value: 'd' },
      ],
      correctAnswer: 'b'
    },
    {
      text: 'How can you add a comment in a JavaScript?',
      options: [
        { label: '-This is a comment', value: 'a' },
        { label: '<!-- This is a comment -->', value: 'b' },
        { label: '//This is a comment', value: 'c' },
        { label: '/This is a comment', value: 'd' },
      ],
      correctAnswer: 'c'
    },
    {
      text: 'What is the correct way to write a JavaScript array?',
      options: [
        { label: 'var colours = (1:"red",2;"green",3:"blue")', value: 'a' },
        { label: 'var colours = "red","green","blue"', value: 'b' },
        { label: 'var colours = 1="red",2="green",3="blue"', value: 'c' },
        { label: 'var colours = ["red","green","blue"]', value: 'd' },
      ],
      correctAnswer: 'd'
    },
    {
      text: 'How do you round the number 7.25, to the nearest integer?',
      options: [
        { label: 'round(7.25)', value: 'a' },
        { label: 'rnd(7.25)', value: 'b' },
        { label: 'Math.rnd(7.25)', value: 'c' },
        { label: 'Math.round(7.25)', value: 'd' },
      ],
      correctAnswer: 'd'
    },
    {
      text: 'How do you find the number with the highest value of x and y?',
      options: [
        { label: 'Math.ciel(x, y)', value: 'a' },
        { label: 'Math.max(x, y)', value: 'b' },
        { label: 'Math.top(x, y)', value: 'c' },
        { label: 'Math.round(x, y)', value: 'd' },
      ],
      correctAnswer: 'b'
    },
    {
      text: 'How do you declare a JavaScript variable?',
      options: [
        { label: 'var carName;', value: 'a' },
        { label: 'var new carName;', value: 'b' },
        { label: 'v carName;', value: 'c' },
        { label: 'variable carName;', value: 'd' },
      ],
      correctAnswer: 'a'
    },
    {
      text: 'Which operator is used to assign a value to a variable?',
      options: [
        { label: '-', value: 'a' },
        { label: '*', value: 'b' },
        { label: '=', value: 'c' },
        { label: '/', value: 'd' },
      ],
      correctAnswer: 'c'
    },
    {
      text: 'What will the following code return: Boolean(10 > 9)',
      options: [
        { label: 'NaN', value: 'a' },
        { label: 'false', value: 'b' },
        { label: 'true', value: 'c' },
        { label: 't', value: 'd' },
      ],
      correctAnswer: 'c'
    },

]

export { score };