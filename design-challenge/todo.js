class Task {
  constructor(desc) {
    this.description = desc;
    this.added = new Date();
    this.isComplete = false;
  }

  markComplete() {
    this.isComplete = true;
    return "Task marked complete.";
  }

  markIncomplete() {
    this.isComplete = false;
    return "Task marked incomplete.";
  }
}

class List {
  constructor(name) {
    this.owner = name;
    this.tasks = [];
  }

  get info() {
    return `${this.owner}'s To-do List`;
  }

  get status() {
    let completed = this.tasks.filter(task => task.isComplete === true).length;
    return `${completed} tasks completed. ${this.tasks.length - completed} tasks are incomplete.`;
  }

  addTask(desc) {
    this.tasks.push(new Task(desc));
  }

  removeTask(taskIndex) {
    this.tasks.splice(taskIndex, 1);
  }

  clearList() {
    this.tasks.length = 0;
  }
}

const emTodoList = new List('enmanuel');
console.log(emTodoList);
emTodoList.addTask('go to sleep');
emTodoList.addTask('eat');
emTodoList.addTask('repeat');
console.log(emTodoList.tasks);
emTodoList.removeTask(1);
emTodoList.tasks[0].markComplete();
console.log(emTodoList.tasks);
console.log(emTodoList.status);
