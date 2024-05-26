export interface IServicesListReducer {
  loading: boolean;
  error: string;
  services: IServicesListItem[];
}

export interface IServicesListItem {
  id: number,
  name: string,
  price: number
}