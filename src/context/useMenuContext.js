import React, { createContext, useContext, useRef, useState } from "react";

const MenuContext = createContext();

export const useMenuContext = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenuContext must be used within an ActiveMenuProvider");
    }
    return context;
};

export const MenuContextProvider = ({ children }) => {
    const [resize, setResize] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);
    const mainRef = useRef(null);

    const handleMenuBtnClick = () => {
        setActiveMenu(prevActive => !prevActive);
    }

    return <MenuContext.Provider value={{ mainRef, resize, setResize, activeMenu, setActiveMenu, handleMenuBtnClick }}>{children}</MenuContext.Provider>;
};
