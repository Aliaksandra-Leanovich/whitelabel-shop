import styled from '@emotion/styled';
import { IProps } from '../SaleSlide/type';

export const WrapperSC = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContainerSC = styled.div`
  display: flex;
  width: 100%;
  column-gap: 40px;
`;

export const ImageSC = styled.div<IProps>`
  width: 346px;
  height: 346px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ theme, name }) =>
    ` url(${theme.products[name as keyof typeof theme.products]})`};
`;

export const InformationSC = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 10px;
`;

export const NameSC = styled.p`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-weight: 900;
  font-size: 32px;
  line-height: 34px;
  color: ${(props) => props.theme.color.primary};
  text-transform: uppercase;
`;

export const StoreNameSC = styled.span`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-weight: 900;
  font-size: 32px;
  line-height: 34px;
  margin-right: 10px;
  letter-spacing: 0.0375em;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.sale};
`;

export const TypeSC = styled.p`
  line-height: 24px;
  color: ${(props) => props.theme.color.primary};
`;

export const PriceContainerSC = styled.div`
  display: flex;
  column-gap: 24px;
`;

export const NewPriceSC = styled.p`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-weight: 700;
  font-size: 24px;
  line-height: 27px;
  color: ${(props) => props.theme.color.primary};
`;

export const OldPriceSC = styled.p`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-weight: 700;
  font-size: 24px;
  line-height: 27px;
  color: ${(props) => props.theme.color.priceSliderOld};
`;

export const ButtonSC = styled.button`
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.secondary};
  width: 260px;
  padding: 13px 0;
  margin-top: 60px;

  &:hover {
    background-color: ${(props) => props.theme.color.labelSlider};
  }
`;
