import { useSetCartTotal } from "@/hooks/use-set-total-cart.hook";
import { useTranslation } from "react-i18next";
import { ProductCart } from "../ProductCart/ProductCart";
import {
  CartButtonSC,
  ContainerSC,
  PricesContainerSC,
  PricesSC,
  SaleContainerSC,
  SaleSC,
  TextSC,
  TotlaSC,
} from "./styles";
import { ICart } from "./types";

export const Cart = ({ cart }: ICart) => {
  const { t } = useTranslation();
  const { sale, total } = useSetCartTotal({ cart });

  return (
    <ContainerSC>
      {cart.map((product) => (
        <ProductCart item={product} key={product.id} />
      ))}
      <PricesContainerSC>
        <PricesSC>
          <SaleContainerSC>
            <TextSC>{t("card.sale")}</TextSC>
            <SaleSC>
              {sale} {t("card.rub")}
            </SaleSC>
          </SaleContainerSC>
          <SaleContainerSC>
            <TextSC>{t("card.topay")}</TextSC>
            <TotlaSC>
              {total} {t("card.rub")}
            </TotlaSC>
          </SaleContainerSC>
        </PricesSC>
      </PricesContainerSC>
      <CartButtonSC>{t("card.button")}</CartButtonSC>
    </ContainerSC>
  );
};
