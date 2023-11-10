import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ActiveMenuProvider } from "./context/useActiveMenu";

import Header from "./components/section/Header";
import Main from "./components/section/Main";
import Footer from "./components/section/Footer";
import Home from "./pages/Home";
import Recommend from "./pages/Recommend";
import Subscribe from "./pages/Subscribe";
import Shorts from "./pages/Shorts";
import SubscriptionVideo from "./pages/SubscriptionVideo";
import Search from "./pages/Search";
import Not from "./pages/Not";
import Menu from "./pages/Menu";
// import Play from "./pages/Play";

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
                                element={<SubscriptionVideo title="구독" description="구독한 채널의 영상 페이지 입니다." />}
                            />
                            <Route path="/recommend" element={<Recommend title="추천" description="추천 영상 페이지 입니다." />} />
                            <Route
                                path="/subscribe/:subscribeId"
                                element={<Subscribe title="구독 채널" description="구독한 채널 페이지 입니다." />}
                            />
                            <Route path="/shorts" element={<Shorts title="쇼츠" description="쇼츠 영상 페이지 입니다." />} />
                            {/* <Route path="/shorts" element={<Play title="영상제목 데이터로 받아와서 뿌려줌" description="" />} /> */}
                            <Route path="/search/:searchId" element={<Search />} />
                            <Route path="*" element={<Not />} />
                        </Routes>
                    </Main>
                    <Footer />
                </BrowserRouter>
            </HelmetProvider>
        </ActiveMenuProvider>
    );
};

export default App;
