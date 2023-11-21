import { useState, useEffect } from "react";
import axios from "axios";

const useSearchVideo = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [searchText, setSearchText] = useState("");

    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = "https://youtube.googleapis.com/youtube/v3/";
    const searchResponse = `${API_URL}search?part=snippet&maxResults=16&order=date&pageToken=CBAQAA&q=%EB%B0%B0%EA%B7%B8&regionCode=kr&videoCaption=any&key=${API_KEY}`;

    useEffect(() => {
        axios
            .get(searchResponse)
            .then((result) => {
                const status = result.status;

                if (status === 200) {
                    const videos = result.data.items;

                    setSearchResult(videos);
                } else if (status !== 200) {
                    console.log(`${status} error`);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, [searchResponse]);

    const onChange = (e) => {
        setSearchText(e.target.value);
    };

    const filteredVideos = searchResult.filter((search) => {
        if (!search || !search.snippet.title) {
            return false;
        }

        const videoTitleLower = search.snippet.title.toLowerCase();
        const searchTextLower = searchText.toLowerCase();

        return videoTitleLower.includes(searchTextLower);
    });

    return { searchResult, onChange, filteredVideos, searchText, setSearchText };
};

export default useSearchVideo;
