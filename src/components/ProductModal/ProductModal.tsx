import { useAppDispatch } from "@/store/hooks/hooks";
import { setCart } from "@/store/slices/CartSlice";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import {
  ButtonSC,
  ContainerSC,
  ImageSC,
  InformationSC,
  NameSC,
  NewPriceSC,
  OldPriceSC,
  PriceContainerSC,
  StoreNameSC,
  TypeSC,
  WrapperSC,
} from "./style";
import { IProps } from "./types";

export const ProductModal = ({ item }: IProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const onClick = useCallback(() => {
    dispatch(setCart(item));
  }, [item]);

  return (
    <WrapperSC>
      <ContainerSC>
        <ImageSC name={item.image} />
        <InformationSC>
          <TypeSC>{item.type}</TypeSC>
          <NameSC>
            <StoreNameSC>{t("main.title")}</StoreNameSC>
            {item.name}
          </NameSC>
          <PriceContainerSC>
            <NewPriceSC>{item.priceNew}</NewPriceSC>
            <OldPriceSC>{item.priceOld}</OldPriceSC>
          </PriceContainerSC>
          <ButtonSC onClick={onClick}>{t("card.tocard")}</ButtonSC>
        </InformationSC>
      </ContainerSC>
    </WrapperSC>
  );
};
