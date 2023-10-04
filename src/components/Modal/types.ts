import { IProduct } from '@/services/types';

export interface IStylesProps {
  show?: boolean;
}

export interface IModalProps {
  handleClose: VoidFunction;
  show: boolean;
  children: IProduct;
}
