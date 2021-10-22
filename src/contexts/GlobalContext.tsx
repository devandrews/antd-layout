import React, { ReactNode } from "react";

import { MenuContextProvider } from "./MenuContext";

interface PropsGlobalContext {
  children?: ReactNode;
}

const GlobalContext: React.FC = ({ children }: PropsGlobalContext) => {
  return <MenuContextProvider>{children}</MenuContextProvider>;
};

export default GlobalContext;
