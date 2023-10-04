import { useShowModal } from "@/hooks/use-show-modal.hook";
import { useCallback, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Modal } from "../Modal/Modal";
import Portal from "../Portal/Portal";
import {
  ContainerSlideSC,
  DescriptionSC,
  ImageContainerSC,
  InformationSC,
  LabelSC,
  NameSC,
  NewPriceSC,
  OldPriceSC,
  PriceSC,
  TypeSC,
} from "./style";
import { IPropsSlide } from "./type";

export const SlideMedium = ({ item }: IPropsSlide) => {
  const { show, showModal } = useShowModal();

  return (
    <>
      <SwiperSlide>
        <ContainerSlideSC onClick={showModal}>
          {item.label && <LabelSC>{item.label}</LabelSC>}
          <ImageContainerSC name={item.image} />
          <InformationSC>
            <NameSC>{item.name}</NameSC>
            <DescriptionSC>
              <TypeSC>{item.type}</TypeSC>
              <PriceSC>
                <NewPriceSC>{item.priceNew}</NewPriceSC>
                <OldPriceSC>{item.priceOld}</OldPriceSC>
              </PriceSC>
            </DescriptionSC>
          </InformationSC>
        </ContainerSlideSC>
      </SwiperSlide>
      <Portal>
        <Modal children={item} show={show} handleClose={showModal} />
      </Portal>
    </>
  );
};
