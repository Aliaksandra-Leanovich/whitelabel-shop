import { IProduct } from "@/services/types";

export interface ISlide {
  name: string;
  type: string;
  priceNew: string;
  priceOld: string;
  image: string;
  label: string;
}

export interface IPropsSlide {
  item: IProduct;
}

export interface IProps {
  name: string;
}
