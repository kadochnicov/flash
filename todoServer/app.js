//Global data
let users = [];
let todos= [];

//Attach events>
document.addEventListener('DOMContentLoaded', appInit)

//event logic
function appInit(){
    Promise.all([getUsers(), getTodos()])
        .then((inf)=>{
            [users, todos] = inf;
             console.log(users);
             console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
             console.log(todos);
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