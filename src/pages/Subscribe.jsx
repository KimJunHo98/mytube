import React from "react";
import { Helmet } from "react-helmet-async";
import { useMenuContext } from "../context/useMenuContext";

import Menu from "./Menu";

const Subscribe = ({ title, description }) => {
    const { resize } = useMenuContext();

    return (
        <>
            <Helmet titleTemplate="%s | MyTube" defaultTitle="MyTube" defer={false}>
                {title && <title>{title}</title>}
                <meta name="description" content={description} />
            </Helmet>
            <Menu />
            <section id="subscribe" className={resize ? "" : "resize"}>
                <h2 className="blind">구독영상</h2>
                <div className="container">
                    <div className="inner">
                        <div className="subscribe">
                            <div className="contents_area">
                                <div className="video_card card1">
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
                                <div className="video_card card2">
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
                                <div className="video_card card3">
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
                                <div className="video_card card4">
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
                                <div className="video_card card5">
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
                                <div className="video_card card6">
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
                                <div className="video_card card7">
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
                                <div className="video_card card8">
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
                                <div className="video_card card9">
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
                                <div className="video_card card10">
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
                                <div className="video_card card11">
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
                                <div className="video_card card12">
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
                                <div className="video_card card13">
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
                                <div className="video_card card14">
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
                                <div className="video_card card15">
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
                                <div className="video_card card16">
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

export default Subscribe;
