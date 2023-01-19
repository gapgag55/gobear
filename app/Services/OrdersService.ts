// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import OrdersRepository from 'App/Repositories/OrderRepository'

export default class OrdersService {
  public async updateOrCreate (payload: Object) {
    const repo = new OrdersRepository()
    return repo.updateOrCreate(payload)
  }
}
