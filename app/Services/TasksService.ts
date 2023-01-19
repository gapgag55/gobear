import TasksRepository from 'App/Repositories/TasksRepository'

export default class TasksService {
  public async updateOrCreate (payload: Object) {
    const repo = new TasksRepository()
    return repo.updateOrCreate(payload)
  }
}
