import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { MenuContextProvider } from "./context/useMenuContext";

import Header from "./components/section/Header";
import Main from "./components/section/Main";
import Home from "./pages/Home";
import Not from "./pages/Not";
import Menu from "./pages/Menu";
import Player from "./pages/Player";

const App = () => {
    return (
        <MenuContextProvider>
            <HelmetProvider>
                <BrowserRouter>
                    <Header />
                    <Main>
                        <Routes>
                            <Route path="/" element={<Home description="홈페이지 입니다." />} />
                            <Route path="/player/:id/*" element={<Player description="영상 플레이 페이지 입니다." />} />
                            <Route path="*" element={<Not />} />
                        </Routes>
                    </Main>
                </BrowserRouter>
            </HelmetProvider>
        </MenuContextProvider>
    );
};

export default App;
