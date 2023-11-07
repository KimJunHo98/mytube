import React, { createContext, useContext, useState } from "react";

const ActiveMenuContext = createContext();

export const useActiveMenu = () => {
    const context = useContext(ActiveMenuContext);
    if (!context) {
        throw new Error("useActiveMenu must be used within an ActiveMenuProvider");
    }
    return context;
};

export const ActiveMenuProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);

    const handleHeaderMenuClick = () => {
        setActiveMenu(prevActive => !prevActive);
    };

    return (
        <ActiveMenuContext.Provider value={{ activeMenu, handleHeaderMenuClick }}>
            {children}
        </ActiveMenuContext.Provider>
    );
};