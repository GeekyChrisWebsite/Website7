export interface BuysellDetalis {
  author: string;
  bold: boolean;
  business: business;
  business_id: number;
  buySellTime: string;
  content: string;
  created_at: string;
  dates: null;
  days_until_expiration: null;
  expire_at: null;
  expired: boolean;
  expired_soon: boolean;
  hide: boolean;
  id: number;
  images: any;
  integrations: any[];
  italic: boolean;
  likes: number;
  price: number;
  recurring_every: null;
  recurring_for: null;
  recurring_on: null;
  sold: boolean;
  status: string;
  time: null;
  title: string;
  type: string;
  u_end_date: null;
  u_scheduled_date: null;
  u_selected_days: null;
  u_start_date: null;
  updated_at: string;
  video: string;
  vip: boolean;
  websites: null;
  state: string;
  street: string;
  phone_number: string;
  booking_url: string;
  geo_direction: {
    lat: number;
    lng: number;
  };
  logo: string;
  name: string;
  buysell_contact_email: string;
  buysell_contact_phone: string;
  buysell_asking_price: number;
  buysell_annual_revenue: number;
  buysell_established_year: number;
  buysell_cash_flow: number;
  buysell_inventory_value: number;
  buysell_building_sqft: string;

  buysell_employee_count: number;
  buysell_reason_for_sale: string;
  buysell_assets_included: string;
}
export interface business {
  geo_direction: {
    lat: number;
    lng: number;
  };
  logo: string;
  name: string;
  booking_url: string;
  title_for_map: string;
  city1: string;
  state: string;
  phone_number: string;
  city_zip: string;
}
