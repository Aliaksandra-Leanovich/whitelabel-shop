import CrossIcon from 'public/assets/icons/cross-icon.svg';
import { ProductModal } from '../ProductModal/ProductModal';
import { ButtonSC, ContainerButtonSC, ContainerChildSC, ContainerSC, WrapperSC } from './styles';
import { IModalProps } from './types';

export const Modal = ({ handleClose, show, children }: IModalProps) => {
  return (
    <WrapperSC show={show}>
      <ContainerSC show={show}>
        <ContainerButtonSC>
          <ButtonSC type="button" onClick={handleClose}>
            <CrossIcon />
          </ButtonSC>
        </ContainerButtonSC>
        <ContainerChildSC>
          <ProductModal item={children} />
        </ContainerChildSC>
      </ContainerSC>
    </WrapperSC>
  );
};
