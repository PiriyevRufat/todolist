document.addEventListener('DOMContentLoaded', function() {
    const addTodoButton = document.getElementById('addTodo');
    const taskInput = document.getElementById('inp');
    const todoList = document.querySelector('.todoli');


    function addTodo() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox">
                <p>${taskText}</p>
                <div><i class="fa-solid fa-trash-can"></i></div>
            `;
            todoList.appendChild(li);
            taskInput.value = '';
            li.querySelector('input[type="checkbox"]').addEventListener('change', completeTodo);
            li.querySelector('.fa-trash-can').addEventListener('click', deleteTodo);
        }
    }
    function completeTodo() {
        const checkbox = this;
        const todoItem = checkbox.parentElement;
        const todoText = todoItem.querySelector('p');

        if (checkbox.checked) {
            todoText.classList.add('completed');
        } else {
            todoText.classList.remove('completed');
        }
    }


    function deleteTodo() {
        const todoItem = this.parentElement.parentElement;
        todoList.removeChild(todoItem);
    }

    addTodoButton.addEventListener('click', addTodo);


    const defaultTodoItems = todoList.querySelectorAll('li');
    defaultTodoItems.forEach(function(item) {
        item.querySelector('.fa-trash-can').addEventListener('click', deleteTodo);
    });
});
