var userName = 'Chau'; 
if (userName) {
    console.log(`Hello, ${userName}!`);
} else {
    console.log('Hello!');
};
// Note: Never declare variable inside conditional statement bc reassigning value of value
// Issue: console.log() only changes when userName changes only if userName value changes in 'if' statement
// Doesn't change when value of var=userName is changed

var userQuestion = 'learn to fly?';
if (userName){
    console.log(`Will ${userName} ${userQuestion}`);
} else console.log (`Will you ${userQuestion}`);

// Issue: userName must be changed in both in order for correct prompt to show
// I'm aware that I am reassigning values for userName constantly, but I don't know how to make it so that if I
// change the the value of the first var=userName , all of the following userName values would follow
    // Note: 

// var randomNumber = Math.floor(Math.random() * 8);
// var eightBall =''

let randomNumber = Math.floor(Math.random() * 8);
var responses = ['It is certain', 'It is decidedly so', 
'Reply hazy try again','Cannot predict now',
'Do not count on it','My sources say no',
'Outlook not so good', 'Signs point to yes'];
var eightBall = '';

if (randomNumber === 0) {
 console.log(responses[0]);
} else if (randomNumber === 1) {
    console.log(responses[1]);
} else if (randomNumber === 2) {
    console.log(responses[2]);
} else if (randomNumber === 3) {
    console.log(responses[3]);
} else if (randomNumber === 4) {
    console.log(responses[4]);
} else if (randomNumber === 5) {
    console.log(responses[5]);
} else if (randomNumber === 6) {
    console.log(responses[6]);
} else if (randomNumber === 7) {
    console.log(responses[7]);
}

// var eightBall isn't being used. 
