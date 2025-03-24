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

function createListItem(todo) {
  const listItem = document.createElement('li');
  const checkBox = document.createElement('input');
  const deleteBtn = document.createElement('button');

  deleteBtn.innerText = 'X';
  deleteBtn.addEventListener('click', () => {
    removeItem(listItem, todo);
  });

  checkBox.type = 'checkbox';
  checkBox.id = 'todo-' + todo.id;
  checkBox.checked = todo.completed ? true : false;

  // checkbox -> click -> asettaa todo(true/false) riippuen kumpi kyseessä atm
  checkBox.addEventListener('click', () => {
    todo.completed = checkBox.checked ? true : false;
    // debug
    console.log(todoList);
  });

  const label = document.createElement('label');
  label.htmlFor = checkBox.id;
  label.textContent = todo.task;

  listItem.append(deleteBtn, checkBox, label);

  ul.appendChild(listItem);
}

function removeItem(listItem, todo) {
  // poistetaan ul:stä + indexillä poistetaan myös todolistasta
  console.log(todo, 'REMOVED');
  const i = todoList.indexOf(todo);
  todoList.splice(i, 1);
  ul.removeChild(listItem);

  console.log('ul size: ' + ul.children.length);
  console.log(todoList);
}

const addButton = document.querySelector('.add-btn');
const modal = document.querySelector('dialog');

addButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

const submit = document.querySelector('button[type="submit"]');
const input = document.querySelector('input[type="text"]');

submit.addEventListener('click', (event) => {
  // tärkee
  event.preventDefault();
  // tungetaan task todoListan // input.valuella napataan teksti formista
  const task = {id: todoList.length + 1, task: input.value, completed: false};
  todoList.push(task);
  // resetataan input alue ja vedetään modal pois näkyvistä
  input.value = '';
  modal.style.display = 'none';
  // luodaan uusi task
  createListItem(task);
  console.log('Added new task...');
  console.log(todoList);
});

// for loopilla luodaan list-itemit
console.log('Luodaan list-itemit:');
for (const todo of todoList) {
  console.log(todo);
  createListItem(todo);
}
