import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import OrdersService from 'App/Services/OrdersService'

export default class OrdersController {
  public async updateOrCreate (ctx: HttpContextContract) {
    const payload = ctx.request.all()

    const service = new OrdersService()
    return service.updateOrCreate(payload)
  }
}
