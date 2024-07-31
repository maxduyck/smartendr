export {}

declare global {
  type Product = {
    quantity: number;
    name: string;
    category_name: string;
    is_ready: boolean;
    cartitem_id: number;
    options: Array<string | null>;
    remark: string;
    id: number;
  };

  type Order = {
    id: number;
    total: string;
    table_name: string;
    created_at: number;
    eta: number;
    status: number;
    customer__user__id: number;
    is_paid: boolean;
    note?: string;
    sent_to_pos: boolean;
    is_redirected: boolean;
    callback_received: boolean;
    payment_type: number;
    pos_id: number | null;
    room_number: number | null;
    order_of_day: number;
    service_name: number | string;
    error_status: object;
    voucher_discount: number;
    service_cost: number;
    transaction_id: string | number | null;
    extra_fields: object;
    is_status_loaded: boolean;
    batching_status: number;
    buzzer: string;
    customer__user__phone: string;
    customer__user__first_name: string;
    customer__user__last_name: string;
    customer__user__username: string;
    customer__user__zip: string;
    customer__user__city: string;
    customer__user__street: string;
    customer__user__house_nr: string;
    venue_id: number;
    venue__name: string;
    venue__pos: string;
    number_of_sms: number;
    products: Product[];
    is_expanded: boolean;
  };

  type FlatOrder = {
    id: number;
    name: string;
    quantity: number;
  };

  type Table = {
    name: string;
    products: FlatOrder[];
    sum: number;
  }
}
