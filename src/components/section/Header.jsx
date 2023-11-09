import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useActiveMenu } from "../../context/useActiveMenu";
import Search from "../../pages/Search";

import { AiFillBell, AiFillYoutube, AiOutlineBell } from "react-icons/ai";

const Header = () => {
    const { handleHeaderMenuClick } = useActiveMenu();
    const [show, setShow] = useState(false);

    const handleAlarmClick = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <header id="header" role="banner">
            <h2 className="blind">헤더</h2>
            <div className="inner">
                <div className="header">
                    <div className="header_left">
                        <h1 className="header_logo">
                            <Link to="/" className="logo_link">
                                <span>
                                    <AiFillYoutube />
                                </span>
                                MyTube
                            </Link>
                        </h1>
                        <div className="header_menu_btn" onClick={handleHeaderMenuClick}>
                            <span className="btn_bar"></span>
                        </div>
                    </div>
                    <div className="header_center">
                        <Search />
                    </div>
                    <div className="header_right">
                        <div className="alarm" onClick={handleAlarmClick}>
                            <span>{show ? <AiFillBell /> : <AiOutlineBell />}</span>
                        </div>
                        <div className="profile">
                            <p>JUN</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
