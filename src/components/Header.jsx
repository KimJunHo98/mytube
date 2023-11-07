import React from "react";
import { Link } from "react-router-dom";
import { useActiveMenu } from "../context/useActiveMenu";
import { AiFillYoutube } from "react-icons/ai";

const Header = () => {
    const { handleHeaderMenuClick } = useActiveMenu();

    return (
        <header id="header" role="banner">
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
                    <div className="header_right">aaaa</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
