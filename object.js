const dog = {
    name: 'Rada',
    age: 15,
    home: true,
    ownerName: "Andrew",
    adress: "Rogachevskaja srteet 14 10",
}

console.log(dog.adress);

dog.age++

console.log(dog.age)


let nam = 'ownerName'
console.log(dog[nam])

const cat = dog;

console.log(cat.home)

cat.home = false

console.log("name" in cat) 
//jkhjkh


