import { useState, useEffect } from "react";
import axios from "axios";

const useFetchApi = () => {
    const [videos, setVideos] = useState([]);
    const [videoPlayer, setvideoPlayer] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = "https://youtube.googleapis.com/youtube/v3/";
    const videoEndPoint = `${API_URL}videos?part=snippet&chart=mostPopular&maxResults=16&regionCode=kr&key=${API_KEY}`;
    const PlayerEndPoint = `${API_URL}videos?part=player&chart=mostPopular&maxResults=16&regionCode=kr&key=${API_KEY}`;

    const getVideos = () => {
        axios
            .get(videoEndPoint)
            .then((result) => {
                const status = result.status;

                if (status === 200) {
                    const videos = result.data.items;

                    setVideos(videos);
                } else if (status === 404) {
                    console.log("404 error");
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const getVideoPlayer = () => {
        axios
            .get(PlayerEndPoint)
            .then((result) => {
                const status = result.status;

                if (status === 200) {
                    const videos = result.data.items;

                    videos.forEach((video) => {
                        const videoPlayer = video.player.embedHtml;
                        
                        setvideoPlayer(videoPlayer);
                    });
                } else if (status === 404) {
                    console.log("404 error");
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        getVideos();
        getVideoPlayer();
    }, []);

    return { videos, videoPlayer };
};

export default useFetchApi;
