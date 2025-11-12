let btn = document.querySelector('#btn_change');
let block = document.querySelector('.blc_for_hide');

function togle_visabilty_block () {
    block.classList.toggle('hide');
    console.log('sd')
}

btn.addEventListener('click', togle_visabilty_block);