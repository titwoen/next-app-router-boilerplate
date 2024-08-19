"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";
import { Provider } from "react-redux";

import { store } from "@/store/store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    if (store.getState().common.theme !== theme) {
      setTheme(store.getState().common.theme);
    }
  }, [setTheme, theme]);

  return <Provider store={store}>{children}</Provider>;
}
