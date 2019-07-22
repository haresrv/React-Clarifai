import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './logo.jpg';
const Logo = () => {

	return (
		<div className='ma4 mt0 '>
			<Tilt className="Tilt br2 shadow-3" options={{ max : 25 }} style={{ height: 70, width: 150 }} >
 				<div className="Tilt-inner"> 
 			 		<img src={logo} alt="logo"/>
 				</div>
			</Tilt>

		</div>

		);
}

export default Logo;