"use client";
import { store } from "@/redux/store";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";

interface IReducProviderProps {
  children: ReactNode;
}
const ReduxProvider: FC<IReducProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
