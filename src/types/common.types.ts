export declare namespace TApps {
  type ITheme = "light" | "dark";
  type ILanguage = "vi" | "en";
}

declare module "react" {
  // eslint-disable-next-line unused-imports/no-unused-vars
  interface HTMLAttributes<T> {
    "data-theme"?: TApps.ITheme;
  }
}
