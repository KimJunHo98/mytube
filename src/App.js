import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ActiveMenuProvider } from "./context/useActiveMenu";

import Header from "./components/section/Header";
import Main from "./components/section/Main";
import Home from "./pages/Home";
import Recommend from "./pages/Recommend";
import Subscribe from "./pages/Subscribe";
import Shorts from "./pages/Shorts";
import SubscriptionVideo from "./pages/SubscriptionVideo";
import Search from "./pages/Search";
import Not from "./pages/Not";
import Menu from "./pages/Menu";
import Player from "./pages/Player";

const App = () => {
    return (
        <ActiveMenuProvider>
            <HelmetProvider>
                <BrowserRouter>
                    <Header />
                    <Menu />
                    <Main>
                        <Routes>
                            <Route path="/" element={<Home description="홈페이지 입니다." />} />
                            <Route
                                path="/subscription"
                                element={<SubscriptionVideo description="구독한 채널의 영상 페이지 입니다." />}
                            />
                            <Route path="/recommend" element={<Recommend description="추천 영상 페이지 입니다." />} />
                            <Route
                                path="/subscribe/:subscribeId"
                                element={<Subscribe description="구독한 채널 페이지 입니다." />}
                            />
                            <Route path="/shorts" element={<Shorts description="쇼츠 영상 페이지 입니다." />} />
                            <Route path="/player/:id/*" element={<Player />} />
                            <Route path="/search/:searchId" element={<Search />} />
                            <Route path="*" element={<Not />} />
                        </Routes>
                    </Main>
                </BrowserRouter>
            </HelmetProvider>
        </ActiveMenuProvider>
    );
};

export default App;
