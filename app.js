'use strict';

// Get de data in localStorage and tranform in JSON format.
const getData = () => JSON.parse(localStorage.getItem ('todoList')) ?? [];
// Insert the data in localStorage e transform in STRING.
const setData = (data) => localStorage.setItem('todoList', JSON.stringify(data));


// Add new task to the list
const newItem = (task, status, index) => {
    const item = document.createElement('label');
    item.classList.add('todo_item');
    item.innerHTML = `
    <input type="checkbox" ${status} data-index=${index}>
    <div>${task}</div>
    <input type="button" value="x" data-index=${index}>`;
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
    const data = getData();
    data.forEach ((item, index) => newItem(item.task, item.status, index));
}

const insertItem = (event) => {
    
    const key = event.key;
    const input = event.target.value;
    if( key === 'Enter'){
        const data = getData();
        data.push({'task': input, 'status': ''});
        setData(data);
        render();
        event.target.value = '';
    }
    
    console.log(key);

}

const removeItem = (index) => {
    const data = getData();
    data.splice (index, 1);
    setData(data);
    render();
}

const updateItem = (index) => {
    const data = getData();
    data[index].status = data[index].status === '' ? 'checked' : '';
    setData(data);
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




