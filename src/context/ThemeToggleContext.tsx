import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";
import { IThemeContextProviderProps } from "./types";

interface IThemeContext {
  activeTheme: boolean;
  setActiveTheme: Dispatch<SetStateAction<boolean>>;
  toggleTheme: VoidFunction;
}

export const themeContextDefaultValue: IThemeContext = {
  activeTheme: false,
  setActiveTheme: () => false,
  toggleTheme: () => {},
};

export const ThemeContext = createContext<IThemeContext>(
  themeContextDefaultValue
);

export const ThemeToggleProvider = ({
  children,
}: IThemeContextProviderProps) => {
  const [activeTheme, setActiveTheme] = useState(false);
  const toggleTheme = useCallback(() => {
    setActiveTheme(!activeTheme);
  }, [activeTheme]);
  const value = { activeTheme, setActiveTheme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
