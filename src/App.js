import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ActiveMenuProvider } from "./context/useActiveMenu";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Recommend from "./pages/Recommend";
import Subscribe from "./pages/Subscribe";
import Shorts from "./pages/Shorts";
import SubscriptionVideo from "./pages/SubscriptionVideo";
import Search from "./pages/Search";
import Not from "./pages/Not";
import Menu from "./pages/Menu";

const App = () => {
    return (
        <ActiveMenuProvider>
            <BrowserRouter>
                <Header />
                <Menu />
                <Main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/subscription" element={<SubscriptionVideo />} />
                        <Route path="/recommend" element={<Recommend />} />
                        <Route path="/subscribe/:subscribeId" element={<Subscribe />} />
                        <Route path="/shorts" element={<Shorts />} />
                        <Route path="/search/:searchId" element={<Search />} />
                        <Route path="*" element={<Not />} />
                    </Routes>
                </Main>
                <Footer />
            </BrowserRouter>
        </ActiveMenuProvider>
    );
};

export default App;
