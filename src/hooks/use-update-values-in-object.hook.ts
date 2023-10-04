import { IProps } from "./types";

export const useUpdateValuesInObject = (initial: IProps, temp: IProps) => {
  Object.keys(temp).forEach((key1) => {
    Object.keys(initial).forEach((key) => {
      if (key === key1) {
        initial[key as keyof typeof initial] = temp[key1 as keyof typeof temp];
      }
    });
  });

  return initial;
};
