var someInteger = 123; // integer
var someFloat = 3.14; //  float
var someString = 'foo'; // string
var someString2 = "<a href=\"/foo\">foo</a>"; // string
var someString3 = `dfsdfdfsd`; // string (option + ~)
var name = `Kārlis`;
var greeting = `Hello, ` + name + `. How do you do?`;
var greeting2 = `Hello, ${name}. How do you do?`;
// let // private (var - public)
// const // unchangeable

// console.log(greeting);
// console.log(greeting2);
var someTrue = true; //bool
var someNull = null; // no value
var someNull2; // not defines, the same no value
someTrue = false;

var someArray = [1, 2, 3, 4, 'foo', 'bar', 3.14]; // array массив
var cars = [
'vaz',
'gaz',
'uaz',
'zaz',
'maz',
'bmw',
];

console.log(cars[5]);
cars[5] = 'audi'
console.log(cars[5]);
cars.push('lada'); // add
console.log(cars.length);

var person = { 
    name: 'John',
    surname: 'Doe',
    age: 18,
};
console.log(person.surname);

var people = [
    {
        name: 'John',
    surname: 'Doe',
    age: 18,
    },
    {
        name: 'Jane',
    surname: 'Doe',
    age: 80,
    }
    
]
console.log(people[1].age);
console.log(people[1]['age']);


// +
// -
// *
// /
// %

// >
// <
// >=
// <=
// ==
// !=

// '1' == 1 - true
// true == 1 - true
// false == 1 - false
//true == 0 - false
// false == 0 - true
// '' == true - false

// ===
// !==

if (1 == 2) {

} else if(2==2) {

} else {

}
if (1 == 2)
console.log(123);

var foo = 'bar';
switch ('foo') {
case ('foo'):
console.log(1);
break;

case ('bar'):
console.log(2);
break;

case ('baz'):
console.log(3);
break;

default:
console.log(0);
}

var i = 0;
while(true) {
    i = i + 1;
    i++;
    i+= 2;

    console.log(1);

    if (i > 1000) {
        break;
    }
}

do {
    console.log(123);
} while(false);

for (var j = 20; j <= 0; j--) {
console.log(j);

}
var array = ['foo', 'bar', 'baz', 'biz'];
for (var index = 0; index < array.length; index++) {
    var element = array[index];
}

for (var index in array) {

}

for (var l = 0; l <= 50; l++) {
    if (l % 2 == 0 && l % 3 == 0 ) {
        console.log('fizz bazz');
    } 
else if (l % 2 == 0) {
    console.log('fizz');
}
else if (l % 3 == 0) {
    console.log('bazz');
}
 else {
console.log(l);
} 
}

console.log(parseInt('123asd123'));
console.log(parseFloat('3.14asd3.14'));

// Math.PI
// Math.round()
// Math.Ceil()
// Matf.floor()

// cars.push() adds
// cars.reverse() 
// cars.join(', ') transform massive to string

var something = 'foo';
// something.length
// something.split('') transforms string to massive

var date = new Date();

function addTwoNumbers(num1, num2 = 10) {
    return num1 + num2; // return breaks function
}

console.log(addTwoNumbers(1));

function checkPalindrome(word) {
   // return word.split('').reverse().join('') == word;
var word = word.replace(/[^a-zA-Z0-9]+/gi, '').toLowerCase();
var array = word.split('');
var reverse = array.reverse();
var joined = reverse.join('');

if (joined == word) {
    return true;
}

    return false;
}

console.log(checkPalindrome('A nut for a jar of tuna'));
console.log(checkPalindrome('Civic'));
console.log(checkPalindrome('kayak'));
console.log(checkPalindrome('level'));
console.log(checkPalindrome('janis'));


function checkAnagram(word1, word2) {
    var array1 = word1
    .toLowerCase()
    .replace(/ /g, '')
    .split('')
    .sort()
    .join('');
    var array2 = word2
    .toLowerCase()
    .replace(/ /g, '')
    .split('')
    .sort()
    .join('');
    

    return (array1 === array2);
}
console.log(checkAnagram('Elvis', 'Lives'));
console.log(checkAnagram('Clint Eastwood', 'Old West action'));
