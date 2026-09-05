import { createContext, useContext } from "react";

/** Lets any section jump to another one by id, without prop-drilling from App. */
export const NavContext = createContext<(id: string) => void>(() => {});

export const useNav = () => useContext(NavContext);
