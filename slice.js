
function replace(s) {
  console.log(s.split('').filter(el => !'aeiouAEIOU'.includes(el)).join('') )
}


console.log(replace('aawwaatteeyytUHsdkfhs'))
console.log(replace('aawwaatteeyytфывфUHsdkfhs'))