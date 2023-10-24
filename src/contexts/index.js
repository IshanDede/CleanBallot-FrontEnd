import { createContext, useContext } from "react";

const globalContext = createContext({});

function GlobalContextProvider({ context, children }) {
    return (
        <globalContext.Provider value={context}>
            {children}
        </globalContext.Provider>
    )
}

export default GlobalContextProvider

//global context to be used throughout the website you can just import this function instead of importing context n then using hook
export const useGlobalContext = () => {
  return useContext(globalContext)
};