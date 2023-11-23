import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

const useSearchVideo = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = "https://youtube.googleapis.com/youtube/v3/";
    
    useEffect(() => {
        const searchResponse = `${API_URL}search?part=snippet&maxResults=16&order=viewCount&pageToken=CBAQAA&q=${encodeURIComponent(
            searchText
        )}&regionCode=kr&videoCaption=any&key=${API_KEY}`;

        if (searchText.trim() === "") {
            setSearchResult([]);

            return;
        }
    
        const fetchData = debounce(async () => {
            try {
                setLoading(true);

                const result = await axios.get(searchResponse);
                const status = result.status;
    
                if (status === 200) {
                    const videos = result.data.items;
                    setSearchResult(videos);
                } else {
                    console.log(`${status} error`);
                }
            } catch (error) {
                console.error(error);
            }finally {
                setLoading(false);
            }
        }, 300);
    
        fetchData();
    }, [searchText]);

    const onChange = (e) => {
        setSearchText(e.target.value);
    };

    const filteredVideos = searchResult.filter((search) => {
        if (!search || !search.snippet.title) {
            return false;
        }

        const videoTitleLower =
            search.snippet.title.toLowerCase() || search.snippet.channelTitle.toLowerCase() || search.snippet.description.toLowerCase();
        const searchTextLower = searchText.toLowerCase();

        return videoTitleLower.includes(searchTextLower);
    });

    const handleInputSubmit = (e) => {
        e.preventDefault();

        setSearchText("");

        if (filteredVideos.length > 0) {
            navigate("/search");
        } else {
            navigate("/");
        }

        setSearchResult([]);
    };

    return { searchResult, onChange, filteredVideos, searchText, setSearchText, loading, handleInputSubmit };
};

export default useSearchVideo;
