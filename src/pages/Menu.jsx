import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useActiveMenu } from "../context/useActiveMenu";
import { menus } from "../constants/data";

import LargeMenu from "../components/menu/LargeMenu";
import SmallMenu from "../components/menu/SmallMenu";
import Footer from "../components/section/Footer";

const Menu = () => {
    const { activeMenu } = useActiveMenu();
    const [show, setShow] = useState(Array(menus.length).fill(false));
    const location = useLocation();

    const handleMenuClick = (i) => {
        setShow((prevShow) => prevShow.map((value, idx) => (idx === i ? !value : false)));
    };

    return (
        <>
            <aside className="menu_container" style={{ width: activeMenu ? "260px" : "auto" }} role="menu">
                <h2 className="blind">사이드메뉴</h2>
                <nav className="nav">
                    {activeMenu ? (
                        <LargeMenu handleMenuClick={handleMenuClick} show={show} setShow={setShow} location={location} />
                    ) : (
                        <SmallMenu handleMenuClick={handleMenuClick} show={show} location={location} />
                    )}
                </nav>
                <Footer />
            </aside>
        </>
    );
};

export default Menu;
