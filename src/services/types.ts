export interface IProduct {
  type: string;
  image: string;
  priceNew: string;
  priceOld: string;
  label: string;
  name: string;
  id: string;
}
export interface IProductsApi {
  products: IProduct[];
  status: RequestStatusType;
  result: {
    type: string;
    image: string;
    priceNew: string;
    priceOld: string;
    label: string;
    name: string;
    id: string;
  };
}

export type RequestStatusType = "idle" | "loading" | "success" | "error";
