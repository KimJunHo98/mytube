import { useState, useEffect } from "react";
import axios from "axios";

const useFetchApi = () => {
    const [videos, setVideos] = useState([]);
    const [init, setInit] = useState(false);
    
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = "https://youtube.googleapis.com/youtube/v3/";
    const videoEndPoint = `${API_URL}videos?part=snippet&chart=mostPopular&maxResults=16&regionCode=kr&key=${API_KEY}`;

    useEffect(() => {
        axios
            .get(videoEndPoint)
            .then((result) => {
                const status = result.status;

                if (status === 200) {
                    const videos = result.data.items;

                    setVideos(videos);
                    setInit(true);
                } else if (status === 404) {
                    console.log("404 error");
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return { videos, init };
};

export default useFetchApi;
