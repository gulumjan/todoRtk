import ReduxProvider from "@/provider/ReduxProvider";
import React, { FC, ReactNode } from "react";

interface ILayoutprops {
  children: ReactNode;
}
const LayoutClient: FC<ILayoutprops> = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default LayoutClient;
