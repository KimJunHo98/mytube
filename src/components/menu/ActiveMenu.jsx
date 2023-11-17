import React from "react";
import { Link } from "react-router-dom";
import { useMenuContext } from "../../context/useMenuContext";
import { menus } from "../../constants/data";

const ActiveMenu = () => {
    const { setActiveMenu } = useMenuContext();

    return (
        <aside className="active_menu">
            <nav className="nav">
                <ul className="menu_list">
                    {menus.map((menu, i) => (
                        <li className="menu_items" key={i}>
                            <Link
                                to={menu.src}
                                className="menu_links"
                                onClick={() => setActiveMenu(false)}
                            >
                                <span>{menu.icon1}</span>
                                {menu.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default ActiveMenu;
