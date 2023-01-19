import Order from 'App/Models/Order'
import OrderSeliazationHelper from 'App/Helpers/OrderSeliazationHelper'

export default class OrdersRepository {
  public async updateOrCreate (data: any) {
    const payload = OrderSeliazationHelper(data)
    return await Order.updateOrCreate({ payload__id: payload.payload__id }, payload)
  }
}
