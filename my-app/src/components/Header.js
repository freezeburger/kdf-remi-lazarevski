import React from 'react';
import '../index.css';
import logo from '../logo.png';

class Header extends React.Component {
	
	render() {
		return (
			<header className="logo-header">
				<div className="logo"> <img src={logo} alt='logo-supplynation'/> </div>
			</header>
		)
	}
}

export default Header;