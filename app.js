let btn = document.querySelectorAll('.accordion');
let input = document.querySelector('input');
let btn_form = document.querySelector('.btn_form')

function objListen (evt) {
    console.log(evt.target);
}

function tglAccardion () {
    console.log('check');
    this.nextElementSibling.classList.toggle('show');
}

btn.forEach(el => {
    el.addEventListener('click', tglAccardion);
})

////////////////

input.addEventListener('keypress', objListen);
btn_form.addEventListener('click', objListen);



