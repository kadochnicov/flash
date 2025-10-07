let arrOfString = ["Telescopes", "Glasses", "Eyes", "Monocles"];

function compareFun (a, b) {
 return a.length - b.length;
}

console.log(arrOfString.sort(compareFun))