import React from "react";
import { FaPhone } from "react-icons/fa";
import "./FooterStyles.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="phone">
                        <FaPhone size={20} style={{ color: "#f4d58d", marginRight: "2rem" }} />
                        <p>(11) 38774301 / (261) 6117708 / (261) 5254453</p>
                    </div>

                </div>
                <div className="right">

                </div>
            </div>
        </div>
    )
}

export default Footer