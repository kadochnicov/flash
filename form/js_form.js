let inputs = document.querySelectorAll('.inpt');
let form = document.querySelector('form');
let btn_clr = document.querySelector('.btn_clr');

function goNextElement (event) {
    console.log(event);
    if (event.key === 'Enter') {
        event.preventDefault();
        event.target.nextElementSibling.nextElementSibling.focus();
    }
}

function handleSubmit (event) {
    event.preventDefault();
    if (validate()){
        //submit ALJAX
        form.reset();
    } else {
        alert('Fill emoty fields! pls')
        console.log('asd');
    };
}

function clearForm (event) {
    event.preventDefault();
    form.reset();
    console.log('clear');
    console.log(event);
}

function validate () {
    let valid = true;

    inputs.forEach(el => {
        if(!el.value.trim()) {
            el.style.backgroundColor = 'red';
            valid = false;
         } else {
            el.style.backgroundColor = 'white';
         }
    })

    return valid;
}

inputs.forEach(el => {
    el.addEventListener('keypress', goNextElement)
})

form.addEventListener('submit', handleSubmit)

btn_clr.addEventListener('click', clearForm)

