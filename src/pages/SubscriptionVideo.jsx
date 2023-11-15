import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SubscriptionVideo = ({ title, description }) => {
    return (
        <>
            <Helmet titleTemplate="%s - MyTube" defaultTitle="MyTube" defer={false}>
                {title && <title>{title}</title>}
                <meta name="description" content={description} />
            </Helmet>
            <section id="subscription">
                <h2 className="blind">구독 영상</h2>
                <div className="container">
                    <div className="inner">
                        <div className="subscription">
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

export default SubscriptionVideo;
