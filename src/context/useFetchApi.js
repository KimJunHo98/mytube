import { useState, useEffect } from "react";
import axios from "axios";

const useFetchApi = () => {
    const [videos, setVideos] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=16&regionCode=kr&";
    const videoEndPoint = `${API_URL}key=${API_KEY}`;

    const getVideos = () => {
        axios
            .get(videoEndPoint, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((result) => {
                const status = result.status;

                if (status === 200) {
                    const videos = result.data.items;

                    setVideos(videos);
                    console.log(videos);
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
    }, []);

    return { videos };
};

export default useFetchApi;
