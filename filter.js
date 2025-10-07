// let a = [1,2,3,6,8,7,9,10,20,100,10,11,12]

// // outpuut numbers which more then 10
// console.log ( a.filter(el => el >= 10) )

// // output every second num
// console.log ( a.filter( (el, indx) => indx % 2 == 0 ))

// // output +1 to every element
// console.log ( a.map(el => ++el) )

let arrOfWords = ['apple', 2, 'orange', 10, 15, 'bananas', 121, 'wotermellon', 'pear']

function filterStr (str) {
    return typeof(str) === 'string'
}

function filterNum (str) {
    return typeof(str) === 'number'
}

console.log(arrOfWords.filter(filterStr).map(el => el.toUpperCase()))
console.log(arrOfWords.filter(filterNum))


// function filterLongWords (word) {
//     return word.length >= 5
// }


// function startFromA (el) {
//     // console.log(el)
//      return el.startsWith('a',2);

// console.log(arrOfWords.filter(startFromA))

let asd = -150
let qw = Math.abs(asd).toString().split('').map(el=>+el).reduce((a,b)=>a+b, 0)
console.log(qw) 
//111