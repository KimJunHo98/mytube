import React from "react";
import { Link } from "react-router-dom";
import { useActiveMenu } from "../context/useActiveMenu";

const Home = () => {
    const { activeMenu } = useActiveMenu();

    return (
        <section id="home">
            <h2 className="blind">홈페이지</h2>
            <div className="container">
                <div className="inner">
                    <div className="home">
                        <aside className="menu_container" style={{ width: !activeMenu ? "260px" : "auto" }} role="menu">
                            <nav className="nav">
                                <ul className="menu_list">
                                    <li className="menu_items">
                                        <Link to="/" className="menu_links">aaaa</Link>
                                    </li>
                                    <li className="menu_items">
                                        <Link to="/" className="menu_links">aaaa</Link>
                                    </li>
                                    <li className="menu_items">
                                        <Link to="/" className="menu_links">aaaa</Link>
                                    </li>
                                </ul>
                                <ul className="menu_list">
                                    <li className="menu_items">
                                        <Link to="/" className="menu_links">aaaa</Link>
                                    </li>
                                    <li className="menu_items">
                                        <Link to="/" className="menu_links">aaaa</Link>
                                    </li>
                                    <li className="menu_items">
                                        <Link to="/" className="menu_links">aaaa</Link>
                                    </li>
                                </ul>
                            </nav>
                        </aside>
                        <div className="home_contents"  style={{ paddingLeft: !activeMenu ? "280px" : "80px" }}>home_contents</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
