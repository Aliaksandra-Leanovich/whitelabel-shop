import { ICart } from '@/components/Cart/types';
import { useEffect, useState } from 'react';
import { IUseSetCartTotal } from './types';
import { useCountSale } from './use-count-sale.hook';

export const useSetCartTotal = ({ cart }: ICart): IUseSetCartTotal => {
  const [total, setTotal] = useState(0);
  const [sale, setSale] = useState(0);
  const { countSale } = useCountSale();

  useEffect(() => {
    cart.forEach((product) => {
      setTotal(total + Number(product.priceNew.replace(/\s/g, '').slice(0, 4)));
      setSale(sale + countSale(product.priceOld, product.priceNew));
    });
  }, [cart]);

  return { sale, total };
};
