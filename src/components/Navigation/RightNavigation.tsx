import React from "react";
import { Navigation } from "./Navigation";
import { ContainerRightSC } from "./style";
import { INavigationProps } from "./type";

export const RightNavigation = ({ isOpen }: INavigationProps) => {
  return (
    <ContainerRightSC isOpen={isOpen}>
      <Navigation isOpen={isOpen} />
    </ContainerRightSC>
  );
};
