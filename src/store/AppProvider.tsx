import React, { createContext } from "react";
import AppStore from "./AppStore";

interface AppContextType {
  store: AppStore;
}
const appstore = new AppStore();
type AppProps = {
  children: React.ReactNode;
};

export const AppContext = createContext<null | AppContextType>(null);
const store = new AppStore();

const AppProvider = ({ children }: AppProps) => {
  return (
    <AppContext.Provider value={{ store }}>{children}</AppContext.Provider>
  );
};
export default AppProvider;
