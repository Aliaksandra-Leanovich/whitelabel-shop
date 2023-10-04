import React from "react";
import { Cart } from "../Cart/Cart";
import {
  ButtonSC,
  ContainerButtonSC,
  ContainerChildSC,
  ContainerSC,
  DescriptionSC,
  TitleSC,
  WrapperSC,
} from "./styles";
import CrossIcon from "public/assets/icons/cross-icon.svg";
import { IModalProps } from "./types";
import { useAppSelector } from "@/store/hooks/hooks";
import { getCart } from "@/store/selectors/CartSelectors";
import { useTranslation } from "react-i18next";

export const ModalCart = ({ handleClose, show }: IModalProps) => {
  const { cartItems } = useAppSelector(getCart);
  const { t } = useTranslation();

  return (
    <WrapperSC show={show}>
      <ContainerSC show={show}>
        <ContainerButtonSC>
          <ButtonSC type="button" onClick={handleClose}>
            <CrossIcon />
          </ButtonSC>
        </ContainerButtonSC>
        <ContainerChildSC>
          <TitleSC>{t("card")}</TitleSC>
          <DescriptionSC>{t("card.description")}</DescriptionSC>
          <Cart cart={cartItems} />
        </ContainerChildSC>
      </ContainerSC>
    </WrapperSC>
  );
};
