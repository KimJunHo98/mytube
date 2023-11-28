import React from "react";
import { Helmet } from "react-helmet-async";
import { useMenuContext } from "../context/useMenuContext";

import Menu from "./Menu";

const Recommend = ({ title, description }) => {
    const { resize } = useMenuContext();

    return (
        <>
            <Helmet titleTemplate="%s | MyTube" defaultTitle="MyTube" defer={false}>
                {title && <title>{title}</title>}
                <meta name="description" content={description} />
            </Helmet>
            <Menu />
            <section id="recommend" className={resize ? "" : "resize"}>
                <h2 className="blind">추천영상</h2>
                <div className="container">
                    <div className="inner">
                        <div className="recommend">
                            <div className="contents_area">
                                <div className="video_card">
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
                                </div>
                                <div className="video_card">
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
                                </div>
                                <div className="video_card">
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
                                </div>
                                <div className="video_card">
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
                                </div>
                                <div className="video_card">
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
                                </div>
                                <div className="video_card">
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
                                </div>
                                <div className="video_card">
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
                                </div>
                                <div className="video_card">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Recommend;
