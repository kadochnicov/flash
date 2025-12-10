//Global data
let list = document.querySelector('#todo-list');
let dropdown = document.querySelector('#user-todo');
let users = [];
let todos= [];

//Attach events>
document.addEventListener('DOMContentLoaded', appInit)

//basic logic
function getName(userId){
    let user = users.find(el=> el.id === userId);
    return user.name;
}

function printTodos({id, userId, title, completed}) {
    let li = document.createElement('li');
    li.innerHTML = `<span>${title} by ${getName(userId)}</span>`;
    li.classList.add('todo-item');
    li.dataset.id = id;

    let status = document.createElement('input');
    status.type = 'checkbox';
    status.checked = completed;

    let close = document.createElement('span');
    close.innerHTML = '&times;';
    close.classList.add('close');


    li.append(close);
    li.prepend(status);
    list.prepend(li);
}

function addUserToDropdawn(user) {
    let userItem = document.createElement('option');
    userItem.value = user.id;
    userItem.innerText = user.username;

    dropdown.append(userItem);
}

//event logic
function appInit(){
    Promise.all([getUsers(), getTodos()])
        .then((inf)=>{
            [users, todos] = inf;
            
            todos.forEach(element => printTodos(element));
            users.forEach(element => addUserToDropdawn(element));
        })

    //render
}

// Async functions
async function getUsers(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    return data;
}

async function getTodos(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await response.json();
    return data;
}