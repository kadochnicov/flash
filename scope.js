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