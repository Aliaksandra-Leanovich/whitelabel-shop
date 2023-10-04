import { useCountSale } from '@/hooks/use-count-sale.hook';
import { IProduct } from '@/services/types';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ContainerSC,
  ImageSC,
  InformationSC,
  NameSC,
  NewPriceSC,
  OldPriceSC,
  PriceContainerSC,
  PricesSC,
  SaleSC,
  TypeSC,
  WrapperSC
} from './styles';
import { IPropsCart } from './types';

export const ProductCart = ({ item }: IPropsCart) => {
  const { countSale } = useCountSale();
  const { t } = useTranslation();
  const sale = countSale(item.priceOld, item.priceNew);

  return (
    <WrapperSC>
      <ContainerSC>
        <ImageSC name={item.image} />
        <InformationSC>
          <TypeSC>{item.type}</TypeSC>
          <NameSC>{item.name}</NameSC>
        </InformationSC>
        <PriceContainerSC>
          <SaleSC>
            {t('card.sale')} {sale} {t('card.rub')}
          </SaleSC>
          <PricesSC>
            <OldPriceSC>{item.priceOld}</OldPriceSC>
            <NewPriceSC>{item.priceNew}</NewPriceSC>
          </PricesSC>
        </PriceContainerSC>
      </ContainerSC>
    </WrapperSC>
  );
};
