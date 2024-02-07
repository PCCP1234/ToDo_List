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

const newItem = (task, status, index) => {
    const item = document.createElement('label');
    item.classList.add('todo_item');
    item.innerHTML = `
    <input type="checkbox" ${status} data-index=${index}>
    <div>${task}</div>
    <input type="button" value="x" data-index=${index}>`

    document.getElementById('todoList').appendChild(item);
}

const cleanTasks = () => {
    const todoList = document.getElementById('todoList')
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

const render = () => {
    cleanTasks();
    data.forEach ((item, index) => newItem(item.task, item.status, index));
}

const insertItem = (event) => {
    const key = event.key;
    const input = event.target.value;
    if( key === 'Enter'){
        data.push({'task': input, 'status': ''});
        render();
        event.target.value = '';
    }
    
    console.log(key);

}

const removeItem = (index) => {
    data.splice (index, 1);
    render();
}

const updateItem = (index) => {
    data[index].status = data[index].status === '' ? 'checked' : '';
    render();
}

const clickItem = (event) => {
    const element = event.target;
    if(element.type === 'button') {
        const index = element.dataset.index;
        removeItem(index);
    } else if (element.type === 'checkbox') {
        const index = element.dataset.index;
        updateItem(index);
    }
    console.log(element);
}

document.getElementById('newItem').addEventListener('keypress', insertItem);
document.getElementById('todoList').addEventListener('click', clickItem)

render();




