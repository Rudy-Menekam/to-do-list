// import _ from 'lodash';
import './style.css';

const task1 = {
  description: 'Work on todo project',
  completed: true,
  index: 1,
};
const task2 = {
  description: 'Work with coding partners',
  completed: false,
  index: 2,
};
const task3 = {
  description: 'Complete all exercises',
  completed: false,
  index: 3,
};

const tasks = [task1, task2, task3];
const taskList = document.querySelector('.listItems');
const checkboxInput = document.createElement('input');

const displayTask = () => {
  for (let i = 0; i < tasks.length; i += 1) {
    const list = tasks[i];
    taskList.innerHTML += `<li class="task flex">
 <input type="checkbox" id="checked" name="checked" >
 <label class="label" id="label" for="checked">${list.description}</label>
</li>`;
    checkboxInput.checked = true;
  }
};

window.onload = displayTask();
