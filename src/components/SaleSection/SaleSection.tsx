import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Navigation, Swiper as SwiperType } from "swiper";
import { SwiperSlide } from "swiper/react";
import { ButtonsSlider } from "../ButtonsSlider/ButtonsSlider";
import { SaleSlide } from "../SaleSlide/SaleSlide";
import {
  ContainerSC,
  ContainerSwiperSC,
  ContainerTitleSC,
  CustomSwiperSC,
  SliderSC,
  TitleSC,
  WrapperSC,
} from "./style";
import ProductImage from "../../../public/assets/icons/product7.jpg";

const data = [
  {
    name: "R&B Black Food 3.7",
    type: "Бальзам-ополаскиватель для волос с экстрактами 3 черных семян и 7 черных плодов",
    image: ProductImage.src,
  },
  {
    name: "R&B Black Food 3.7",
    type: "Бальзам-ополаскиватель для волос с экстрактами 3 черных семян и 7 черных плодов",
    image: ProductImage.src,
  },
  {
    name: "R&B Black Food 3.7",
    type: "Бальзам-ополаскиватель для волос с экстрактами 3 черных семян и 7 черных плодов",
    image: ProductImage.src,
  },
  {
    name: "R&B Black Food 3.7",
    type: "Бальзам-ополаскиватель для волос с экстрактами 3 черных семян и 7 черных плодов",
    image: ProductImage.src,
  },
  {
    name: "R&B Black Food 3.7",
    type: "Бальзам-ополаскиватель для волос с экстрактами 3 черных семян и 7 черных плодов",
    image: ProductImage.src,
  },
  {
    name: "R&B Black Food 3.7",
    type: "Бальзам-ополаскиватель для волос с экстрактами 3 черных семян и 7 черных плодов",
    image: ProductImage.src,
  },
];

const breakpoints = {
  1152: {
    slidesPerView: 2,
  },
  1440: {
    slidesPerView: 2.02,
  },
};

export const SaleSection = () => {
  const { t } = useTranslation();
  const swiperRef = useRef<SwiperType>();

  return (
    <WrapperSC>
      <ContainerSC>
        <SliderSC>
          <ContainerTitleSC>
            <TitleSC>{t("sales.title")}</TitleSC>
            <ButtonsSlider swiperRef={swiperRef} />
          </ContainerTitleSC>
        </SliderSC>
        <ContainerSwiperSC>
          <CustomSwiperSC
            slidesPerView={1}
            centeredSlides={true}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={breakpoints}
            loop={true}
            spaceBetween={114}
            modules={[Navigation]}
          >
            {data.map((item) => (
              <SwiperSlide key={item.name}>
                <SaleSlide item={item} />
              </SwiperSlide>
            ))}
          </CustomSwiperSC>
        </ContainerSwiperSC>
      </ContainerSC>
    </WrapperSC>
  );
};
