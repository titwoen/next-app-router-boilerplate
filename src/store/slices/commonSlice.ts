import { createAction, createSlice } from "@reduxjs/toolkit";

import type { TApps } from "@/types";
import { AppConfig } from "@/utils/appConfig";

import { KEY_COMMON } from "../constants";

export interface ICommonState {
  theme: TApps.ITheme;
}

const initialCommon: ICommonState = {
  theme: AppConfig.defaultTheme,
};

export const storeCommonChangeTheme =
  createAction<TApps.ITheme>("common/changeTheme");

export const commonSlice = createSlice({
  initialState: initialCommon,
  name: KEY_COMMON,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(storeCommonChangeTheme, (state, { payload }) => {
      return { ...state, theme: payload };
    });
  },
});

export default commonSlice.reducer;
