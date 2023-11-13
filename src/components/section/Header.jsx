import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useActiveMenu } from "../../context/useActiveMenu";

import { AiFillBell, AiFillYoutube, AiOutlineBell } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

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
                        <div id="search">
                            <div className="search_inner">
                                <form onSubmit={(e) => e.preventDefault()} className="search_form">
                                    <label htmlFor="search_input" className="ir"></label>
                                    <div className="search_input_box">
                                        <input
                                            type="serach"
                                            name="search_input"
                                            id="search_input"
                                            autoComplete="off"
                                            placeholder="검색"
                                            className="search_input"
                                        />
                                        <button type="submit" className="search_btn">
                                            <BsSearch />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="header_right">
                        <div className="right_items alarm" onClick={handleAlarmClick}>
                            <span>{show ? <AiFillBell /> : <AiOutlineBell />}</span>
                        </div>
                        <div className="right_items profile">
                            <p>JUN</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
