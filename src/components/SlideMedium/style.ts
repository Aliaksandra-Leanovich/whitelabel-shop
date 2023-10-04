import styled from "@emotion/styled";
import { IProps } from "./type";

export const ContainerSlideSC = styled.div`
  max-width: 378px;
  width: 100%;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  row-gap: 48px;
  position: relative;
`;

export const ImageContainerSC = styled.div<IProps>`
  width: 100%;
  height: 330px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ theme, name }) =>
    ` url(${theme.products[name as keyof typeof theme.products]})`};
`;

export const InformationSC = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionSC = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PriceSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
`;

export const NameSC = styled.p`
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.textSlider};
  font-family: ${(props) => props.theme.fontFamily.primary};
`;

export const TypeSC = styled.p`
  color: ${(props) => props.theme.color.textSlider2};
  font-family: ${(props) => props.theme.fontFamily.primary};
  max-width: 260px;
`;

export const NewPriceSC = styled.p`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  line-height: 19px;
  color: ${(props) => props.theme.color.priceSliderNew};
`;

export const OldPriceSC = styled.p`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.theme.color.priceSliderOld};
`;

export const LabelSC = styled.div`
  position: absolute;
  top: 12;
  left: 0;
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.color.labelSlider};
  color: ${(props) => props.theme.color.secondary};
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonTheme = styled.button`
  background-color: ${(props) => props.theme.color.labelSlider};
  width: 300px;
  padding: 20px;
`;
