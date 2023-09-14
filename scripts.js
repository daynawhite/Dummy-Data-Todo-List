// fake array to begin with
let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

// const fetchTodos = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then( (response) => response.json())
//     .then( (json) => arrayOfTodos = json)
// }

const logTodos = () => {
    console.log(arrayOfTodos[0].title)
   
}

let list = document.getElementById("todo-list") 
let newListItem = document.createElement('LI')

const populateTodos = () => {
    newListItem.innerText = arrayOfTodos[0].title
    list.appendChild(newListItem)
}