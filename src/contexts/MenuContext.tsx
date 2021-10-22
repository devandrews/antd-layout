import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface MenuTypes {
  collapsed: boolean;
}

interface PropsMenuContext {
  state: MenuTypes;
  setState: Dispatch<SetStateAction<MenuTypes>>;
}

const DEFAULT_VALUE = {
  state: {
    collapsed: true,
  },
  setState: () => {},
};

const MenuContext = createContext<PropsMenuContext>(DEFAULT_VALUE);

interface PropsMenuContextProvider {
  children?: ReactNode;
}

function MenuContextProvider({ children }: PropsMenuContextProvider) {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <MenuContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export { MenuContextProvider };
export default MenuContext;
