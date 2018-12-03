import { v4 } from 'uuid';

class TaskService {
  addNewTask() {
    // data

    // TODO: запись в базу нового таска
    // return id таска
    return v4();
  }
}

export default new TaskService();
