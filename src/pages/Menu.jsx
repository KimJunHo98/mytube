import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useActiveMenu } from "../context/useActiveMenu";

import { GoHome, GoHomeFill } from "react-icons/go";
import { MdSubscriptions, MdOutlineSubscriptions } from "react-icons/md";
import { BiSolidLike, BiLike } from "react-icons/bi";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { SiShortcut } from "react-icons/si";

const Menu = () => {
    const { activeMenu } = useActiveMenu();
    const [more, setMore] = useState(false);
    const [show, setShow] = useState({
        home: false,
        subs: false,
        reco: false,
        short: false,
    });

    const handleLinkBtnClick = (linkName) => {
        console.log("Link clicked:", linkName);
        setShow(false);
        setShow((prevClasses) => ({
            ...prevClasses,
            [linkName]: !prevClasses[linkName],
        }));
    };

    const handleMoreBtnClick = () => {
        setMore(prevMore => !prevMore);
    };

    return (
        <aside className="menu_container" style={{ width: activeMenu ? "260px" : "auto" }} role="menu">
            <h2 className="blind">사이드메뉴</h2>
            <nav className="nav">
                {activeMenu ? (
                    <>
                        <ul className="menu_list">
                            <li className="menu_items">
                                <Link
                                    to="/"
                                    className={`menu_links ${show.home ? "show" : ""}`}
                                    data-linkname="home"
                                    onClick={(e) => handleLinkBtnClick(e.currentTarget.getAttribute("data-linkname"))}
                                >
                                    <span>{show.home ? <GoHomeFill /> : <GoHome />}</span>홈
                                </Link>
                            </li>
                            <li className="menu_items">
                                <Link
                                    to="/subscription"
                                    className={`menu_links ${show.subs ? "show" : ""}`}
                                    data-linkname="subs"
                                    onClick={(e) => handleLinkBtnClick(e.currentTarget.getAttribute("data-linkname"))}
                                >
                                    <span>{show.subs ? <MdSubscriptions /> : <MdOutlineSubscriptions />}</span>구독
                                </Link>
                            </li>
                            <li className="menu_items">
                                <Link
                                    to="/shorts"
                                    className={`menu_links ${show.short ? "show" : ""}`}
                                    data-linkname="short"
                                    onClick={(e) => handleLinkBtnClick(e.currentTarget.getAttribute("data-linkname"))}
                                >
                                    <span><SiShortcut /></span>쇼츠
                                </Link>
                            </li>
                            <li className="menu_items">
                                <Link
                                    to="/recommend"
                                    className={`menu_links ${show.reco ? "show" : ""}`}
                                    data-linkname="reco"
                                    onClick={(e) => handleLinkBtnClick(e.currentTarget.getAttribute("data-linkname"))}
                                >
                                    <span>{show.reco ? <BiSolidLike /> : <BiLike />}</span>추천
                                </Link>
                            </li>
                        </ul>
                        <ul className="menu_list subscribe">
                            <li className="list_title">구독</li>
                            <li className="menu_items">
                                <Link
                                    to="/subscribe/:subscribeId"
                                    className={`menu_links ${show.item3 ? "show" : ""}`}
                                    data-linkname="item3"
                                    onClick={(e) => handleLinkBtnClick(e.currentTarget.getAttribute("data-linkname"))}
                                >
                                    <span>{show.item3 ? <GoHomeFill /> : <GoHome />}</span>구독자
                                </Link>
                            </li>
                            <li className="menu_items">
                                <Link
                                    to="/subscribe/:subscribeId"
                                    className={`menu_links ${show.item4 ? "show" : ""}`}
                                    data-linkname="item4"
                                    onClick={(e) => handleLinkBtnClick(e.currentTarget.getAttribute("data-linkname"))}
                                >
                                    <span>{show.item4 ? <GoHomeFill /> : <GoHome />}</span>구독자
                                </Link>
                            </li>
                            <li className="menu_items">
                                <Link
                                    to="/subscribe/:subscribeId"
                                    className={`menu_links ${show.item5 ? "show" : ""}`}
                                    data-linkname="item5"
                                    onClick={(e) => handleLinkBtnClick(e.currentTarget.getAttribute("data-linkname"))}
                                >
                                    <span>{show.item5 ? <GoHomeFill /> : <GoHome />}</span>구독자
                                </Link>
                            </li>
                            <li className="menu_items">
                                <Link
                                    to="/"
                                    className="more_links"
                                    onClick={handleMoreBtnClick}
                                >
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
                                </Link>
                            </li>
                        </ul>
                    </>
                ) : (
                    <>
                        <ul className="small_menu_list">
                            <li className="menu_items">
                                <Link
                                    to="/"
                                    className={`menu_links ${show.home ? "show" : ""}`}
                                    data-linkname="home"
                                    onClick={(e) => handleLinkBtnClick(e.currentTarget.getAttribute("data-linkname"))}
                                >
                                    <span>{show.home ? <GoHomeFill /> : <GoHome />}</span>홈
                                </Link>
                            </li>
                            <li className="menu_items">
                                <Link
                                    to="/subscription"
                                    className={`menu_links ${show.subs ? "show" : ""}`}
                                    data-linkname="subs"
                                    onClick={(e) => handleLinkBtnClick(e.currentTarget.getAttribute("data-linkname"))}
                                >
                                    <span>{show.subs ? <MdSubscriptions /> : <MdOutlineSubscriptions />}</span>구독
                                </Link>
                            </li>
                            <li className="menu_items">
                                <Link
                                    to="/shorts"
                                    className={`menu_links ${show.short ? "show" : ""}`}
                                    data-linkname="short"
                                    onClick={(e) => handleLinkBtnClick(e.currentTarget.getAttribute("data-linkname"))}
                                >
                                    <span><SiShortcut /></span>쇼츠
                                </Link>
                            </li>
                            <li className="menu_items">
                                <Link
                                    to="/recommend"
                                    className={`menu_links ${show.reco ? "show" : ""}`}
                                    data-linkname="reco"
                                    onClick={(e) => handleLinkBtnClick(e.currentTarget.getAttribute("data-linkname"))}
                                >
                                    <span>{show.reco ? <BiSolidLike /> : <BiLike />}</span>추천
                                </Link>
                            </li>
                        </ul>
                    </>
                )}
            </nav>
        </aside>
    );
};

export default Menu;
