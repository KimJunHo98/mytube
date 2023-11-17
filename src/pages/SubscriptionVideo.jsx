import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useMenuContext } from "../context/useMenuContext";
import useFetchApi from "../context/useFetchApi";

const SubscriptionVideo = ({ title, description }) => {
    const { resize } = useMenuContext();
    const { videos } = useFetchApi();

    return (
        <>
            <Helmet titleTemplate="%s - MyTube" defaultTitle="MyTube" defer={false}>
                {title && <title>{title}</title>}
                <meta name="description" content={description} />
            </Helmet>
            <section id="subscription" className={resize ? "" : "resize"}>
                <h2 className="blind">구독 영상</h2>
                <div className="container">
                    <div className="inner">
                        <div className="subscription">
                            <div className="contents_area">
                                {videos.map((video, i) => (
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SubscriptionVideo;
