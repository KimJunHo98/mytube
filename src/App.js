import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ActiveMenuProvider } from "./context/useActiveMenu";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
    return (
        <ActiveMenuProvider>
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
            </BrowserRouter>
        </ActiveMenuProvider>
    );
};

export default App;
