import React from "react";
import { useActiveMenu } from "../../context/useActiveMenu";
import Home from "../../pages/Home";

const Main = () => {
    const { activeMenu } = useActiveMenu();

    return (
        <main id="main" role="main" style={{ paddingLeft: activeMenu ? "260px" : "88px" }}>
            <Home />
        </main>
    );
};

export default Main;
