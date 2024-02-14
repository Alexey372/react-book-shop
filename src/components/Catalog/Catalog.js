import React from "react"
import "./Catalog.sass"

function Catalog() {
	return (
		<section className="catalog">
			<div className="catalog__row">
				<nav className="category__menu">
					<h2 className="category__title">Категории</h2>
					<ul className="category__list">
						<li className="category__item">
							<a href="yazyki-programmirovaniya" className="category__link">Языки программирования</a>
						</li>
						<li className="category__item">
							<a href="/web-razrabotka" className="category__link">Вебразработка</a>
						</li>
						<li className="category__item">
							<a href="/design" className="category__link">Дизайн</a>
						</li>
						<li className="category__item">
							<a href="/informatsionnaya-bezopasnost" className="category__link">Информационная безопасность</a>
						</li>
						<li className="category__item">
							<a href="/mashinnoe-obuchenie" className="category__link">Машинное обучение</a>
						</li>
						<li className="category__item">
							<a href="/baza-dannykh" className="category__link">База данных</a>
						</li>
						<li className="category__item">
							<a href="analiz-dannykh" className="category__link">Анализ данных</a>
						</li>
						<li className="category__item">
							<a href="/operatsionnie-sistemy" className="category__link">Операционные системы</a>
						</li>
						<li className="category__item">
							<a href="/computernie-seti" className="category__link">Компьютерные сети</a>
						</li>
					</ul>
				</nav>
				<div className="banner__sliders">
					<div className="banner__slider">
						<a className="banner__link" href="/catalog" target="_blank">
							<span className="banner__text">Акция 5% на книги.<br /> Скидки действуют до 16 февраля</span>
							<span className="banner__desc">Собрать в корзину</span>
							<div className="banner__img">
								<picture>
									<source srcset="/images/6189285261.webp" type="image/webp" />
									<img src="/images/6189285261.jpg" width="110" height="110" alt="12" />
								</picture>
								<picture>
									<source srcset="/images/6255851335.webp" type="image/webp" />
									<img src="/images/6255851335.jpg" width="110" height="110" alt="12" />
								</picture>
								<picture>
									<source srcset="/images/6621788745.webp" type="image/webp" />
									<img src="/images/6621788745.jpg" width="110" height="110" alt="12" />
								</picture>
								<picture>
									<source srcset="/images/6621831824.webp" type="image/webp" />
									<img src="/images/6621831824.jpg" width="110" height="110" alt="12" />
								</picture>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>	
	)
}

export default Catalog