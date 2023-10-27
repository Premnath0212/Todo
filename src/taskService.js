class storeTask {
  static getTasks() {
    return JSON.parse(localStorage.getItem('task')) || [];
  }

  static reArrange(tasks) {
    tasks.forEach((task, i) => {
      task.index = i + 1;
    });
    return tasks;
  }

  static saveTask(task, tasks) {
    if (tasks.length === 0) {
      task.index = 1;
    } else {
      const lastTask = tasks[tasks.length - 1];
      task.index = lastTask.index + 1;
    }
    tasks.push(task);
    return tasks;
  }

  static removeTask(index, tasks) {
    tasks.forEach((task, i) => {
      if (task.index === parseInt(index, 10)) {
        tasks.splice(i, 1);
      }
    });
    tasks = storeTask.reArrange(tasks);
    return tasks;
  }

  static removeCompeletedTask(tasks) {
    tasks = tasks.filter((x) => x.isCompeleted === false);
    tasks = storeTask.reArrange(tasks);
    return tasks;
  }

  static updateStatus(index, status, tasks) {
    tasks[index - 1].isCompeleted = status;
    return tasks;
  }

  static updateDescription(index, desc, tasks) {
    tasks[index - 1].description = desc;
    return tasks;
  }
}

module.exports = storeTask;
