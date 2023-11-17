import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Player = () => {
    const { id } = useParams();
    const [videos, setVideos] = useState([]);

    return (
        <div id="player">
            
        </div>
    );
};

export default Player;
