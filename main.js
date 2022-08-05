var userName = 'Chau'; 
if (userName) {
    console.log(`Hello, ${userName}!`);
} else {
    console.log('Hello!');
};

var userQuestion = 'learn to fly?';
if (userName){
    console.log(`Will ${userName} ${userQuestion}`);
} else console.log (`Will you ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

var responses = ['It is certain', 'It is decidedly so', 
'Reply hazy try again','Cannot predict now',
'Do not count on it','My sources say no',
'Outlook not so good', 'Signs point to yes'];

let eightBall = '';

if (randomNumber === 0) {
 eightBall = responses[0];
} else if (randomNumber === 1){
    eightBall = responses[1];
} else if (randomNumber === 2){
    eightBall = responses[2];
} else if (randomNumber === 3){
    eightBall = responses[3];
} else if (randomNumber === 4){
    eightBall = responses[4];
} else if (randomNumber === 5){
    eightBall = responses[5];
} else if (randomNumber === 6){
    eightBall = responses[6];
} else if (randomNumber === 7){
    eightBall = responses[7];
}
console.log(eightBall);
