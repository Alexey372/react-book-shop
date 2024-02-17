import React from 'react'
import "./PopularProducts.sass"

function PopularProducts() {
	return (
		<div className="products__container">
			<div className="products__popular">
				<h2 className="product__title">Популярные товары</h2>
				<ul className="products__list">
					<li className="products__item">
						<a href="/product[id]" aria-label="" className="products__link">
							<picture>
								<source srcset="/images/6189285261.webp" type="image/webp" />
								<img className="product__image" aria-hidden src="/images/6189285261.jpg" alt="product" />
							</picture>
						</a>
					</li>
					<li className="products__item">
						<a href="/product[id]" aria-label="" className="products__link">
							<picture>
								<source srcset="/images/6255851335.webp" type="image/webp" />
								<img className="product__image" aria-hidden src="/images/6255851335.jpg" alt="product" />
							</picture>
						</a>
					</li>
					<li className="products__item">
						<a href="/product[id]" aria-label="" className="products__link">
							<picture>
								<source srcset="/images/6621788745.webp" type="image/webp" />
								<img className="product__image" aria-hidden  src="/images/6621788745.jpg" alt="product" />
							</picture>
						</a>
					</li>
					<li className="products__item">
						<a href="/product[id]" aria-label="" className="products__link">
							<picture>
								<source srcset="/images/6621831824.webp" type="image/webp" />
								<img className="product__image" aria-hidden  src="/images/6621831824.jpg" alt="product" />
							</picture>
						</a>
					</li>
					<li className="products__item">
						<a href="/product[id]" aria-label="" className="products__link">
							<picture>
								<source srcset="/images/6684693636.webp" type="image/webp" />
								<img className="product__image" aria-hidden  src="/images/6684693636.jpg" alt="product" />
							</picture>
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default PopularProducts