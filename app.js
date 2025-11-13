console.log('js works');

let btn = document.querySelectorAll('.accordion');

console.log(btn)

function tglAccardion () {
    console.log('check');
    this.nextElementSibling.classList.toggle('show');
}

btn.forEach(el => {
    el.addEventListener('click', tglAccardion)
})



