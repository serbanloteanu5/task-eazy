/*! sophisticated_code.js */

// This code demonstrates a complex implementation of a task management system
// It includes multiple classes and extensive documentation for each function and property

class Task {
  constructor(id, title, description, dueDate, priority, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }

  complete() {
    this.completed = true;
    console.log(`Task '${this.title}' has been marked as completed.`);
  }

  updateTitle(newTitle) {
    this.title = newTitle;
    console.log(`Task title updated to '${this.title}'.`);
  }

  updateDescription(newDescription) {
    this.description = newDescription;
    console.log(`Task description updated to '${this.description}'.`);
  }

  updateDueDate(newDueDate) {
    this.dueDate = newDueDate;
    console.log(`Task due date updated to '${this.dueDate}'.`);
  }

  updatePriority(newPriority) {
    this.priority = newPriority;
    console.log(`Task priority updated to '${this.priority}'.`);
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
    console.log(`Task '${task.title}' added successfully.`);
  }

  removeTask(taskId) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
      const removedTask = this.tasks.splice(taskIndex, 1)[0];
      console.log(`Task '${removedTask.title}' removed successfully.`);
    } else {
      console.log(`Task with ID '${taskId}' not found.`);
    }
  }

  getTaskById(taskId) {
    return this.tasks.find((task) => task.id === taskId);
  }

  getTasksByPriority(priority) {
    return this.tasks.filter((task) => task.priority === priority);
  }

  getTasksByStatus(completed) {
    return this.tasks.filter((task) => task.completed === completed);
  }
}

// Usage Example:

const task1 = new Task(1, 'Task 1', 'Description 1', new Date('2022-12-31'), 'High', false);
const task2 = new Task(2, 'Task 2', 'Description 2', new Date('2022-11-30'), 'Medium', false);
const task3 = new Task(3, 'Task 3', 'Description 3', new Date('2022-10-31'), 'Low', true);

const taskManager = new TaskManager();
taskManager.addTask(task1);
taskManager.addTask(task2);
taskManager.addTask(task3);

console.log(taskManager.getTaskById(2));
console.log(taskManager.getTasksByPriority('High'));
console.log(taskManager.getTasksByStatus(false));

task1.updateTitle('Updated Task 1');
task2.updateDueDate(new Date('2022-12-15'));
task3.complete();

taskManager.removeTask(2);