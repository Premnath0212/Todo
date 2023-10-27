import './style.css';
import Task from './task.js';
import storeTask from './taskService.js';
import manipulateInterface from './updateInterface.js';

const addtaskInput = document.querySelector('.additem');

manipulateInterface.displayTasks();

addtaskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const taskItem = new Task(0, addtaskInput.value, false);
    const tasks = storeTask.saveTask(taskItem, storeTask.getTasks());
    localStorage.setItem('task', JSON.stringify(tasks));
    manipulateInterface.displayTasks();
  }
});
