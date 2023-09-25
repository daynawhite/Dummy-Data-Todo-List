
const todoList = document.getElementById('todo-list')

// const userIdInput = document.getElementById('userId').value
// console.log(userIdInput)

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    for (let i = 0; i < arrayOfTodos.length; i++) {
        // console.log(arrayOfTodos[i].title)
        console.log(arrayOfTodos[i])

    }

    // console.log(arrayOfTodos)
}

// let list = document.getElementById("todo-list") 

const populateTodos = () => {
    clearTodos()
    // let listArray = array.from(li)
    // listArray.forEach(function(elem) {
    // })

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
    // console.log(filteredTodos)
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
// const saveIdInput = (num) => {
//  idInput = parseInt(num) 
// }


// const filterTodosById = () => {
//        todoList.innerHTML = '';
// }


//    const filteredList = arrayOfTodos.filter()
//    for (let i = 0; i < arrayOfTodos.length; i++) {

    // IF arrayOfTodos.userID === IdInput THEN appendChild
    // let ListItemById = document.createElement('LI')
    // listItemById.innerText = arrayOfTodos[i].title
    // list.appendChild(newListItem)

    // for (let i = 0; i < arrayOfTodos.length; i++) {
    //     let filteredListItem = document.createElement('LI')
    //     filteredListItem.innerText = arrayOfTodos[i].title
    //     list.appendChild(filteredListItem)
    // }
// }