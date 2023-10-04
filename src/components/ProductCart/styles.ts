import styled from '@emotion/styled';
import { IProps } from '../SaleSlide/type';

export const WrapperSC = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  border-bottom: 1px solid ${(props) => props.theme.color.textSlider};
  padding-bottom: 16px;
  margin-bottom: 16px;
`;

export const ContainerSC = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ImageSC = styled.div<IProps>`
  width: 126px;
  height: 126px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ theme, name }) =>
    ` url(${theme.products[name as keyof typeof theme.products]})`};
`;

export const InformationSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;
  max-width: 500px;
`;

export const NameSC = styled.p`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.0375em;
  color: ${(props) => props.theme.color.primary};
`;

export const TypeSC = styled.p`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-size: 14px;
  line-height: 15px;
  color: ${(props) => props.theme.color.lightPrimary2};
`;

export const PriceContainerSC = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  align-self: flex-end;
`;

export const SaleSC = styled.p`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-size: 12px;
  line-height: 24px;
  color: ${(props) => props.theme.color.sale};
`;

export const PricesSC = styled.div`
  display: flex;
  column-gap: 24px;
`;

export const NewPriceSC = styled.p`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-size: 18px;
  line-height: 36px;
  color: ${(props) => props.theme.color.primary};
`;

export const OldPriceSC = styled.p`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-size: 18px;
  line-height: 36px;
  color: ${(props) => props.theme.color.priceSliderOld};
`;
