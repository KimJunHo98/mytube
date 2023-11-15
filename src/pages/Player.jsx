// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

const Player = () => {
    // const { id } = useParams();
    // const [videos, setVideos] = useState([]);

    // const API_URL = `https://youtube.googleapis.com/youtube/v3/videos?videoId=${id}`;

    // const getVideos = () => {
    //     axios
    //         .get(API_URL, {
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         })
    //         .then((result) => {
    //             const status = result.status;

    //             if (status === 200) {
    //                 const videos = result.data.items;

    //                 setVideos(videos);
    //                 console.log(videos);
    //             } else if (status === 404) {
    //                 console.log("404 error");
    //             }
    //         })
    //         .catch((err) => {
    //             console.message(err);
    //         });
    // };

    // useEffect(() => {
    //     getVideos();
    // }, []);

    return (
        <div id="player">
            
        </div>
    );
};

export default Player;
