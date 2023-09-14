// fake array to begin with
// let arrayOfTodos = [
//     {
//     "userId": 14,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// },
// {
//     "userId": 20,
//     "id": 2,
//     "title": "something else",
//     "completed": false
// }]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    for (let i = 0; i < arrayOfTodos.length; i++) {
    console.log(arrayOfTodos[i].title)
    }
}

let list = document.getElementById("todo-list") 


const populateTodos = () => {
    for (let i = 0; i < arrayOfTodos.length; i++) {
        let newListItem = document.createElement('LI')
        newListItem.innerText = arrayOfTodos[i].title
        list.appendChild(newListItem)
    }
}