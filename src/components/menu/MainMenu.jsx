import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menus, subscribe } from "../../constants/data";

import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const LargeMenu = () => {
    const [more, setMore] = useState(false);

    const handleMoreBtnClick = () => {
        setMore((prevMore) => !prevMore);
    };
    return (
        <nav className="nav large_nav">
            <ul className="large_menu_list">
                {menus.map((menu, i) => (
                    <li className="menu_items" key={i}>
                        <Link
                            to={menu.src}
                            className="menu_links"
                        >
                            <span>{menu.icon1}</span>
                            {menu.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className="large_menu_list subscribe">
                <li className="list_title">구독</li>
                {subscribe.map((subs, i) => (
                    <li className="menu_items" key={i}>
                        <Link
                            to={subs.src}
                            className="menu_links"
                        >
                            <span>{subs.icon1}</span>
                            {subs.title}
                        </Link>
                    </li>
                ))}
                <li className="menu_items">
                    <button className="more_links" onClick={handleMoreBtnClick}>
                        {!more ? (
                            <>
                                <span>
                                    <RiArrowDownSLine />
                                </span>
                                100개 더보기
                            </>
                        ) : (
                            <>
                                <span>
                                    <RiArrowUpSLine />
                                </span>
                                간략히 보기
                            </>
                        )}
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default LargeMenu;
