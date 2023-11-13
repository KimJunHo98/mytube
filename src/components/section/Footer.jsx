import React from "react";
import { useActiveMenu } from "../../context/useActiveMenu";

const Footer = () => {
    const { activeMenu } = useActiveMenu();

    return (
        activeMenu && (
            <footer id="footer">
                <h2 className="blind">푸터</h2>
                <div className="inner">
                    <div className="footer">
                        <p className="ft_copy">&copy; {new Date().getFullYear()} MyTube made by. KimJunHo</p>
                    </div>
                </div>
            </footer>
        )
    );
};

export default Footer;
