import React from 'react'
import "./Banner.sass"

function Banner() {
	return (
		<section className="banner__container">
			<div className="banner__row">
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
				<div className="banner_sidebar">
					<a href="#banner">
						<picture>
							<source srcset="/images/banner4.png 2x" />
								<img src="/images/banner4.png" width="300" height="400" alt="" />
						</picture>
					</a>
				</div>
			</div>
		</section>	
	)
}

export default Banner