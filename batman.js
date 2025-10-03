//   Batman Quotes
//   /kata/551614eb77dd9ee37100003e/

let getQuotes = function(quotes, hero) {
  function findPerson(value){
    return value == '1' || value == '2' || value == '0'
  }

  let personIndex = hero.split('').filter(findPerson);

  let person = '';

  if (personIndex == '1') {person = 'Rob1n'}
  if (personIndex == '2') {person = 'Rob2n'}
  console.log(person + ":" + quotes[+personIndex])

}

let quotes = [
  "I am vengeance. I am the night. I am Batman!",
  "Holy haberdashery, Batman!",
  "Let's put a smile on that faaaceee!"
]

let hero = "Rob1n" 