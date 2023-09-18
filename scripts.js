

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


const filterTodos = () => {
    list.remove()
    let userId = document.getElementById("userId")
    const filteredList = arrayOfTodos.filter(index === userId)
   
    // for (let i = 0; i < arrayOfTodos.length; i++) {
    //     let filteredListItem = document.createElement('LI')
    //     filteredListItem.innerText = arrayOfTodos[i].title
    //     list.appendChild(filteredListItem)
    // }
    
}

const populateTodos = () => {
    for (let i = 0; i < arrayOfTodos.length; i++) {
        let newListItem = document.createElement('LI')
        newListItem.innerText = arrayOfTodos[i].title
        list.appendChild(newListItem)
    }
}