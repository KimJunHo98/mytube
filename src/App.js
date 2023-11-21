import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { MenuContextProvider } from "./context/useMenuContext";

import Header from "./components/section/Header";
import Main from "./components/section/Main";
import Home from "./pages/Home";
import Not from "./pages/Not";
import Player from "./pages/Player";
import Subscribe from "./pages/Subscribe";
import Recommend from "./pages/Recommend";
import Search from "./pages/Search";
import useFetchApi from "./context/useFetchApi";

const App = () => {
    const { videos } = useFetchApi();

    return (
        <MenuContextProvider>
            <HelmetProvider>
                <BrowserRouter>
                    <Header />
                    <Main>
                        <Routes>
                            <Route path="/" element={<Home description="홈페이지 입니다." />} />
                            <Route path="/search" element={<Search description="검색 페이지 입니다." />} />
                            <Route path="/subscribe" element={<Subscribe title="구독" description="구독 영상 페이지 입니다." />} />
                            <Route path="/recommend" element={<Recommend title="추천" description="추천 영상 페이지 입니다." />} />
                            <Route path="/player/:id/*" element={<Player titl={videos.snippet.title} description="영상 플레이 페이지 입니다." />} />
                            <Route path="*" element={<Not />} />
                        </Routes>
                    </Main>
                </BrowserRouter>
            </HelmetProvider>
        </MenuContextProvider>
    );
};

export default App;
