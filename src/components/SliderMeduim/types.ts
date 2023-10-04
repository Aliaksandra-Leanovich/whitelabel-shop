import { IProduct } from "@/services/types";

export interface ISlide {
  name: string;
  type: string;
  priceNew: string;
  priceOld: string;
  image: any;
  label: string;
}

export interface IData {
  data: any;
}
