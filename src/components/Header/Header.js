import React, { useState, useRef } from "react"
import { useClickOutside } from "../../hooks/useClickOutside"
import "./Header.sass"

import Logo from "./IT book.svg" 
import { AiOutlineUser, AiOutlineSearch, AiOutlineShopping } from "react-icons/ai"

function Header() {
	const [isOpen, setOpen] = useState(false)
	const menuRef = useRef(null)
	useClickOutside(menuRef, () => {
		if (isOpen) setTimeout(() => setOpen(false), 50)
	})

	return (
		<header className="header__main">
			<div className="header__top">
				<a href="/" className="header__link">
					<img className="header__logo" src={Logo} aria-hidden alt="logo" />
				</a>
				<form className="/search" action="#" method="get">
					<div className="header__search">
						<input className="search__input" type="text" />
						<button className="search__button">
							<AiOutlineSearch className="header__icon" />
						</button>
					</div>
				</form>
				<div className="header__menu">
					<button className="menu__button" onClick={() => setOpen(!isOpen)}>
						<AiOutlineUser className="header__icon" />
					</button>
					<nav className={`nav__menu ${isOpen ? "active" : ""}`} ref={menuRef}>
						<ul className="nav__list">
							<li className="nav__item">
								<a href="/personal" className="nav__link">Личный кабинет</a>
							</li>
							<li className="nav__item">
								<a href="/my-orders" className="nav__link">Мои заказы</a>
							</li>
							<li className="nav__item">
								<a href="/favorites" className="nav__link">Избранное</a>
							</li>
							<li className="nav__item">
								<a href="/sign-in" className="nav__link">Войти</a>
							</li>
						</ul>
					</nav>
					<a href="/cart" aria-label="Перейти в корзину" className="menu__link">
						<AiOutlineShopping className="header__icon" />
					</a>
				</div>
			</div>
		</header>
	)
}

export default Header