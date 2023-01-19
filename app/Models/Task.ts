import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Task extends BaseModel {
  @column({ columnName: '_id', isPrimary: true })
  public _id: String
  @column({ columnName: 'status' })
  public status: String
  @column({ columnName: 'team_id' })
  public team_id: String
  @column({ columnName: 'order_id' })
  public order_id: String
  @column({ columnName: 'merchant_id' })
  public merchant_id: String
  @column({ columnName: 'items' })
  public items: String
  @column({ columnName: 'pickup_pickup_timestamp' })
  public pickup_pickup_timestamp: String
  @column({ columnName: 'pickup_name' })
  public pickup_name: String
  @column({ columnName: 'pickup_contact' })
  public pickup_contact: String
  @column({ columnName: 'pickup_location_type' })
  public pickup_location_type: String
  @column({ columnName: 'pickup_location_coordinates' })
  public pickup_location_coordinates: String
  @column({ columnName: 'pickup_address_full_address' })
  public pickup_address_full_address: String
  @column({ columnName: 'pickup_address_building' })
  public pickup_address_building: String
  @column({ columnName: 'pickup_address_area' })
  public pickup_address_area: String
  @column({ columnName: 'pickup_address_landmark' })
  public pickup_address_landmark: String
  @column({ columnName: 'pickup_address_city' })
  public pickup_address_city: String
  @column({ columnName: 'pickup_address_country_code' })
  public pickup_address_country_code: String
  @column({ columnName: 'pickup_payment_amount' })
  public pickup_payment_amount: String
  @column({ columnName: 'pickup_payment_currency_code' })
  public pickup_payment_currency_code: String
  @column({ columnName: 'pickup_payment_amount_formatted' })
  public pickup_payment_amount_formatted: String
  @column({ columnName: 'pickup_tracking_url' })
  public pickup_tracking_url: String
  @column({ columnName: 'drop_drop_timestamp' })
  public drop_drop_timestamp: String
  @column({ columnName: 'drop_name' })
  public drop_name: String
  @column({ columnName: 'drop_contact' })
  public drop_contact: String
  @column({ columnName: 'drop_location_type' })
  public drop_location_type: String
  @column({ columnName: 'drop_location_coordinates' })
  public drop_location_coordinates: String
  @column({ columnName: 'drop_address_full_address' })
  public drop_address_full_address: String
  @column({ columnName: 'drop_address_building' })
  public drop_address_building: String
  @column({ columnName: 'drop_address_area' })
  public drop_address_area: String
  @column({ columnName: 'drop_address_landmark' })
  public drop_address_landmark: String
  @column({ columnName: 'drop_address_city' })
  public drop_address_city: String
  @column({ columnName: 'drop_address_country_code' })
  public drop_address_country_code: String
  @column({ columnName: 'drop_payment_amount' })
  public drop_payment_amount: String
  @column({ columnName: 'drop_payment_currency_code' })
  public drop_payment_currency_code: String
  @column({ columnName: 'drop_payment_amount_formatted' })
  public drop_payment_amount_formatted: String
  @column({ columnName: 'drop_tracking_url' })
  public drop_tracking_url: String
  @column({ columnName: 'task_comment' })
  public task_comment: String
  @column({ columnName: 'task_lock' })
  public task_lock: String
  @column({ columnName: 'task_lock_job_dispatched' })
  public task_lock_job_dispatched: String
  @column({ columnName: 'auto_assigned' })
  public auto_assigned: String
  @column({ columnName: 'auto_assigning' })
  public auto_assigning: String
  @column({ columnName: 'distance_calculation_method' })
  public distance_calculation_method: String
  @column({ columnName: 'distance_calculation_start_point' })
  public distance_calculation_start_point: String
  @column({ columnName: 'time_calculation_start_point' })
  public time_calculation_start_point: String
  @column({ columnName: 'distance_unit' })
  public distance_unit: String
  @column({ columnName: 'is_task_batching_enabled' })
  public is_task_batching_enabled: String
  @column({ columnName: 'is_multiple_merchant_task_batching_enabled' })
  public is_multiple_merchant_task_batching_enabled: String
  @column({ columnName: 'task_auto_assign_retries_left' })
  public task_auto_assign_retries_left: String
  @column({ columnName: 'updated_at' })
  public updated_at: String
  @column({ columnName: 'created_at' })
  public created_at: String
  @column({ columnName: 'status_history' })
  public status_history: String
  @column({ columnName: 'task_tracking_url' })
  public task_tracking_url: String
  @column({ columnName: 'auto_assign_job_failed' })
  public auto_assign_job_failed: String
  @column({ columnName: 'agent_id' })
  public agent_id: String
  @column({ columnName: 'force_assigned' })
  public force_assigned: String
  @column({ columnName: 'distance' })
  public distance: String
  @column({ columnName: 'task_id' })
  public task_id: String
  @column({ columnName: 'distance_symbol' })
  public distance_symbol: String
}
