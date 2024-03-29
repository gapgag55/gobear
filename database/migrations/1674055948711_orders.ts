import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'orders'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.text('event')
      table.text('payload__id')
      table.text('payload_tenant_id')
      table.text('payload_merchant_id')
      table.text('payload_user_id')
      table.text('payload_user_tenant_id')
      table.text('payload_user_first_name')
      table.text('payload_user_last_name')
      table.text('payload_user_mobile')
      table.text('payload_user_email')
      table.text('payload_user_email_verified_at')
      table.text('payload_user_country_code')
      table.text('payload_user_is_new_user')
      table.text('payload_user_status')
      table.text('payload_user_created_at')
      table.text('payload_user_updated_at')
      table.text('payload_user_deleted_at')
      table.text('payload_user_tenants_limit')
      table.text('payload_user_full_name')
      table.text('payload_user_status_name')
      table.text('payload_user_roles')
      table.text('payload_user_permissions')
      table.text('payload_user_admin_tenants')
      table.text('payload_user_merchant_users')
      table.text('payload_user_social_accounts')
      table.text('payload_user_redirect_panel')
      table.text('payload_cart__id')
      table.text('payload_cart_tenant_id')
      table.text('payload_cart_cart_items')
      table.text('payload_cart_total_items')
      table.text('payload_cart_total_amount')
      table.text('payload_cart_is_updated')
      table.text('payload_cart_user_id')
      table.text('payload_cart_updated_at')
      table.text('payload_cart_created_at')
      table.text('payload_cart_raw_calculation')
      table.text('payload_cart_sub_total_amount')
      table.text('payload_cart_message')
      table.text('payload_cart_custom_charges')
      table.text('payload_cart_delivery_fee')
      table.text('payload_cart_delivery_tax')
      table.text('payload_cart_is_delivery_tax_applied')
      table.text('payload_cart_tax')
      table.text('payload_cart_cart_id')
      table.text('payload_cart_total_amount_formatted')
      table.text('payload_cart_sub_total_amount_formatted')
      table.text('payload_cart_discount_amount_formatted')
      table.text('payload_cart_tax_formatted')
      table.text('payload_cart_delivery_fee_formatted')
      table.text('payload_cart_delivery_tax_formatted')
      table.text('payload_cart_currency_setting')
      table.text('payload_merchant__id')
      table.text('payload_merchant_tenant_id')
      table.text('payload_merchant_phone')
      table.text('payload_merchant_language_translation')
      table.text('payload_merchant_email')
      table.text('payload_merchant_address')
      table.text('payload_merchant_delivery_by')
      table.text('payload_merchant_accepted_order_types')
      table.text('payload_merchant_merchant_package_id')
      table.text('payload_merchant_commission')
      table.text('payload_merchant_group_ids')
      table.text('payload_merchant_merchant_category_ids')
      table.text('payload_merchant_status')
      table.text('payload_merchant_delivery_amount')
      table.text('payload_merchant_min_order_amount')
      table.text('payload_merchant_average_rating')
      table.text('payload_merchant_is_accepting_orders')
      table.text('payload_merchant_is_open')
      table.text('payload_merchant_merchant_address_location')
      table.text('payload_merchant_merchant_id')
      table.text('payload_merchant_slug')
      table.text('payload_merchant_images')
      table.text('payload_merchant_delivery_location_type')
      table.text('payload_merchant_delivery_radius')
      table.text('payload_merchant_delivery_radius_meters')
      table.text('payload_merchant_delivery_radius_unit')
      table.text('payload_merchant_merchant_location')
      table.text('payload_merchant_comment')
      table.text('payload_merchant_merchant_categories')
      table.text('payload_merchant_name')
      table.text('payload_merchant_language_translate_columns')
      table.text('payload_payment_mode_id')
      table.text('payload_payment_mode_tenant_id')
      table.text('payload_payment_mode_payment_mode_id')
      table.text('payload_payment_mode_language_translation')
      table.text('payload_payment_mode_settings_value')
      table.text('payload_payment_mode_active')
      table.text('payload_payment_mode_alias')
      table.text('payload_payment_mode_payment_mode')
      table.text('payload_order_type')
      table.text('payload_review')
      table.text('payload_order_status')
      table.text('payload_order_amount')
      table.text('payload_order_amount_formatted')
      table.text('payload_currency_code')
      table.text('payload_currency_symbol_direction')
      table.text('payload_currency_symbol_type')
      table.text('payload_currency_symbol')
      table.text('payload_currency_symbol_native')
      table.text('payload_delivery_timestamp_human_date')
      table.text('payload_delivery_timestamp_human_time')
      table.text('payload_delivery_timestamp_human_local_date')
      table.text('payload_delivery_timestamp_human_local_time')
      table.text('payload_delivery_timestamp_unix')
      table.text('payload_is_scheduled')
      table.text('payload_is_user_first_order')
      table.text('payload_push_auth_token')
      table.text('payload_meta_custom_form')
      table.text('payload_ip')
      table.text('payload_device')
      table.text('payload_delivery_address__id')
      table.text('payload_delivery_address_tenant_id')
      table.text('payload_delivery_address_user_id')
      table.text('payload_delivery_address_address_type')
      table.text('payload_delivery_address_location_lat_lon')
      table.text('payload_delivery_address_address')
      table.text('payload_delivery_address_building')
      table.text('payload_delivery_address_area')
      table.text('payload_delivery_address_landmark')
      table.text('payload_delivery_address_city')
      table.text('payload_delivery_address_region')
      table.text('payload_delivery_address_zip_code')
      table.text('payload_delivery_address_country')
      table.text('payload_delivery_address_country_code')
      table.text('payload_delivery_address_updated_at')
      table.text('payload_delivery_address_created_at')
      table.text('payload_order_id')
      table.text('payload_created_timestamp_unix')
      table.text('payload_updated_at')
      table.text('payload_created_at')
      table.text('payload_order_status_history')
      table.text('payload_order_uuid')
      table.text('payload_local_created_at')
      table.text('payload_order_type_label')
      table.text('payload_allowed_update_order_status_merchant')
      table.text('payload_mq_queue')
      table.text('payload_binding_key')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
