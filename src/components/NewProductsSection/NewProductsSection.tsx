import React from "react";
import { SliderMedium } from "../SliderMeduim/SliderMedium";
import { ContainerSC, TitleSC, WrapperSC, SliderSC } from "./style";
import { useTranslation } from "react-i18next";
import Product1Image from "../../../public/assets/icons/product1.jpg";
import Product2Image from "../../../public/assets/icons/product1.jpg";
import Product3Image from "../../../public/assets/icons/product1.jpg";
import Product4Image from "../../../public/assets/icons/product1.jpg";
import Product5Image from "../../../public/assets/icons/product1.jpg";
import Product6Image from "../../../public/assets/icons/product1.jpg";

const data = [
  {
    name: "Slimming Gel Body",
    type: "Гель для тела для похудения",
    priceNew: "2 480 руб",
    priceOld: "3579 руб",
    image: Product1Image.src,
    label: "sell",
  },
  {
    name: "Slimming Gel Body",
    type: "Гель для тела для похудения",
    priceNew: "2 480 руб",
    priceOld: "3579 руб",
    image: Product1Image.src,
    label: "",
  },
  {
    name: "Slimming Gel Body",
    type: "Гель для тела для похудения",
    priceNew: "2 480 руб",
    priceOld: "3579 руб",
    image: Product1Image.src,
    label: "sell",
  },
  {
    name: "Slimming Gel Body",
    type: "Гель для тела для похудения",
    priceNew: "2 480 руб",
    priceOld: "3579 руб",
    image: Product1Image.src,
    label: "",
  },
  {
    name: "Slimming Gel Body",
    type: "Гель для тела для похудения",
    priceNew: "2 480 руб",
    priceOld: "3579 руб",
    image: Product1Image.src,
    label: "sell",
  },
  {
    name: "Slimming Gel Body",
    type: "Гель для тела для похудения",
    priceNew: "2 480 руб",
    priceOld: "3579 руб",
    image: Product1Image.src,
    label: "",
  },
  {
    name: "Slimming Gel Body",
    type: "Гель для тела для похудения",
    priceNew: "2 480 руб",
    priceOld: "3579 руб",
    image: Product1Image.src,
    label: "",
  },
  {
    name: "Slimming Gel Body",
    type: "Гель для тела для похудения",
    priceNew: "2 480 руб",
    priceOld: "3579 руб",
    image: Product1Image.src,
    label: "sell",
  },
];

export const NewProductsSection = () => {
  const { t } = useTranslation();

  return (
    <WrapperSC>
      <ContainerSC>
        <SliderSC>
          <TitleSC>{t("newproducts.title")}</TitleSC>
          <SliderMedium data={data} />
        </SliderSC>
      </ContainerSC>
    </WrapperSC>
  );
};
