import OrdersRepository from 'App/Repositories/OrdersRepository'

export default class OrdersService {
  public async updateOrCreate (payload: Object) {
    const repo = new OrdersRepository()
    return repo.updateOrCreate(payload)
  }
}
