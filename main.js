let btn = document.querySelector('#btn_change');
let block = document.querySelector('.blc_for_hide');
let inputs = document.querySelectorAll('.inpt');
let btn_form = document.querySelector('.btn_form');


function togle_visabilty_block () {
    block.classList.toggle('hide');
}

function showEvent(event){
    console.log(event.target);
}

function goNextInpt (evt) {
    if (evt.key === 'Enter') {
        evt.target.nextElementSibling.focus()
    }
}

btn.addEventListener('click', togle_visabilty_block);
btn.addEventListener('click', showEvent)
block.addEventListener('mouseover', showEvent)

inputs.forEach (el => {
    el.addEventListener('keypress', goNextInpt)
})