import React from "react";
import { Link } from "react-router-dom";

const Search = ({ video, id, i }) => {
    console.log(video);
    
    return (
        <div className="contents_area">
            <div className={`video_card card${i + 1}`}>
                <Link to={`/player/${id}`} className="video_link">
                    <div className="video_thumbnail">
                        <img className="thumbnail_img" src={video.snippet.thumbnails.medium.url} alt={video.snippet.channelTitle} />
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
        </div>
    );
};

export default Search;
