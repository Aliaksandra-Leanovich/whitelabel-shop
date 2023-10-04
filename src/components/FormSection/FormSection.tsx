import React from "react";
import { useTranslation } from "react-i18next";
import Image from "../../../public/assets/icons/formBackground.png";

import {
  ButtonSC,
  ContainerSC,
  FormSC,
  ImageSC,
  InformationSC,
  InputSC,
  TextSC,
  TitleSC,
  WrapperSC,
  BlockSC,
} from "./style";

export const FormSection = () => {
  const { t } = useTranslation();
  const placeholder = t("form.input");

  return (
    <WrapperSC>
      <ContainerSC>
        <ImageSC>
          {/* <Image /> */} <img src={Image.src} alt="" />
        </ImageSC>
        <BlockSC>
          <InformationSC>
            <TitleSC>{t("form.title")}</TitleSC>
            <TextSC>{t("form.text")}</TextSC>
          </InformationSC>
          <FormSC>
            <InputSC placeholder={placeholder} />
            <ButtonSC>{t("form.button")}</ButtonSC>
          </FormSC>
        </BlockSC>
      </ContainerSC>
    </WrapperSC>
  );
};
