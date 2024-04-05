"use client"
import React, { createContext, useContext, useState } from "react";
const AppContext = createContext({
  hello: "world",
});
export function AppWrapper({ children }) {
  children: React.ReactNode;
  let [state, setState] = useState({
      hello: "World",
    });
    return (<AppContext.Provider value={state}>{children}</AppContext.Provider>);
}
    export function useAppContext() {
 return useContext(AppContext);
}
