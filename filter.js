let a = [1,2,3,6,8,7,9,10,20,100,10,11,12]

// outpuut numbers which more then 10
console.log ( a.filter(el => el >= 10) )

// output every second num
console.log ( a.filter( (el, indx) => indx % 2 == 0 ))

// output +1 to every element
console.log ( a.map(el => ++el) )