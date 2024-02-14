import React from "react"
import "./Header.sass"

function Header() {
	return (
		<header className="header">
			<div className="header__top">
				<h2 className="header__logo">
					<a href="/" className="header__link">
						
					</a>
				</h2>
				<ul className="nav__list">
					<li className="nav__item">
						<a href="#home" className="nav__link">Home</a>
					</li>
					<li className="nav__item">
						<a href="#about" className="nav__link">About</a>
					</li>
					<li className="nav__item">
						<a href="#blog" className="nav__link">Blog</a>
					</li>
					<li className="nav__item">
						<a href="#contacts" className="nav__link">Contacts</a>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header