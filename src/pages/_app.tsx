import { ThemeToggleProvider } from "@/context/ThemeToggleContext";
import MainLayout from "@/layouts/MainLayout";
import { globalStyles } from "@/styles/globalStyles";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeToggleProvider>
      <Provider store={store}>
        <MainLayout>
          <Global styles={globalStyles} />
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </ThemeToggleProvider>
  );
}
