export interface IProps {
  [key: string]: string;
}

export interface IUseCountSaleReturnValues {
  countSale: (oldPrice: string, newPrice: string) => number;
}

export interface IUseShowModalReturnValues {
  show: boolean;
  showModal: VoidFunction;
}

export interface IUseSetCartTotal {
  sale: number;
  total: number;
}
