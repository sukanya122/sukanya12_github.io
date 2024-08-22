document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', () => {
        const text = input.value.trim();

        if (text) {
            const li = document.createElement('li');

            const span = document.createElement('span');
            span.textContent = text;

            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.addEventListener('click', () => {
                span.classList.toggle('complete');
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                todoList.removeChild(li);
            });

            li.appendChild(span);
            li.appendChild(completeButton);
            li.appendChild(deleteButton);
            todoList.appendChild(li);

            input.value = '';
        }
    });
});
