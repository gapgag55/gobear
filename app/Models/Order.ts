import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Order extends BaseModel {
  @column({ columnName: 'event' })
  public event: String
  @column({ isPrimary: true, columnName: 'payload__id' })
  public payload__id: String
  @column({ columnName: 'payload_tenant_id' })
  public payload_tenant_id: String
  @column({ columnName: 'payload_merchant_id' })
  public payload_merchant_id: String
  @column({ columnName: 'payload_user_id' })
  public payload_user_id: String
  @column({ columnName: 'payload_user_tenant_id' })
  public payload_user_tenant_id: String
  @column({ columnName: 'payload_user_first_name' })
  public payload_user_first_name: String
  @column({ columnName: 'payload_user_last_name' })
  public payload_user_last_name: String
  @column({ columnName: 'payload_user_mobile' })
  public payload_user_mobile: String
  @column({ columnName: 'payload_user_email' })
  public payload_user_email: String
  @column({ columnName: 'payload_user_email_verified_at' })
  public payload_user_email_verified_at: String
  @column({ columnName: 'payload_user_country_code' })
  public payload_user_country_code: String
  @column({ columnName: 'payload_user_is_new_user' })
  public payload_user_is_new_user: String
  @column({ columnName: 'payload_user_status' })
  public payload_user_status: String
  @column({ columnName: 'payload_user_created_at' })
  public payload_user_created_at: String
  @column({ columnName: 'payload_user_updated_at' })
  public payload_user_updated_at: String
  @column({ columnName: 'payload_user_deleted_at' })
  public payload_user_deleted_at: String
  @column({ columnName: 'payload_user_tenants_limit' })
  public payload_user_tenants_limit: String
  @column({ columnName: 'payload_user_full_name' })
  public payload_user_full_name: String
  @column({ columnName: 'payload_user_status_name' })
  public payload_user_status_name: String
  @column({ columnName: 'payload_user_roles' })
  public payload_user_roles: String
  @column({ columnName: 'payload_user_permissions' })
  public payload_user_permissions: String
  @column({ columnName: 'payload_user_admin_tenants' })
  public payload_user_admin_tenants: String
  @column({ columnName: 'payload_user_merchant_users' })
  public payload_user_merchant_users: String
  @column({ columnName: 'payload_user_social_accounts' })
  public payload_user_social_accounts: String
  @column({ columnName: 'payload_user_redirect_panel' })
  public payload_user_redirect_panel: String
  @column({ columnName: 'payload_cart__id' })
  public payload_cart__id: String
  @column({ columnName: 'payload_cart_tenant_id' })
  public payload_cart_tenant_id: String
  @column({ columnName: 'payload_cart_cart_items' })
  public payload_cart_cart_items: String
  @column({ columnName: 'payload_cart_total_items' })
  public payload_cart_total_items: String
  @column({ columnName: 'payload_cart_total_amount' })
  public payload_cart_total_amount: String
  @column({ columnName: 'payload_cart_is_updated' })
  public payload_cart_is_updated: String
  @column({ columnName: 'payload_cart_user_id' })
  public payload_cart_user_id: String
  @column({ columnName: 'payload_cart_updated_at' })
  public payload_cart_updated_at: String
  @column({ columnName: 'payload_cart_created_at' })
  public payload_cart_created_at: String
  @column({ columnName: 'payload_cart_raw_calculation' })
  public payload_cart_raw_calculation: String
  @column({ columnName: 'payload_cart_sub_total_amount' })
  public payload_cart_sub_total_amount: String
  @column({ columnName: 'payload_cart_message' })
  public payload_cart_message: String
  @column({ columnName: 'payload_cart_custom_charges' })
  public payload_cart_custom_charges: String
  @column({ columnName: 'payload_cart_delivery_fee' })
  public payload_cart_delivery_fee: String
  @column({ columnName: 'payload_cart_delivery_tax' })
  public payload_cart_delivery_tax: String
  @column({ columnName: 'payload_cart_is_delivery_tax_applied' })
  public payload_cart_is_delivery_tax_applied: String
  @column({ columnName: 'payload_cart_tax' })
  public payload_cart_tax: String
  @column({ columnName: 'payload_cart_cart_id' })
  public payload_cart_cart_id: String
  @column({ columnName: 'payload_cart_total_amount_formatted' })
  public payload_cart_total_amount_formatted: String
  @column({ columnName: 'payload_cart_sub_total_amount_formatted' })
  public payload_cart_sub_total_amount_formatted: String
  @column({ columnName: 'payload_cart_discount_amount_formatted' })
  public payload_cart_discount_amount_formatted: String
  @column({ columnName: 'payload_cart_tax_formatted' })
  public payload_cart_tax_formatted: String
  @column({ columnName: 'payload_cart_delivery_fee_formatted' })
  public payload_cart_delivery_fee_formatted: String
  @column({ columnName: 'payload_cart_delivery_tax_formatted' })
  public payload_cart_delivery_tax_formatted: String
  @column({ columnName: 'payload_cart_currency_setting' })
  public payload_cart_currency_setting: String
  @column({ columnName: 'payload_merchant__id' })
  public payload_merchant__id: String
  @column({ columnName: 'payload_merchant_tenant_id' })
  public payload_merchant_tenant_id: String
  @column({ columnName: 'payload_merchant_phone' })
  public payload_merchant_phone: String
  @column({ columnName: 'payload_merchant_language_translation' })
  public payload_merchant_language_translation: String
  @column({ columnName: 'payload_merchant_email' })
  public payload_merchant_email: String
  @column({ columnName: 'payload_merchant_address' })
  public payload_merchant_address: String
  @column({ columnName: 'payload_merchant_delivery_by' })
  public payload_merchant_delivery_by: String
  @column({ columnName: 'payload_merchant_accepted_order_types' })
  public payload_merchant_accepted_order_types: String
  @column({ columnName: 'payload_merchant_merchant_package_id' })
  public payload_merchant_merchant_package_id: String
  @column({ columnName: 'payload_merchant_commission' })
  public payload_merchant_commission: String
  @column({ columnName: 'payload_merchant_group_ids' })
  public payload_merchant_group_ids: String
  @column({ columnName: 'payload_merchant_merchant_category_ids' })
  public payload_merchant_merchant_category_ids: String
  @column({ columnName: 'payload_merchant_status' })
  public payload_merchant_status: String
  @column({ columnName: 'payload_merchant_delivery_amount' })
  public payload_merchant_delivery_amount: String
  @column({ columnName: 'payload_merchant_min_order_amount' })
  public payload_merchant_min_order_amount: String
  @column({ columnName: 'payload_merchant_average_rating' })
  public payload_merchant_average_rating: String
  @column({ columnName: 'payload_merchant_is_accepting_orders' })
  public payload_merchant_is_accepting_orders: String
  @column({ columnName: 'payload_merchant_is_open' })
  public payload_merchant_is_open: String
  @column({ columnName: 'payload_merchant_merchant_address_location' })
  public payload_merchant_merchant_address_location: String
  @column({ columnName: 'payload_merchant_merchant_id' })
  public payload_merchant_merchant_id: String
  @column({ columnName: 'payload_merchant_slug' })
  public payload_merchant_slug: String
  @column({ columnName: 'payload_merchant_images' })
  public payload_merchant_images: String
  @column({ columnName: 'payload_merchant_delivery_location_type' })
  public payload_merchant_delivery_location_type: String
  @column({ columnName: 'payload_merchant_delivery_radius' })
  public payload_merchant_delivery_radius: String
  @column({ columnName: 'payload_merchant_delivery_radius_meters' })
  public payload_merchant_delivery_radius_meters: String
  @column({ columnName: 'payload_merchant_delivery_radius_unit' })
  public payload_merchant_delivery_radius_unit: String
  @column({ columnName: 'payload_merchant_merchant_location' })
  public payload_merchant_merchant_location: String
  @column({ columnName: 'payload_merchant_comment' })
  public payload_merchant_comment: String
  @column({ columnName: 'payload_merchant_merchant_categories' })
  public payload_merchant_merchant_categories: String
  @column({ columnName: 'payload_merchant_name' })
  public payload_merchant_name: String
  @column({ columnName: 'payload_merchant_language_translate_columns' })
  public payload_merchant_language_translate_columns: String
  @column({ columnName: 'payload_payment_mode_id' })
  public payload_payment_mode_id: String
  @column({ columnName: 'payload_payment_mode_tenant_id' })
  public payload_payment_mode_tenant_id: String
  @column({ columnName: 'payload_payment_mode_payment_mode_id' })
  public payload_payment_mode_payment_mode_id: String
  @column({ columnName: 'payload_payment_mode_language_translation' })
  public payload_payment_mode_language_translation: String
  @column({ columnName: 'payload_payment_mode_settings_value' })
  public payload_payment_mode_settings_value: String
  @column({ columnName: 'payload_payment_mode_active' })
  public payload_payment_mode_active: String
  @column({ columnName: 'payload_payment_mode_alias' })
  public payload_payment_mode_alias: String
  @column({ columnName: 'payload_payment_mode_payment_mode' })
  public payload_payment_mode_payment_mode: String
  @column({ columnName: 'payload_order_type' })
  public payload_order_type: String
  @column({ columnName: 'payload_review' })
  public payload_review: String
  @column({ columnName: 'payload_order_status' })
  public payload_order_status: String
  @column({ columnName: 'payload_order_amount' })
  public payload_order_amount: String
  @column({ columnName: 'payload_order_amount_formatted' })
  public payload_order_amount_formatted: String
  @column({ columnName: 'payload_currency_code' })
  public payload_currency_code: String
  @column({ columnName: 'payload_currency_symbol_direction' })
  public payload_currency_symbol_direction: String
  @column({ columnName: 'payload_currency_symbol_type' })
  public payload_currency_symbol_type: String
  @column({ columnName: 'payload_currency_symbol' })
  public payload_currency_symbol: String
  @column({ columnName: 'payload_currency_symbol_native' })
  public payload_currency_symbol_native: String
  @column({ columnName: 'payload_delivery_timestamp_human_date' })
  public payload_delivery_timestamp_human_date: String
  @column({ columnName: 'payload_delivery_timestamp_human_time' })
  public payload_delivery_timestamp_human_time: String
  @column({ columnName: 'payload_delivery_timestamp_human_local_date' })
  public payload_delivery_timestamp_human_local_date: String
  @column({ columnName: 'payload_delivery_timestamp_human_local_time' })
  public payload_delivery_timestamp_human_local_time: String
  @column({ columnName: 'payload_delivery_timestamp_unix' })
  public payload_delivery_timestamp_unix: String
  @column({ columnName: 'payload_is_scheduled' })
  public payload_is_scheduled: String
  @column({ columnName: 'payload_is_user_first_order' })
  public payload_is_user_first_order: String
  @column({ columnName: 'payload_push_auth_token' })
  public payload_push_auth_token: String
  @column({ columnName: 'payload_meta_custom_form' })
  public payload_meta_custom_form: String
  @column({ columnName: 'payload_ip' })
  public payload_ip: String
  @column({ columnName: 'payload_device' })
  public payload_device: String
  @column({ columnName: 'payload_delivery_address__id' })
  public payload_delivery_address__id: String
  @column({ columnName: 'payload_delivery_address_tenant_id' })
  public payload_delivery_address_tenant_id: String
  @column({ columnName: 'payload_delivery_address_user_id' })
  public payload_delivery_address_user_id: String
  @column({ columnName: 'payload_delivery_address_address_type' })
  public payload_delivery_address_address_type: String
  @column({ columnName: 'payload_delivery_address_location_lat_lon' })
  public payload_delivery_address_location_lat_lon: String
  @column({ columnName: 'payload_delivery_address_address' })
  public payload_delivery_address_address: String
  @column({ columnName: 'payload_delivery_address_building' })
  public payload_delivery_address_building: String
  @column({ columnName: 'payload_delivery_address_area' })
  public payload_delivery_address_area: String
  @column({ columnName: 'payload_delivery_address_landmark' })
  public payload_delivery_address_landmark: String
  @column({ columnName: 'payload_delivery_address_city' })
  public payload_delivery_address_city: String
  @column({ columnName: 'payload_delivery_address_region' })
  public payload_delivery_address_region: String
  @column({ columnName: 'payload_delivery_address_zip_code' })
  public payload_delivery_address_zip_code: String
  @column({ columnName: 'payload_delivery_address_country' })
  public payload_delivery_address_country: String
  @column({ columnName: 'payload_delivery_address_country_code' })
  public payload_delivery_address_country_code: String
  @column({ columnName: 'payload_delivery_address_updated_at' })
  public payload_delivery_address_updated_at: String
  @column({ columnName: 'payload_delivery_address_created_at' })
  public payload_delivery_address_created_at: String
  @column({ columnName: 'payload_order_id' })
  public payload_order_id: String
  @column({ columnName: 'payload_created_timestamp_unix' })
  public payload_created_timestamp_unix: String
  @column({ columnName: 'payload_updated_at' })
  public payload_updated_at: String
  @column({ columnName: 'payload_created_at' })
  public payload_created_at: String
  @column({ columnName: 'payload_order_status_history' })
  public payload_order_status_history: String
  @column({ columnName: 'payload_order_uuid' })
  public payload_order_uuid: String
  @column({ columnName: 'payload_local_created_at' })
  public payload_local_created_at: String
  @column({ columnName: 'payload_order_type_label' })
  public payload_order_type_label: String
  @column({ columnName: 'payload_allowed_update_order_status_merchant' })
  public payload_allowed_update_order_status_merchant: String
  @column({ columnName: 'payload_mq_queue' })
  public payload_mq_queue: String
  @column({ columnName: 'payload_binding_key' })
  public payload_binding_key: String
}
