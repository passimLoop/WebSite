import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import "./NavBarStyles.css"

const NavBar = () => {

	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	const [color, setColor] = useState(false);
	const changeColor = () => {
		if (window.scrollY >= 100) {
			setColor(true);
		} else {
			setColor(false);
		}
	};

	window.addEventListener('scroll', changeColor);

  	return (
    	<div className={color? "header header-bg" : "header"}>
        	<Link to="/" >
        	    <h1>PassimLoop</h1>  {/* Aca pense en poner el logo más chico en vez del nombre escrito, pero me parece que hay que cambiar algo de los 3 lugares donde aparece el nombre, es muy redundante */}
        	</Link>
			<ul className={click? "nav-menu active" : "nav-menu"}>
				<li><Link to="/">Inicio</Link></li>
				<li><Link to="/about">Acerca de</Link></li>
				<li><Link to="/products">Productos</Link></li>
				<li><Link to="/contact">Contacto</Link></li>
			</ul>
			<div className="hamburger" onClick={handleClick}>
				{click? (
					<FaTimes size={ 20 } style={{ color:"#f4d58d" }}  />
				) : (
					<FaBars size={ 20 } style={{ color:"#f4d58d" }} />
				)}
				
			</div>
		</div>
  	)
}

export default NavBar