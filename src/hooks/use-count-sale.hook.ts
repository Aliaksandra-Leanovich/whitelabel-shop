import { IUseCountSaleReturnValues } from "./types";

export const useCountSale = (): IUseCountSaleReturnValues => {
  const countSale = (oldPrice: string, newPrice: string) => {
    return (
      Number(oldPrice.replace(/\s/g, "").slice(0, 4)) -
      Number(newPrice.replace(/\s/g, "").slice(0, 4))
    );
  };
  return { countSale };
};
