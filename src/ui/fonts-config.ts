import { useUpdateValuesInObject } from "@/hooks/use-update-values-in-object.hook";
import data from "../../public/assets/fonts.json";
import { IFonts, IKey } from "./types";

export const fonts: IFonts = {
  fontWeight: {
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },

  fontFamily: {
    primary: `"OpenSans", sans-serif`,
    secondary: `"Roboto", sans-serif`,
  },
};

const newObject: IKey = useUpdateValuesInObject(
  fonts.fontFamily,
  data.fonts.fontFamily
);

fonts.fontFamily = newObject;
