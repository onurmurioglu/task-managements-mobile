import {Task} from '../types/Task';

export interface TaskService {
  getTasks(): Promise<Task[]>;
  addTask(task: Task): Promise<void>;
  updateTask(task: Task): Promise<void>;
  deleteTask(taskId: string): Promise<void>;
}

export class ApiTaskService implements TaskService {
  async getTasks() {
    return fetch('/tasks').then(response => response.json());
  }

  async addTask(task: Task) {}

  async updateTask(task: Task) {}

  async deleteTask(taskId: string) {}
}
