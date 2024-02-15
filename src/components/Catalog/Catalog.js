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
				<div className="banner__sliders slider">
					<div className="banner__slider">
						<a className="banner__link" href="/catalog" target="_blank">
							<div className="banner__img">
								<picture>
									<source srcset="/images/banner.png 2x" />
									<img src="/images/banner.png" width="910" height="200" alt="" />
								</picture>
							</div>
						</a>
					</div>
					<div className="banner__slider">
						<a className="banner__link" href="/catalog" target="_blank">
							<div className="banner__img">
								<picture>
									<source srcset="/images/banner2.png 2x" />
									<img src="/images/banner2.png" width="910" height="200" alt="" />
								</picture>
							</div>
						</a>
					</div>
					<div className="banner__slider">
						<a className="banner__link" href="/catalog" target="_blank">
							<div className="banner__img">
								<picture>
									<source srcset="/images/banner3.png 2x" />
									<img src="/images/banner3.png" width="910" height="200" alt="" />
								</picture>
							</div>
						</a>
					</div>
					<div className="banner__nav">
						
					</div>
				</div>
			</div>
		</section>	
	)
}

export default Catalog