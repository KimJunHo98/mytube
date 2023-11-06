import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Today from "../pages/Today";
import Channel from "../pages/Channel";
import Video from "../pages/Video";
import Search from "../pages/Search";
import Not from "../pages/Not";

const Main = () => {
    return (
        <main id="main" role="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/today" element={<Today />} />
                <Route path="/channel/:channelId" element={<Channel />} />
                <Route path="/video/:videoId" element={<Video />} />
                <Route path="/search/:searchId" element={<Search />} />
                <Route path="*" element={<Not />} />
            </Routes>
        </main>
    );
};

export default Main;
