import { useTheme } from "../../context/ThemeToggleContext";
import styled from "@emotion/styled";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Burger } from "../Burger";
import { RightNavigation } from "../Navigation/RightNavigation";
import { TopNavigation } from "../Navigation/TopNavigation";
import {
  ContainerBottomSC,
  ContainerTopSC,
  InformationSC,
  LogoContainerSC,
  PhoneNumberSC,
  StyledHeaderSC,
  WrapperSC,
} from "./style";
import Logo from "../../../public/assets/icons/logo.jpg";

export const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  // const toggleTheme = useThemeUpdate();
  const activeTheme = useTheme();

  const handleClick = () => {
    // toggleTheme();
    document.body.style.background = !activeTheme ? "#000000" : "#ffffff";
  };

  return (
    <StyledHeaderSC>
      <WrapperSC>
        <ContainerTopSC>
          <InformationSC>
            <PhoneNumberSC>{t("header.phone")}</PhoneNumberSC>
          </InformationSC>
        </ContainerTopSC>
        <ContainerBottomSC>
          <LogoContainerSC>
            <img src={Logo.src} alt="" />
          </LogoContainerSC>
          <TopNavigation isOpen={isOpen} />
          <RightNavigation isOpen={isOpen} />
          <ButtonTheme onClick={handleClick}>Toggle Theme</ButtonTheme>
          <Burger isOpen={isOpen} setOpen={setOpen} />
        </ContainerBottomSC>
      </WrapperSC>
    </StyledHeaderSC>
  );
};

export const ButtonTheme = styled.button`
  background-color: ${(props) => props.theme.color.labelSlider};
  width: 300px;
  padding: 20px;
`;
