import { useShowModal } from "@/hooks/use-show-modal.hook";
import FavoritesIcon from "public/assets/icons/favorites.svg";
import ProfileIcon from "public/assets/icons/profile.svg";
import SearchIcon from "public/assets/icons/search.svg";
import { useCallback, useState } from "react";
import { Links } from "../Links/Links";
import { ModalCart } from "../ModalCart/ModalCart";
import {
  IconFavoriteSC,
  IconSC,
  LinksContainerSC,
  StyledNavigationSC,
} from "./style";
import { INavigationProps } from "./type";
import CartIcon from "/public/assets/icons/cart.svg";

export const Navigation = ({ isOpen }: INavigationProps) => {
  const { show, showModal } = useShowModal();

  return (
    <StyledNavigationSC isOpen={isOpen}>
      <Links />
      <LinksContainerSC>
        <IconSC>
          <SearchIcon />
        </IconSC>
        <IconFavoriteSC>
          <FavoritesIcon />
        </IconFavoriteSC>
        <IconSC onClick={showModal}>
          <CartIcon />
        </IconSC>
        <IconSC>
          <ProfileIcon />
        </IconSC>
      </LinksContainerSC>
      <ModalCart show={show} handleClose={showModal} />
    </StyledNavigationSC>
  );
};
