import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { debounce } from "lodash";

const useSearchVideo = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=16&order=viewCount&regionCode=kr&pageToken=CBAQAA&type=video&q=`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const searchResponse = `${API_URL}${encodeURIComponent(searchText)}&key=${API_KEY}`;

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
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [searchText]);

    const onChange = (e) => {
        setSearchText(e.target.value);
        console.log(searchText);
    };

    const filteredVideos = searchResult.filter(
        (search) =>
            search.snippet.title.toLowerCase().includes(searchText.toLowerCase()) ||
            search.snippet.channelTitle.toLowerCase().includes(searchText.toLowerCase())
    );

    // console.log(filteredVideos);

    const handleInputSubmit = (e) => {
        e.preventDefault();

        setSearchText("");

        if (filteredVideos.length > 0) {
            navigate("/search");
        } else {
            navigate("/");
        }
    };

    return { searchResult, onChange, filteredVideos, searchText, setSearchText, loading, handleInputSubmit };
};

export default useSearchVideo;
