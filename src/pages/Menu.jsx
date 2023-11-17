import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMenuContext } from "../context/useMenuContext";
import { menus } from "../constants/data";

import LargeMenu from "../components/menu/LargeMenu";
import SmallMenu from "../components/menu/SmallMenu";
import ActiveMenu from "../components/menu/ActiveMenu";
import Footer from "../components/section/Footer";

const Menu = () => {
    const { mainRef, resize, setResize, activeMenu } = useMenuContext();
    const [show, setShow] = useState(Array(menus.length).fill(false));
    const location = useLocation();

    useEffect(() => {
        const windowResize = () => {
            const mainRefCurrent = mainRef.current;
            const mainRefSize = mainRefCurrent.clientWidth;

            if (mainRefSize >= 1105) {
                setResize(true);
            } else {
                setResize(false);
            }
        };

        windowResize();

        window.addEventListener("resize", windowResize);

        return () => {
            window.removeEventListener("resize", windowResize);
        };
    }, [mainRef, setResize]);

    const handleMenuClick = (i) => {
        setShow((prevShow) => prevShow.map((value, idx) => (idx === i ? !value : false)));
    };

    return (
        <>
            <aside className={`menu_container ${resize ? "" : "resize"}`} role="menu">
                <h2 className="blind">사이드메뉴</h2>
                {resize ? (
                    <LargeMenu handleMenuClick={handleMenuClick} show={show} setShow={setShow} location={location} />
                ) : (
                    <SmallMenu handleMenuClick={handleMenuClick} show={show} location={location} />
                )}
                <Footer />
            </aside>
            {activeMenu && <ActiveMenu handleMenuClick={handleMenuClick} show={show} location={location} />}
        </>
    );
};

export default Menu;
