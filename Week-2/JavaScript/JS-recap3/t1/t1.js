// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

const ul = document.querySelector('ul');

for (const todo in todoList) {
  const listItem = document.createElement('li');
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.id = 'todo-' + todoList[todo].id;
  checkBox.checked = todoList[todo].completed;
  listItem.appendChild(checkBox);

  const label = `<label for="${checkBox.id}">${todoList[todo].task}</label>`;
  listItem.insertAdjacentHTML('beforeend', label);

  ul.appendChild(listItem);
}
