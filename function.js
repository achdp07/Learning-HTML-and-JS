// function declaratiom
/*function great(){
    console.log('hello there')
}

// function expression
const speak = function(){
    console.log('good day')
};

speak();*/

// Parameters and arguments

/*const speak = function(name, time){
    console.log(`good ${time} ${name}`);
};

speak('mario', 'morning');
*/

const calcArea = function(radius){
    let area = 3.24 * radius**2
    return area;
}

const area  = calcArea(5);
console.log(area)