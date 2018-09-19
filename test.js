let number = 2;

function func1 (number) {

    console.log(`number in the function scope is ${number}`);

    number = 6; // you are overwriting number in local/function scope
    console.log(`number in the function scope is ${number}`);
}

func1();

console.log('----------------------------------------')
func1(5);

console.log('----------------------------------------')
func1(number);// is the same as doing this => func1(2);

let number2;

// let example1; // declaring a variable
// let example2 = 2; // declaring and initializing a variable

// console.log('example1', example1);