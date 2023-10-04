import { useTranslation } from "react-i18next";
import {
  AddresSC,
  BlockFirstFooterSC,
  BlockFirstSC,
  BlockWithLogoSC,
  EmailSC,
  PhoneSC,
} from "./style";

import Logo from "../../../public/assets/icons/logo.jpg";

export const BlockWithLogo = () => {
  const { t } = useTranslation();

  return (
    <BlockFirstSC>
      <BlockWithLogoSC>
        {/* <Logo /> */}
        <img src={Logo.src} alt="" />
        <PhoneSC>{t("footer.phone")}</PhoneSC>
        <EmailSC>{t("footer.email")}</EmailSC>
        <AddresSC>{t("footer.address")}</AddresSC>
      </BlockWithLogoSC>
      <BlockFirstFooterSC>{t("footer.content")}</BlockFirstFooterSC>
    </BlockFirstSC>
  );
};
