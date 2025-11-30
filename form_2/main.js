let btn_add_todo = document.querySelector('.btn_add');
let list = document.querySelector('#todo_list');

btn_add_todo.addEventListener('click', handleClick);

function handleClick () {
    let input_txt = this.previousElementSibling.value.trim();

    if (input_txt) {
        //create element
        addItem(input_txt);
        this.previousElementSibling.value = '';
    } else {
        alert('xui  VAM')
    }
}

function addItem (txt) {
    let newitem = document.createElement("li");
    let btndelete = document.createElement('button');
 
    btndelete.classList.add('.btndelete');
    btndelete.innerHTML = 'delete';

    newitem.innerText = txt;
    
    newitem.addEventListener('click', crosslineItem);
    btndelete.addEventListener('click', delLi);

    list.append(newitem);
    list.append(btndelete);
}

function crosslineItem () {
    this.classList.toggle('linethrough')
}

function delLi () {
    let allow = confirm('are YOU shure ?');
    
    if (allow) {
        this.previousElementSibling.remove();
        this.remove();
    }
}






























// let btnAdd = document.querySelector('.btn_add');
// let todo_list = document.querySelector('#todo_list');


// btnAdd.addEventListener('click', handlerClick);

// function handlerClick () {
//     let newTodo = this.previousElementSibling.value.trim();
//     console.log(newTodo);
//     // add item to list
//     if (newTodo) {
//         createTodos(newTodo);
//         this.previousElementSibling.value = '';
//     } else {
//         alert('you shold write down todos')
//     }   
// }

// function removeTodo () {
//     this.classList.toggle('linethrough')
// }

// function createTodos (txt) {
//     let todoItem = document.createElement('li');
//     todoItem.innerText = txt;
//     todoItem.addEventListener('click', removeTodo)
//     todo_list.append(todoItem);
// }