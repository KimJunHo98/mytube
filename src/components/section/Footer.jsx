import React from "react";
import { useMenuContext } from "../../context/useMenuContext";

const Footer = () => {
    const { slide } = useMenuContext();
    
    return (
        slide && (
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
