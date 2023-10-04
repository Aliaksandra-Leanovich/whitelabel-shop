import styled from '@emotion/styled';
import { IStylesProps } from './types';

export const WrapperSC = styled.div<IStylesProps>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.color.borderAdvantage};
  z-index: 2;

  body {
    overflow: ${({ show }) => (show ? 'hidden' : 'auto')};
  }
`;

export const ContainerSC = styled.div<IStylesProps>`
  position: fixed;
  background-color: ${(props) => props.theme.color.secondary};
  padding: 30px 40px 60px 60px;
  width: 100%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  overflow-y: auto;
`;

export const ContainerButtonSC = styled.div`
  align-self: flex-end;
`;

export const ButtonSC = styled.button<IStylesProps>`
  width: 20px;
  cursor: pointer;

  svg {
    path {
      fill: ${(props) => props.theme.color.primary};
    }
  }

  &:hover {
    svg {
      path {
        fill: ${(props) => props.theme.color.labelSlider};
      }
    }
  }
`;

export const ContainerChildSC = styled.div`
  padding: 10px 30px 0 0;
`;

export const TitleSC = styled.p`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-weight: 700;
  font-size: 48px;
  line-height: 54px;
  margin-bottom: 20px;
`;

export const DescriptionSC = styled.p`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-size: 30px;
  line-height: 34px;
  margin-bottom: 36px;
`;
