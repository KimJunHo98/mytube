import React from "react";
import { Helmet } from "react-helmet-async";

const Shorts = ({ title, description }) => {
    return (
        <>
            <Helmet titleTemplate="%s | MyTube" defaultTitle="MyTube" defer={false}>
                {title && <title>{title}</title>}
                <meta name="description" content={description} />
            </Helmet>
            <section id="shorts">
                <h2 className="blind">쇼츠 영상</h2>
                <div className="container">
                    <div className="inner">
                        <div className="shorts">
                            <div className="shorts_area">
                                <div className="shorts_card">
                                    <div className="shorts_thumbnail">
                                        <div className="shorts_info">
                                            <ul className="video_brand">
                                                <li className="brand_logo"></li>
                                                <li className="brand_name">gudok</li>
                                            </ul>
                                            <p className="shorts_title">Video Title 1 Video Title 1 Video Title 1</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="shorts_card">
                                    <div className="shorts_thumbnail">
                                        <div className="shorts_info">
                                            <ul className="video_brand">
                                                <li className="brand_logo"></li>
                                                <li className="brand_name">gudok</li>
                                            </ul>
                                            <p className="shorts_title">Video Title 1 Video Title 1 Video Title 1</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="shorts_card">
                                    <div className="shorts_thumbnail">
                                        <div className="shorts_info">
                                            <ul className="video_brand">
                                                <li className="brand_logo"></li>
                                                <li className="brand_name">gudok</li>
                                            </ul>
                                            <p className="shorts_title">Video Title 1 Video Title 1 Video Title 1</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="shorts_card">
                                    <div className="shorts_thumbnail">
                                        <div className="shorts_info">
                                            <ul className="video_brand">
                                                <li className="brand_logo"></li>
                                                <li className="brand_name">gudok</li>
                                            </ul>
                                            <p className="shorts_title">Video Title 1 Video Title 1 Video Title 1</p>
                                        </div>
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

export default Shorts;
