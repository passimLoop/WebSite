import React from "react";
import { Link } from "react-router-dom";
import "./HeroImgStyles.css"
import PassimLoopHQ from "../assets/img/passimLoop.jpg"


const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={PassimLoopHQ} alt="logo PassimLoop"/> 
            {/* Ya el <h1> tiene el nombre, no se si poner el logo de fondo es sobre cargar, por ahi cambiar la imagen de fondo */}
        </div>
        <div className="content">
            <p>Empresa de Desarrollo Web</p>
            <h1>Passim Loop</h1>
            <div>
                <Link to="/project" className="btn">Proyectos</Link>
                <Link to="/project" className="btn btn-light">Contacto</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg