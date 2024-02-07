'use strict';

/* <label class="todo_item">
                <input type="checkbox">
                <div>teste de item 2</div>
                <input type="button" value="x">
            </label> */

let data = [
    {'task': 'Estudar JS', 'status': ''},
    {'task': "netflix", "status": 'checked'}
];

const newItem = (task, status) => {
    const item = document.createElement('label');
    item.classList.add('todo_item');
    item.innerHTML = `
    <input type="checkbox" ${status}checked>
    <div>${task}</div>
    <input type="button" value="x">`

    document.getElementById('todoList').appendChild(item);
}

const render = () => {
    data.forEach (item => newItem(item.task, item.status));
}

render();