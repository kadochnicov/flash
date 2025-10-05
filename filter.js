// let a = [1,2,3,6,8,7,9,10,20,100,10,11,12]

// // outpuut numbers which more then 10
// console.log ( a.filter(el => el >= 10) )

// // output every second num
// console.log ( a.filter( (el, indx) => indx % 2 == 0 ))

// // output +1 to every element
// console.log ( a.map(el => ++el) )

let arrOfWords = ['apple', 'orange', 'bananas','wotermellon', 'pear']

function filterLongWords (word) {
    return word.length >= 5
}

function startFromA (el) {
    // console.log(el)
     return el.startsWith('a',2);
 }

console.log(arrOfWords.filter(startFromA))