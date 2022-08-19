
window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;

        if (!task) {
            alert('Please add a task!');
            return;
        }

        const taskElem = document.createElement('div');
        taskElem.classList.add('task');

        const contentElem = document.createElement('div');
        contentElem.classList.add('content');

        taskElem.appendChild(contentElem);

        const taskInput = document.createElement('input');
        taskInput.classList.add('text');
        taskInput.type = 'text';
        taskInput.value = task;
        taskInput.setAttribute('readonly', 'readonly');

        contentElem.appendChild(taskInput);

        const actionsElem = document.createElement('div');
        actionsElem.classList.add('actions');

        taskElem.appendChild(actionsElem);

        const editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.innerHTML = 'Edit';

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.innerHTML = 'Delete';

        actionsElem.appendChild(editButton);
        actionsElem.appendChild(deleteButton);

        list.appendChild(taskElem);

        input.value = '';

        editButton.addEventListener('click', () => {
            if (editButton.innerText.toLowerCase() === 'edit') {
                taskInput.removeAttribute('readonly');
                taskInput.focus();
                editButton.innerText = 'Save';
            } else {
                taskInput.setAttribute('readonly', 'readonly');
                editButton.innerText = 'Edit';
            }
        })

        deleteButton.addEventListener('click', () => {
            list.removeChild(taskElem);
        })
    })
})