let rarOfString = ["Telescopes", "Glasses", "Eyes", "Monocles", 'dsfssdfsdfsdfsdfsdfs'];

function compareFun (a, b) {
 return a.length - b.length;
}

console.log(rarOfString.sort(compareFun))