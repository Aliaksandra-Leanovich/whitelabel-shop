import { useTheme } from "@/context/ThemeToggleContext";
import { IThemeContextProviderProps } from "@/context/types";
import { getCurrentUserTimezone } from "@/utilis/getCurrentUserTimezone";
import { useSetTheme } from "@/hooks/use-set-theme.hook";
import { darkTheme, grayTheme, lightTheme } from "@/ui/Themes";
import { ThemeProvider } from "@emotion/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n/i18n";

const MainLayout = ({ children }: IThemeContextProviderProps) => {
  const { t } = useTranslation();
  const timezone = getCurrentUserTimezone();
  const timezoneTheme = useSetTheme(timezone);
  const { activeTheme, setActiveTheme } = useTheme();
  const [mainTheme, setMainTheme] = useState(lightTheme);
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    if (timezoneTheme === "light") {
      setActiveTheme(true);
      setMainTheme(grayTheme);
    }
    document.body.style.backgroundColor = activeTheme ? "#ffffff " : "#000000";
  }, [activeTheme, timezoneTheme]);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <ThemeProvider theme={lightTheme}>
        <Head>
          <title>{t("title")}</title>
          <meta
            name="description"
            content="template project with setup for theme switching"
          />
        </Head>
        <body>
          <div id="overlay-root"></div>
          {children}
        </body>
      </ThemeProvider>
    );
  }
};

export default MainLayout;
