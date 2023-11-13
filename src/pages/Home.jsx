import React from "react";
import { Helmet } from "react-helmet-async";
import { ImSpinner8 } from "react-icons/im";
import { RiArrowDownSLine } from "react-icons/ri";
// import SubscriptionVideo from "./SubscriptionVideo";
// import Shorts from "./Shorts";
// import Recommend from "./Recommend";

const Home = ({ title, description }) => {
    return (
        <>
            <Helmet titleTemplate="%s | MyTube" defaultTitle="MyTube" defer={false}>
                {title && <title>{title}</title>}
                <meta name="description" content={description} />
            </Helmet>
            <section id="home">
                <h2 className="blind">홈화면</h2>
                <div className="container">
                    <div className="inner">
                        <div className="home">
                            <div className="loading_spinner">
                                <span className="spinner_icon">
                                    <ImSpinner8 />
                                </span>
                            </div>
                            {/* map함수 처리해야함 */}

                            <article className="home_contents">
                                {/* <SubscriptionVideo/>
                                <Shorts/>
                                <Recommend/> */}
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
                                <div className="shorts_area">
                                    <h3 className="shorts_area_title">Shorts</h3>
                                    <div className="shorts_container">
                                        <div className="shorts_card">
                                            <div className="shorts_thumbnail"></div>
                                            <div className="shorts_info">
                                                <p className="shorts_title">
                                                    Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1
                                                </p>
                                                <div className="shorts_channel">Channel Name 1</div>
                                            </div>
                                        </div>
                                        <div className="shorts_card">
                                            <div className="shorts_thumbnail"></div>
                                            <div className="shorts_info">
                                                <p className="shorts_title">
                                                    Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1
                                                </p>
                                                <div className="shorts_channel">Channel Name 1</div>
                                            </div>
                                        </div>
                                        <div className="shorts_card">
                                            <div className="shorts_thumbnail"></div>
                                            <div className="shorts_info">
                                                <p className="shorts_title">
                                                    Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1
                                                </p>
                                                <div className="shorts_channel">Channel Name 1</div>
                                            </div>
                                        </div>
                                        <div className="shorts_card">
                                            <div className="shorts_thumbnail"></div>
                                            <div className="shorts_info">
                                                <p className="shorts_title">
                                                    Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1
                                                </p>
                                                <div className="shorts_channel">Channel Name 1</div>
                                            </div>
                                        </div>
                                        <div className="shorts_card">
                                            <div className="shorts_thumbnail"></div>
                                            <div className="shorts_info">
                                                <p className="shorts_title">
                                                    Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1
                                                </p>
                                                <div className="shorts_channel">Channel Name 1</div>
                                            </div>
                                        </div>
                                        <div className="shorts_card">
                                            <div className="shorts_thumbnail"></div>
                                            <div className="shorts_info">
                                                <p className="shorts_title">
                                                    Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1
                                                </p>
                                                <div className="shorts_channel">Channel Name 1</div>
                                            </div>
                                        </div>
                                        <button className="more_btn">
                                            더보기
                                            <span className="arrow_down">
                                                <RiArrowDownSLine />
                                            </span>
                                        </button>
                                    </div>
                                </div>
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
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
