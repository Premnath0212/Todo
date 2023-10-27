import storeTask from './taskService.js';

const itemsContainer = document.querySelector('.items');
const generateItems = (taskitem) => {
  let result = '';
  if (taskitem.isCompeleted) {
    result = `
                <div class="item" draggable="true">
                <input type="checkbox" name="checkbox" data-id ="${taskitem.index}" class="checktask" checked>
                <input type="text" value="${taskitem.description}"data-id ="${taskitem.index}" class="savedItem underline"  >
                <i class="fa fa-trash delete-btn" data-id ="${taskitem.index}"  aria-hidden="true"></i>
            </div> 
                `;
  } else {
    result = `
                <div class="item" draggable="true">
                <input type="checkbox" name="checkbox"  data-id ="${taskitem.index}" class="checktask" >
               <input type="text" value="${taskitem.description}" data-id ="${taskitem.index}" class="savedItem"  >
               <i class="fa fa-trash delete-btn" data-id ="${taskitem.index}" aria-hidden="true"></i>
            </div> 
                `;
  }
  return result;
};
class manipulateInterface {
  static displayTasks() {
    const taskList = storeTask.getTasks();

    let htmlContent = '';
    taskList.forEach((taksitem) => {
      htmlContent += generateItems(taksitem);
    });
    itemsContainer.innerHTML = htmlContent;
    document.querySelector('.additem').value = '';
    document.querySelectorAll('.checktask').forEach((item) => {
      item.addEventListener('change', function addCheckListner() {
        const index = this.getAttribute('data-id');
        const status = this.checked;
        const tasks = storeTask.updateStatus(index, status, storeTask.getTasks());
        localStorage.setItem('task', JSON.stringify(tasks));
        manipulateInterface.displayTasks();
      });
    });
    document.querySelectorAll('.delete-btn').forEach((item) => {
      item.addEventListener('click', function addCheckListner() {
        const index = this.getAttribute('data-id');
        const tasks = storeTask.removeTask(index, storeTask.getTasks());
        localStorage.setItem('task', JSON.stringify(tasks));
        manipulateInterface.displayTasks();
      });
    });
    document.querySelectorAll('.clear').forEach((item) => {
      item.addEventListener('click', () => {
        const tasks = storeTask.removeCompeletedTask(storeTask.getTasks());
        localStorage.setItem('task', JSON.stringify(tasks));
        manipulateInterface.displayTasks();
      });
    });

    document.querySelectorAll('.savedItem').forEach((item) => {
      item.addEventListener('keypress', function updateDescriptionEvent(event) {
        if (event.key === 'Enter') {
          const index = this.getAttribute('data-id');
          const description = this.value;
          const tasks = storeTask.updateDescription(index, description, storeTask.getTasks());
          localStorage.setItem('task', JSON.stringify(tasks));
          manipulateInterface.displayTasks();
        }
      });
    });
  }
}
export default manipulateInterface;
