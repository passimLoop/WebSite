import React from "react";
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import "./FooterStyles.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    {/*   Hay que ver si esto lo ponemos, no tenemos un lugar fisico todavia */}
                     <div className="home">  
                        <FaHome size={20} style={{ color: "#f4d58d", marginRight: "2rem" }} />
                        <p>Agregar ubicación....</p>
                    </div> 
                    <div className="phone">
                        <FaPhone size={20} style={{ color: "#f4d58d", marginRight: "2rem" }} />
                        <p>(11) 38774301 / (261) 6117708 / (261) 5254453</p>
                    </div>
                    <div className="email">
                        <FaMailBulk size={20} style={{ color: "#f4d58d", marginRight: "2rem" }} />
                        <p>passimloop@gmail.com</p>
                    </div>
                </div>
                <div className="right">
                    <h4>Acerca de nosotros</h4>
                    <p>Somos una empresa enfocada en la presencia digital de personas y organismos a través de diversos medios, como sitios web, aplicaciones web, landing pages, menús digitales, entre otros.</p>
                    {/* No tenemos aún un facebook ni linkedIn para poner.*/}
                    <div className="social">
                        <div className="email">   
                            <FaFacebook size={20} style={{ color: "#f4d58d", marginRight: "1rem" }} />
                        </div>
                        <div className="email">
                            <FaLinkedin size={20} style={{ color: "#f4d58d", marginRight: "1rem" }} />
                        </div> 
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer