export interface PostingData {
  author: string;
  bold: boolean;
  likes: number
  business: {
    city1: string;
    geo_direction: {
      lat: number;
      lng: number;
    };
    logo: string;
    name: string;
    phone_number: string;
    state: string;
    street: string;
  };
  business_id: number;
  content: string;
  created_at: string;
  dates: null;
  days_until_expiration: null;
  expire_at: null;
  expired: boolean;
  expired_soon: boolean;
  id: number;
  images: string[];
  integrations: any[];
  title: string;
  italic: boolean;
  updated_at: number;
  phone_number: string;
  postTime: Date;


}

