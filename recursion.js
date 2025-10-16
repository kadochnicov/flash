// рекурсия должна содержать базовое условие
// и правило движения по рекурсии 


// факториал 5*4*3*2*1
function factotial (n) {
    if (n === 1) return 1
    return n * factotial(n - 1)
} 
console.log(factotial(10))