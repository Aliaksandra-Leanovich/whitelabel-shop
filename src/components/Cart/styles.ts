import styled from '@emotion/styled';

export const ContainerSC = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const PricesContainerSC = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const PricesSC = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const SaleContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  text-align: right;
`;

export const TextSC = styled.p`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-size: 12px;
  line-height: 200%;
  color: ${(props) => props.theme.color.textSlider2};
`;

export const SaleSC = styled.p`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => props.theme.color.sale};
`;

export const TotlaSC = styled.div`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-size: 18px;
  line-height: 36px;
  color: ${(props) => props.theme.color.primary};
`;

export const CartButtonSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 0;
  width: 100%;
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.0375em;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.secondary};

  &:hover {
    background-color: ${(props) => props.theme.color.labelSlider};
  }
`;
