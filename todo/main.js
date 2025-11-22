let btn = document.querySelector('.btn_todo');
let inpt = document.querySelector('input');
let list = document.querySelector('#todos');  

function handlerClick (){
    let newTodo = this.previousElementSibling.value.trim();
    
    if (newTodo) {
        // add new todo
        createTodo(newTodo);
        this.previousElementSibling.value = '';
    } else {
        alert ('input fields is empty!')
    }
}

function removeTodo () {
    this.remove();
}

function createTodo (txt) {
    const li = document.createElement('li');
    li.innerText = txt;
    li.classList = 'her_class';
    li.addEventListener('click', removeTodo)

    list.append(li);
}

btn.addEventListener('click', handlerClick)