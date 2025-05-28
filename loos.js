// while loops
//const names = ['shaun', 'paul', 'jean'];
// let i=0;

/*while (i < 5){
    console.log('in loop:', i);
    i++;
}

let i = 0
while(i< names.length){
    console.log(names[i]);
    i++;
}

// do while loops
let i = 4;
do{
console.log('val of i is:', i);
    i++;  
} while (i < 5);*/

// if statement
//const age = 21

/*if(age > 20){
console.log('your are over 20 years old')
 } 

 const ninjas = ['gaddile', 'don', 'dio',]
if(ninjas.length > 3){
    console.log("that's a lot of ninjas")
}*/

/*const password = 'srtgs@grtysdf';
if(password.length >= 12 && password.includes('@')){
    console.log('your password is mighty enough')
}else if(password.length >= 8 || password.includes('@')){
    console.log('your password is long rnough')
} else {
    console.log('your password is not long enough')
}
let user = true;

if(!user){
    console.log("you're welcome")
} else{
    console.log('check your identity please')
}

// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i=0; i < scores.length; i++){

    if(scores[i] === 0){
        continue;
    }
    console.log('your score: ', scores[i]);

    if(scores[i] === 100){
    console.log('congrats, you got the top score!');
    break;
    }
}

// switch statements
const grade = 'B';

switch(grade){
    case 'A':
        console.log('you got an A');
        break;
    case 'B':
        console.log('you got an B');
        break;
    case 'C':
        console.log('you got an C');
        break;
    case 'D':
        console.log('you got an D');
        break;
    case 'E':
        console.log('you got an E');
        break;
    default:
        console.log('not a valid grade');
    
}*/

let age = 30;

if(true){
    let age = 40
    console.log('inside code block', age);
}

console.log('outside code block', age);