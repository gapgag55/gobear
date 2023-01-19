import Task from 'App/Models/Task'
import TaskSeliazationHelper from 'App/Helpers/TaskSeliazationHelper'

export default class TasksRepository {
  public async updateOrCreate (data: any) {
    const payload = TaskSeliazationHelper(data)
    return await Task.updateOrCreate({ _id: payload._id }, payload)
  }
}
