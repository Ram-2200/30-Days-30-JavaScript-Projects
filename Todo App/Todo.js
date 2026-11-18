//Javascriptpro_
//Dont forget to follow me on github,instagram and codepen.
let userInput = document.querySelector('.container .add-task-box input');
let addBtn = document.querySelector('.container .add-task-box .add-btn');
let allTasksBox = document.querySelector('.container .all-tasks');
let no_of_tasks_txt = document.querySelector('.container .others .no-of-tasks');
let clearAllBtn = document.querySelector('.container .clear-all-btn');
let othersBox = document.querySelector('.container .others');
let todos = JSON.parse(localStorage.getItem("all-todos") || "[]");

addBtn.addEventListener('click', () => {
        if (userInput.value != '') {
                createTodo(userInput.value);
        }
})

let createTodo = (userTask) => {
        let taskInfo = { task: userTask, status: "pending" };
        todos.push(taskInfo);
        localStorage.setItem("all-todos", JSON.stringify(todos));
        userInput.value = '';
        showTasks();
        count_no_of_tasks();
}

let showTasks = () => {
        let li = '';
        todos.forEach((todo, id) => {
                let isCompleted = todo.status == 'completed' ? 'checked' : '';
                li += `<div class="task task-${id}">
           <input type="checkbox" name="" id="${id}" ${isCompleted} onclick="taskComplete(this)">
           <span class="userTask ${isCompleted}">${todo.task}</span>
           <div class="btns">
              <button class="dlt-btn" onclick="deleteTask(${id})"><i class="fa-regular fa-trash-can"></i></button>
           </div>
          </div>`;
        });
        allTasksBox.innerHTML = li || `<p class="clipboard-icon"><i class="fa-solid fa-clipboard-list"></i></p>
 <p class='no-task-message'>No tasks here yet</p>`;
        count_no_of_tasks();
        if (todos.length == 0) {
                othersBox.style.display = 'none';
        } else {
                othersBox.style.display = 'block';
        }
}

let taskComplete = (elem) => {
        if (elem.checked) {
                elem.nextElementSibling.classList.add('checked');
                todos[elem.id].status = 'completed';
        } else {
                elem.nextElementSibling.classList.remove('checked');
                todos[elem.id].status = 'pending';
        }
        localStorage.setItem("all-todos", JSON.stringify(todos));
}

let deleteTask = (deleteId) => {
        todos.splice(deleteId, 1);
        localStorage.setItem("all-todos", JSON.stringify(todos));
        showTasks();
}

let count_no_of_tasks = () => {
        let no_of_tasks = todos.length;
        no_of_tasks_txt.innerHTML = `You have <strong>${no_of_tasks}</strong> Tasks`;
}

clearAllBtn.addEventListener('click', () => {
        todos = [];
        localStorage.setItem("all-todos", JSON.stringify(todos));
        showTasks();
})

showTasks();
