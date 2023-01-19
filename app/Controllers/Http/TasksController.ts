import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TasksService from 'App/Services/TasksService'

export default class TasksController {
  public async updateOrCreate (ctx: HttpContextContract) {
    const payload = ctx.request.all()

    const service = new TasksService()
    return service.updateOrCreate(payload)
  }
}
