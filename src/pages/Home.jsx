import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useFetchApi from "../context/useFetchApi";

import { ImSpinner8 } from "react-icons/im";
import { RiArrowDownSLine } from "react-icons/ri";
import { SiShortcut } from "react-icons/si";

const Home = ({ title, description }) => {
    const { videos } = useFetchApi();

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
                            <article className="home_contents">
                                {/* recommend video */}
                                <div className="contents_area">
                                    {videos.slice(0, 8).map((video, i) => (
                                        <div key={video.id} className={`video_card card${i + 1}`}>
                                            <Link to={`/player/${video.id}`} className="video_link">
                                                <div className="video_thumbnail">
                                                    <img
                                                        className="thumbnail_img"
                                                        src={video.snippet.thumbnails.medium.url}
                                                        alt={video.snippet.channelTitle}
                                                    />
                                                </div>
                                                <div className="video_info">
                                                    <ul className="video_details">
                                                        <li className="video_brand_logo"></li>
                                                        <li className="video_title">{video.snippet.title}</li>
                                                    </ul>
                                                    <p className="video_channel">{video.snippet.channelTitle}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                                {/* shorts */}
                                <div className="shorts_area">
                                    <h3 className="shorts_area_title">
                                        <span className="shorts_icon">
                                            <SiShortcut />
                                        </span>
                                        Shorts
                                    </h3>
                                    <div className="shorts_container">
                                        <div className="shorts_card">
                                            <Link to="/" className="shorts_link">
                                                <div className="shorts_thumbnail"></div>
                                                <div className="shorts_info">
                                                    <p className="shorts_title">
                                                        Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1
                                                    </p>
                                                    <div className="shorts_views">view time 150</div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="shorts_card">
                                            <Link to="/" className="shorts_link">
                                                <div className="shorts_thumbnail"></div>
                                                <div className="shorts_info">
                                                    <p className="shorts_title">
                                                        Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1
                                                    </p>
                                                    <div className="shorts_views">view time 150</div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="shorts_card">
                                            <Link to="/" className="shorts_link">
                                                <div className="shorts_thumbnail"></div>
                                                <div className="shorts_info">
                                                    <p className="shorts_title">
                                                        Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1
                                                    </p>
                                                    <div className="shorts_views">view time 150</div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="shorts_card">
                                            <Link to="/" className="shorts_link">
                                                <div className="shorts_thumbnail"></div>
                                                <div className="shorts_info">
                                                    <p className="shorts_title">
                                                        Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1
                                                    </p>
                                                    <div className="shorts_views">view time 150</div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="shorts_card">
                                            <Link to="/" className="shorts_link">
                                                <div className="shorts_thumbnail"></div>
                                                <div className="shorts_info">
                                                    <p className="shorts_title">
                                                        Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1
                                                    </p>
                                                    <div className="shorts_views">view time 150</div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="shorts_card">
                                            <Link to="/" className="shorts_link">
                                                <div className="shorts_thumbnail"></div>
                                                <div className="shorts_info">
                                                    <p className="shorts_title">
                                                        Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1 Video Title 1
                                                    </p>
                                                    <div className="shorts_views">view time 150</div>
                                                </div>
                                            </Link>
                                        </div>
                                        <button className="more_btn">
                                            더보기
                                            <span className="arrow_down">
                                                <RiArrowDownSLine />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                {/* recommend */}
                                <div className="contents_area">
                                    {videos.slice(8).map((video) => (
                                        <div key={video.id} className="video_card">
                                            <Link to={`/player/${video.id}`} className="video_link">
                                                <div className="video_thumbnail">
                                                    <img
                                                        className="thumbnail_img"
                                                        src={video.snippet.thumbnails.medium.url}
                                                        alt={video.snippet.channelTitle}
                                                    />
                                                </div>
                                                <div className="video_info">
                                                    <ul className="video_details">
                                                        <li className="video_brand_logo"></li>
                                                        <li className="video_title">{video.snippet.title}</li>
                                                    </ul>
                                                    <p className="video_channel">{video.snippet.channelTitle}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
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
