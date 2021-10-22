import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface PropsMenuContext {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}

const DEFAULT_VALUE = {
  collapsed: true,
  setCollapsed: () => {},
};

const MenuContext = createContext<PropsMenuContext>(DEFAULT_VALUE);

interface PropsMenuContextProvider {
  children?: ReactNode;
}

function MenuContextProvider({ children }: PropsMenuContextProvider) {
  const [collapsed, setCollapsed] = useState(DEFAULT_VALUE.collapsed);

  return (
    <MenuContext.Provider
      value={{
        collapsed,
        setCollapsed,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export { MenuContextProvider };
export default MenuContext;
