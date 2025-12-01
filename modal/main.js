let btn_modal = document.querySelector('#myBtn');
let modal_win = document.querySelector('#myModal');

btn_modal.addEventListener('click', openModal);

function openModal() {
    modal_win.classList.add('open');
    attachModEv();
}

function closeModal() {
    modal_win.classList.remove('open');
    deattachModEv();
}

function attachModEv() {
    modal_win.querySelector('.close').addEventListener('click', closeModal);
    document.addEventListener('keypress', handleEsc);
    modal_win.addEventListener('click', handleOutside);
}

function deattachModEv() {
    modal_win.querySelector('.close').removeEventListener('click', closeModal);
    document.removeEventListener('keydown', handleEsc);
    modal_win.removeEventListener('click', handleOutside);
}

function handleEsc(event) {
    console.log(event.key);
    if(event.key === "q") {
        closeModal();
    }
}

function handleOutside(event) {
    if(event.target === modal_win) {
         closeModal();
    }
    //find out method closest() !!!
}