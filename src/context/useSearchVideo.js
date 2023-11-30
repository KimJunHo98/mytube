import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useSearchVideo = () => {
    const [viewCount, setViewCount] = useState([]);
    const [date, setDate] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL1 = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&channelId=UCom6YhUY62jM52nIMjf5_dw&order=viewCount&pageToken=CBAQAA&q=%EC%98%A4%ED%82%B9&regionCode=kr&type=video`;
    const API_URL2 = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&channelId=UCom6YhUY62jM52nIMjf5_dw&order=date&pageToken=CBAQAA&q=%EC%98%A4%ED%82%B9&regionCode=kr&type=video`;

    const fetchVideos = async () => {
        setLoading(true);

        try {
            const apiUrl1 = `${API_URL1}&key=${API_KEY}`;
            const apiUrl2 = `${API_URL2}&key=${API_KEY}`;

            const result1 = await axios.get(apiUrl1);
            const result2 = await axios.get(apiUrl2);
            
            const status1 = result1.status;
            const status2 = result2.status;

            if (status1 === 200 && status2 === 200) {
                const videos1 = result1.data.items;
                const videos2 = result2.data.items;

                setViewCount(videos1);
                setDate(videos2);
            } else {
                console.error(`${status1} error`);
                console.error(`${status2} error`);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVideos();
    }, []);

    const onChange = (e) => {
        setSearchText(e.target.value);
    };

    const filteredVideos1 = viewCount.filter((search) => {
        const searchTitleLower = search.snippet.title.toLowerCase() || search.snippet.channelTitle.toLowerCase();
        const searchTextLower = searchText.toLowerCase();

        return searchTitleLower.includes(searchTextLower);
    });
    const filteredVideos2 = date.filter((search) => {
        const searchTitleLower = search.snippet.title.toLowerCase() || search.snippet.channelTitle.toLowerCase();
        const searchTextLower = searchText.toLowerCase();

        return searchTitleLower.includes(searchTextLower);
    });


    const handleInputSubmit = (e) => {
        e.preventDefault();

        setSearchText("");

        if (filteredVideos1.length > 0 && filteredVideos2.length > 0) {
            navigate("/search");
        } else {
            navigate("/");
        }
    };

    return { onChange, filteredVideos1, filteredVideos2, searchText, setSearchText, loading, handleInputSubmit };
};

export default useSearchVideo;
