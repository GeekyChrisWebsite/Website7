export interface ListingData {
    id:number;
    category:string;
    city1:string;
    city_zip:string;
    created_at:number;
    description:string;
    email:string;
    expire_at:number;
    geo_direction:geo_direction;
    logo:string;
    name:string;
    phone_number:number;
    state:string;
    street:string;
    video:string;
    web_site:string;

}
interface geo_direction{
    lat:number;
    lng:number;

}
