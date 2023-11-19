import React, { useEffect } from "react";
import { useMenuContext } from "../context/useMenuContext";

import MainMenu from "../components/menu/MainMenu";
import Footer from "../components/section/Footer";

const Menu = () => {
    const { mainRef, resize, setResize, activeMenu } = useMenuContext();

    useEffect(() => {
        const windowResize = () => {
            const mainRefCurrent = mainRef.current;
            const mainRefSize = mainRefCurrent.clientWidth;

            if (mainRefSize >= 1023) {
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

    return (
        <>
            <aside className={`menu_container ${resize ? "" : "resize"} ${activeMenu ? "active" : ""}`} role="menu">
                <h2 className="blind">사이드메뉴</h2>
                {resize ? (
                    <MainMenu />
                ) : (
                    activeMenu && <MainMenu />
                )}
                <Footer />
            </aside>
        </>
    );
};

export default Menu;
