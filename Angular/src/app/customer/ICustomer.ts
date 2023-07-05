export interface ICustomer {
  id: number | null;
  firstName: string;
  lastName: string;
  fullName: string;
  city:string;
  country:string;
  phone:string;
  ordersCount:number | null;
}
