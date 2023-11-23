import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useMenuContext } from "../context/useMenuContext";
import useSearchVideo from "../context/useSearchVideo";

import Menu from "./Menu";

import { ImSpinner8 } from "react-icons/im";

const Search = ({ title, description }) => {
    const { resize } = useMenuContext();
    const { filteredVideos, loading } = useSearchVideo();

    return (
        <>
            <Helmet titleTemplate="%s | MyTube" defaultTitle="MyTube" defer={false}>
                {title && <title>{title}</title>}
                <meta name="description" content={description} />
            </Helmet>

            <Menu />
            {loading ? (
                <div className={`loading_spinner ${resize ? "" : "resize"}`}>
                    <span className="spinner_icon">
                        <ImSpinner8 />
                    </span>
                </div>
            ) : (
                <section id="search" className={resize ? "" : "resize"}>
                    <h2 className="blind">검색 화면</h2>
                    <div className="container">
                        <div className="inner">
                            <div className="search">
                                <article className="search_contents">
                                    <div className="contents_area">
                                        {filteredVideos.map((video, i) => (
                                            <div key={video.id.videoId} className={`video_card card${i + 1}`}>
                                                <Link to={`/player/${video.id.videoId}`} className="video_link">
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
            )}
        </>
    );
};

export default Search;
