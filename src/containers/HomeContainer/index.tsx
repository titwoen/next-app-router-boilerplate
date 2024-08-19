"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import type { TApps } from "@/types";

export default function HomePageContainer() {
  const t = useTranslations();
  const { setTheme } = useTheme();

  const changeTheme: (theme: TApps.ITheme) => void = setTheme;

  return (
    <section>
      <h1 className="text-red-400">
        {t("UserProfile.title", { firstname: "My name" })}
      </h1>
      <div className="flex gap-3 bg-colors-base-0 text-gray-400">
        <MoonIcon
          className="size-10 cursor-pointer"
          onClick={() => changeTheme("dark")}
        />
        <SunIcon
          className="size-10 cursor-pointer"
          onClick={() => changeTheme("light")}
        />
      </div>
    </section>
  );
}
