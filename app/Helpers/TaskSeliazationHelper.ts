export default (data: any) => {
  const payload = {
    _id: data._id,
    status: data.status,
    team_id: data.team_id,
    order_id: data.order_id,
    merchant_id: data.merchant_id,
    items: data.items,
    pickup_pickup_timestamp: data.pickup.pickup_timestamp,
    pickup_name: data.pickup.name,
    pickup_contact: data.pickup.contact,
    pickup_location_type: data.pickup.location.type,
    pickup_location_coordinates: data.pickup.location.coordinates,
    pickup_address_full_address: data.pickup.address.full_address,
    pickup_address_building: data.pickup.address.building,
    pickup_address_area: data.pickup.address.area,
    pickup_address_landmark: data.pickup.address.landmark,
    pickup_address_city: data.pickup.address.city,
    pickup_address_country_code: data.pickup.address.country_code,
    pickup_payment_amount: data.pickup.payment.amount,
    pickup_payment_currency_code: data.pickup.payment.currency_code,
    pickup_payment_amount_formatted: data.pickup.payment.amount_formatted,
    pickup_tracking_url: data.pickup.tracking_url,
    drop_drop_timestamp: data.drop.drop_timestamp,
    drop_name: data.drop.name,
    drop_contact: data.drop.contact,
    drop_location_type: data.drop.location.type,
    drop_location_coordinates: data.drop.location.coordinates,
    drop_address_full_address: data.drop.address.full_address,
    drop_address_building: data.drop.address.building,
    drop_address_area: data.drop.address.area,
    drop_address_landmark: data.drop.address.landmark,
    drop_address_city: data.drop.address.city,
    drop_address_country_code: data.drop.address.country_code,
    drop_payment_amount: data.drop.payment.amount,
    drop_payment_currency_code: data.drop.payment.currency_code,
    drop_payment_amount_formatted: data.drop.payment.amount_formatted,
    drop_tracking_url: data.drop.tracking_url,
    task_comment: data.task_comment,
    task_lock: data.task_lock,
    task_lock_job_dispatched: data.task_lock_job_dispatched,
    auto_assigned: data.auto_assigned,
    auto_assigning: data.auto_assigning,
    distance_calculation_method: data.distance_calculation_method,
    distance_calculation_start_point: data.distance_calculation_start_point,
    time_calculation_start_point: data.time_calculation_start_point,
    distance_unit: data.distance_unit,
    is_task_batching_enabled: data.is_task_batching_enabled,
    is_multiple_merchant_task_batching_enabled: data.is_multiple_merchant_task_batching_enabled,
    task_auto_assign_retries_left: data.task_auto_assign_retries_left,
    updated_at: data.updated_at,
    created_at: data.created_at,
    status_history: data.status_history,
    task_tracking_url: data.task_tracking_url,
    auto_assign_job_failed: data.auto_assign_job_failed,
    agent_id: data.agent_id,
    force_assigned: data.force_assigned,
    distance: data.distance,
    task_id: data.task_id,
    distance_symbol: data.distance_symbol,
  }

  for (const key in payload) {
    const value = payload[key]

    if (typeof value === 'string' || value instanceof String) {
      continue
    }

    payload[key] = JSON.stringify(value)
  }

  return payload
}
