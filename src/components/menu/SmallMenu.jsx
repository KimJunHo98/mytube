import React from "react";
import { Link } from "react-router-dom";
import { menus } from "../../constants/data";

const SmallMenu = ({show, location, handleMenuClick}) => {
    return (
        <ul className="small_menu_list">
            {menus.map((menu, i) => (
                <li className="menu_items" key={i}>
                    <Link
                        to={menu.src}
                        className={`menu_links ${location.pathname === menu.src ? "show" : ""}`}
                        onClick={() => handleMenuClick(i)}
                    >
                        {!show[i] ? <span>{menu.icon1}</span> : <span>{menu.icon2}</span>}
                        {menu.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SmallMenu;
