
const todoList = document.getElementById('todo-list')

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    for (let i = 0; i < arrayOfTodos.length; i++) {
        console.log(arrayOfTodos[i])

    }


const populateTodos = () => {
    clearTodos()

    for (let i = 0; i < arrayOfTodos.length; i++) {
        let li = document.createElement('li');
        li.textContent = arrayOfTodos[i].title;
       
        todoList.appendChild(li)
    }
}

const filterTodosById = () => {
    clearTodos()
    const userIdInput = document.getElementById('userId').value

    let filteredTodos = arrayOfTodos.filter((todo)=> todo.userId == userIdInput)
    
    for (let i = 0; i < filteredTodos.length; i++) {
        let li = document.createElement('li');
        li.textContent = filteredTodos[i].title;
       
        todoList.appendChild(li)
    }
}

const filterByComplete = () => {
    clearTodos()
    const userIdInput = document.getElementById('userId').value

    let filteredTodos = arrayOfTodos.filter((todo)=> todo.userId == userIdInput)
    for (let i = 0; i < filteredTodos.length; i++) {
        if (filteredTodos[i].completed == true){
            let li = document.createElement('li');
            li.textContent = filteredTodos[i].title;
            todoList.appendChild(li)
        }
    }
}
const filterByIncomplete = () => {
    clearTodos()
    const userIdInput = document.getElementById('userId').value
    let filteredTodos = arrayOfTodos.filter((todo)=> todo.userId == userIdInput)
    for (let i = 0; i < filteredTodos.length; i++) {
        if (filteredTodos[i].completed == false){
            let li = document.createElement('li');
            li.textContent = filteredTodos[i].title;
            todoList.appendChild(li)
        }
    }
}

const clearTodos = () => {
    todoList.innerHTML = '';
}
