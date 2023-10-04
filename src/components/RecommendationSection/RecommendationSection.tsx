import React from "react";
import { SliderMedium } from "../SliderMeduim/SliderMedium";
import { ContainerSC, TitleSC, WrapperSC, SliderSC } from "./style";
import { useTranslation } from "react-i18next";
// import Product1Image from "/public/icons/product1.svg";
// import Product2Image from "/public/icons/product2.svg";
// import Product3Image from "/public/icons/product3.svg";
// import Product4Image from "/public/icons/product4.svg";
// import Product5Image from "/public/icons/product5.svg";
// import Product6Image from "/public/icons/product6.svg";
import Product6Image from "../../../public/assets/icons/product1.jpg";

const data = [
  {
    name: "Slimming Gel Body",
    type: "Гель для тела для похудения",
    priceNew: "2 480 руб",
    priceOld: "3579 руб",
    image: Product6Image.src,
    label: "sell",
  },
  {
    name: "Slimming Gel Body",
    type: "Гель для тела для похудения",
    priceNew: "2 480 руб",
    priceOld: "3579 руб",
    image: Product6Image.src,
    label: "",
  },
  {
    name: "Slimming Gel Body",
    type: "Гель для тела для похудения",
    priceNew: "2 480 руб",
    priceOld: "3579 руб",
    image: Product6Image.src,
    label: "",
  },
  {
    name: "Slimming Gel Body",
    type: "Гель для тела для похудения",
    priceNew: "2 480 руб",
    priceOld: "3579 руб",
    image: Product6Image.src,
    label: "sell",
  },
  {
    name: "Slimming Gel Body",
    type: "Гель для тела для похудения",
    priceNew: "2 480 руб",
    priceOld: "3579 руб",
    image: Product6Image.src,
    label: "sell",
  },
  {
    name: "Slimming Gel Body",
    type: "Гель для тела для похудения",
    priceNew: "2 480 руб",
    priceOld: "3579 руб",
    image: Product6Image.src,
    label: "",
  },
  {
    name: "Slimming Gel Body",
    type: "Гель для тела для похудения",
    priceNew: "2 480 руб",
    priceOld: "3579 руб",
    image: Product6Image.src,
    label: "sell",
  },
  {
    name: "Slimming Gel Body",
    type: "Гель для тела для похудения",
    priceNew: "2 480 руб",
    priceOld: "3579 руб",
    image: Product6Image.src,
    label: "",
  },
];
export const RecommendationSection = () => {
  const { t } = useTranslation();

  return (
    <WrapperSC>
      <ContainerSC>
        <SliderSC>
          <TitleSC>{t("recommendation.title")}</TitleSC>
          <SliderMedium data={data} />
        </SliderSC>
      </ContainerSC>
    </WrapperSC>
  );
};
