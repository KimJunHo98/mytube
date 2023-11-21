import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useMenuContext } from "../../context/useMenuContext";
import useSearchVideo from "../../context/useSearchVideo";

import { AiFillBell, AiFillYoutube, AiOutlineBell } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";

const Header = () => {
    const { handleMenuBtnClick } = useMenuContext();
    const { onChange, searchText, filteredVideos } = useSearchVideo();
    const [show, setShow] = useState(false);
    const [close, setClose] = useState(false);
    const history = useHistory(); 

    const handlSearchBtnClick = () => {
        setClose((prevClose) => !prevClose);
    };
    const handleBackBtnClick = () => {
        setClose((prevClose) => !prevClose);
    };
    const handleAlarmClick = () => {
        setShow((prevShow) => !prevShow);
    };
    const handleInputSubmit = (e) => {
        e.preventDefault();
        if (filteredVideos.length > 0) {
            // 검색 결과가 있으면 search 페이지로 이동
            history.push("/search");
        } else {
            // 검색 결과가 없으면 home 페이지로 이동
            history.push("/");
        }
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
                        <div className="header_menu_btn" onClick={handleMenuBtnClick}>
                            <span className="btn_bar"></span>
                        </div>
                    </div>
                    <div className="header_center">
                        <div className="header_pc_search">
                            <div className="search_inner">
                                <form onSubmit={handleInputSubmit} className="search_form">
                                    <label htmlFor="search_input" className="ir">
                                        영상 검색
                                    </label>
                                    <div className="search_input_box">
                                        <input
                                            type="serach"
                                            name="search_input"
                                            id="search_input"
                                            autoComplete="off"
                                            placeholder="검색"
                                            value={searchText}
                                            onChange={onChange}
                                            className="search_input"
                                        />
                                        <button type="button" className="search_btn">
                                            <BsSearch />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="header_right">
                        <div className="right_items search" onClick={handlSearchBtnClick}>
                            <button type="submit" className="search_btn">
                                <BsSearch />
                            </button>
                        </div>
                        <div className="right_items alarm" onClick={handleAlarmClick}>
                            <span>{show ? <AiFillBell /> : <AiOutlineBell />}</span>
                        </div>
                        <div className="right_items profile">
                            <p>JUN</p>
                        </div>
                    </div>
                    {close && (
                        <div className="header_moblie_search">
                            <div className="header_moblie_inner">
                                <button className="back_btn" onClick={handleBackBtnClick}>
                                    <FiArrowLeft />
                                </button>
                                <form onSubmit={handleInputSubmit} className="search_form">
                                    <label htmlFor="mobile_search_input" className="ir">
                                        영상 검색
                                    </label>
                                    <div className="search_input_box">
                                        <input
                                            type="serach"
                                            name="search_input"
                                            id="mobile_search_input"
                                            autoComplete="off"
                                            placeholder="검색"
                                            value={searchText}
                                            onChange={onChange}
                                            className="search_input"
                                        />
                                        <button type="submit" className="search_btn">
                                            <BsSearch />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
