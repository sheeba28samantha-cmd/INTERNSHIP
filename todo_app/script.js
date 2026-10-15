const todoInput = document.querySelector("#todoInput");
const addButton = document.querySelector("#addButton");
const todoList = document.querySelector("#todoList");

// Load saved tasks
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Save tasks to localStorage
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Display tasks
function displayTodos() {
    todoList.innerHTML = "";

    todos.forEach((todo, index) => {
        const li = document.createElement("li");

        li.dataset.index = index;

        const taskText = document.createElement("span");
        taskText.textContent = todo.text;

        if (todo.completed) {
            taskText.classList.add("completed");
        }

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");

        li.appendChild(taskText);
        li.appendChild(deleteButton);

        todoList.appendChild(li);
    });
}

// Add a new task
addButton.addEventListener("click", function () {
    const task = todoInput.value.trim();

    if (task === "") {
        return;
    }

    todos.push({
        text: task,
        completed: false
    });

    saveTodos();

    todoInput.value = "";

    displayTodos();
});

// Event delegation
todoList.addEventListener("click", function (event) {
    const li = event.target.closest("li");

    if (!li) {
        return;
    }

    const index = Number(li.dataset.index);

    // Delete task
    if (event.target.classList.contains("delete-btn")) {
        todos.splice(index, 1);
    } 
    // Complete/uncomplete task
    else {
        todos[index].completed = !todos[index].completed;
    }

    saveTodos();
    displayTodos();
});

// Display saved tasks
displayTodos();