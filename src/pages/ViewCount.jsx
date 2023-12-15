import React from "react";
import { Link } from "react-router-dom";
import useSearchVideo from "../context/useSearchVideo";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

const ViewCount = () => {
    const { filteredVideos1 } = useSearchVideo();

    return (
        <>
            {filteredVideos1 ? (
                filteredVideos1.map((video, i) => (
                    <div key={video.id.videoId} className={`video_card card${i + 1}`}>
                        <Link to={`/player/${video.id.videoId}`} className="video_link">
                            <div className="video_thumbnail">
                                <img className="thumbnail_img" src={video.snippet.thumbnails.medium.url} alt={video.snippet.channelTitle} />
                            </div>
                            <div className="video_info">
                                <h3 className="video_title">{video.snippet.title}</h3>
                                <span className="video_upload_time">{dayjs(video.snippet.publishedAt).fromNow()}</span>
                                <ul className="video_details">
                                    <li className="video_brand_logo"></li>
                                    <li className="video_channel">{video.snippet.channelTitle}</li>
                                </ul>
                            </div>
                        </Link>
                    </div>
                ))
            ) : (
                <p className="none">검색 결과가 없습니다.</p>
            )}
        </>
    );
};

export default ViewCount;
