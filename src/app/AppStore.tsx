import { configureStore } from "@reduxjs/toolkit";
import type { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import navReducer from "../stores/navSlice";

const store = configureStore({
  reducer: { nav: navReducer },
});
export const AppStore: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
