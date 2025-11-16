function sayName(name) {
    function helloName(){
        console.log('hello ' + name)
    }

    return helloName;
}

const hiAndrew = sayName("Andrew");
const hiSanja = sayName("Sanek");
hiAndrew();
hiSanja();


function counter(who) {
    let i = 0; 
    function inc() {
       console.log(who  + ++i) 
    }

    return inc;
}

const counterMale = counter("male");
const counterFeMale = counter("female");
counterMale();
counterFeMale();
counterFeMale();
counterMale();
counterFeMale();
counterMale();
counterMale();
counterMale();
counterFeMale();
counterFeMale();
counterFeMale();
counterMale();
counterMale();
counterFeMale();

function AddByX (num) {
    return function add (num2) {
        console.log(num + num2)
    }
}

const addfive = AddByX(5);
addfive(5); 

const addTen = AddByX(10);
addTen(100)