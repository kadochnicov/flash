let btn = document.querySelector('#btn_change');
let block = document.querySelector('.blc_for_hide');

function togle_visabilty_block () {
    block.classList.toggle('hide');

}

function showEvent(event){
    console.log(event.target);
}

btn.addEventListener('click', togle_visabilty_block);
btn.addEventListener('click', showEvent)
block.addEventListener('mouseover', showEvent)