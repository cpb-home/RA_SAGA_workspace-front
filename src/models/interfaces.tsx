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

export interface IServiceReducer {
  info: IServiceInfo,
  loading: boolean,
  error: string
}

export interface IServiceInfo {
  id: number,
  name: string,
  price: number,
  content: string,
}