import React from "react"

import "./Header.sass"

import Logo from "./IT book.svg"
import { AiOutlineUser, AiOutlineSearch, AiOutlineShopping } from "react-icons/ai"

function Header() {
	return (
		<header className="header__main">
			<div className="header__top">
				<a href="/" className="header__link">
					<img className="header__logo" src={Logo} aria-hidden alt="logo" />
				</a>
				<form className="" action="#" method="get">
					<div className="header__search">
						<input className="search__input" type="text" />
						<button className="search__button">
							<AiOutlineSearch className="header__icon" />
						</button>
					</div>
				</form>
				<div className="header__menu">
					<button className="menu__button" type="button">
						<AiOutlineUser className="header__icon" />
					</button>
					<a href="/cart" aria-label="Перейти в корзину" className="menu__link">
						<AiOutlineShopping className="header__icon" />
					</a>
				</div>
			</div>
		</header>
	)
}

export default Header