import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Search = () => {
    return (
        <>
            <Helmet titleTemplate="%s | MyTube" defaultTitle="MyTube" defer={false}>
                {/* {title && <title>{title}</title>} */}
                <title>검색결과</title>
                <meta name="description" content="유뷰트 검색 결과 페이지입니다." />
            </Helmet>
            <section id="search_page">
                <h2 className="blind">구독 영상</h2>
                <div className="container">
                    <div className="inner">
                        <div className="search_page">
                            <div className="contents_area">
                                <div className="video_card">
                                    <Link to="/" className="video_link">
                                        <div className="video_thumbnail"></div>
                                        <div className="video_info">
                                            <ul className="video_details">
                                                <li className="video_brand_logo"></li>
                                                <li className="video_title">
                                                    Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1
                                                </li>
                                            </ul>
                                            <div className="video_channel">Channel Name 1</div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="video_card">
                                    <Link to="/" className="video_link">
                                        <div className="video_thumbnail"></div>
                                        <div className="video_info">
                                            <ul className="video_details">
                                                <li className="video_brand_logo"></li>
                                                <li className="video_title">
                                                    Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1
                                                </li>
                                            </ul>
                                            <div className="video_channel">Channel Name 1</div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="video_card">
                                    <Link to="/" className="video_link">
                                        <div className="video_thumbnail"></div>
                                        <div className="video_info">
                                            <ul className="video_details">
                                                <li className="video_brand_logo"></li>
                                                <li className="video_title">
                                                    Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1
                                                </li>
                                            </ul>
                                            <div className="video_channel">Channel Name 1</div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="video_card">
                                    <Link to="/" className="video_link">
                                        <div className="video_thumbnail"></div>
                                        <div className="video_info">
                                            <ul className="video_details">
                                                <li className="video_brand_logo"></li>
                                                <li className="video_title">
                                                    Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1
                                                </li>
                                            </ul>
                                            <div className="video_channel">Channel Name 1</div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="video_card">
                                    <Link to="/" className="video_link">
                                        <div className="video_thumbnail"></div>
                                        <div className="video_info">
                                            <ul className="video_details">
                                                <li className="video_brand_logo"></li>
                                                <li className="video_title">
                                                    Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1
                                                </li>
                                            </ul>
                                            <div className="video_channel">Channel Name 1</div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="video_card">
                                    <Link to="/" className="video_link">
                                        <div className="video_thumbnail"></div>
                                        <div className="video_info">
                                            <ul className="video_details">
                                                <li className="video_brand_logo"></li>
                                                <li className="video_title">
                                                    Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1
                                                </li>
                                            </ul>
                                            <div className="video_channel">Channel Name 1</div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="video_card">
                                    <Link to="/" className="video_link">
                                        <div className="video_thumbnail"></div>
                                        <div className="video_info">
                                            <ul className="video_details">
                                                <li className="video_brand_logo"></li>
                                                <li className="video_title">
                                                    Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1
                                                </li>
                                            </ul>
                                            <div className="video_channel">Channel Name 1</div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="video_card">
                                    <Link to="/" className="video_link">
                                        <div className="video_thumbnail"></div>
                                        <div className="video_info">
                                            <ul className="video_details">
                                                <li className="video_brand_logo"></li>
                                                <li className="video_title">
                                                    Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1
                                                </li>
                                            </ul>
                                            <div className="video_channel">Channel Name 1</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Search;
