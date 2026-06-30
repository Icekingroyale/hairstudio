// Shared Header and Footer templates for HairStudio763 website
const HEADER_HTML = `
			<!-- extract the navigation -->
			<div class="pbmit-sticky-header pbmit-header-sticky-yes pbmit-sticky-bg-color-blackish"></div>
			<div class="pbmit-header-overlay">
				<div class="pbmit-main-header-area">
					<div class="container">
						<div class="pbmit-header-content d-flex justify-content-between align-items-center">
							<div class="pbmit-header-menu-area d-flex align-items-center">
								<div class="pbmit-logo-area">
									<div class="site-branding">
										<h1 class="site-title">
											<a href="index.html">
												<img class="pbmit-main-logo img-fluid" src="images/logo.png" alt="">
												<h6>HairStudio763</h6>
											</a>
										</h1>
									</div>
								</div>
								<div class="pbmit-menuarea">
									<div class="site-navigation">
										<nav class="main-navigation pbmit-navbar main-menu navbar-expand-xl navbar-light" id="site-navigation">
											<div class="pbmit-menu-wrap">
												<ul class="navigation clearfix" id="pbmit-top-menu">
													<li>
														<a href="index.html">Home</a>
													</li>
													<li>
														<a href="about-us.html">About Us</a>														
													</li>
													<li>
														<a href="services.html">Services</a>														
													</li>
													<li>
														<a href="portfolio-sortable-grid-col-3.html">Portfolio</a>														
													</li>
													<li>
														<a href="blog-grid-col-3.html">Blog</a>
													</li>
													<li><a href="contact-us.html">Contact Us</a></li>
												</ul>
											</div>
										</nav>
									</div>
								</div>
							</div>
							<div class="pbmit-right-box d-flex align-items-center">
								<div class="pbmit-button-box">
									<div class="pbmit-header-button">
										<a href="tel:+1(212)-255-511">															
											<span class="pbmit-header-button-text">+1-123-456-789</span>			
										</a>
									</div>
								</div>
								<div class="pbmit-button-box-second">
									<a href="commerce/shop.html" class="pbmit-btn">
										<span class="pbmit-button-text">SHOP ONLINE</span>
									</a>
								</div>
								<div class="pbmit-burger-menu-wrapper">
									<div class="pbmit-mobile-menu-bg"></div>
									<button id="menu-toggle" title="Menu Toggle" class="nav-menu-toggle">
										<i class="pbmit-base-icon-menu-1"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`;

const FOOTER_HTML = `
			<div class="pbmit-footer-widget-area">
				<div class="container">
					<div class="row">
						<div class="col-md-6 col-lg-4 pbmit-footer-widget pbmit-footer-widget-col-1">
							<aside class="pbmit-two-column-menu widget">
								<h2 class="widget-title">Our Services</h2>
								<ul class="menu">
									<li><a href="service-details.html">Hair Extensions</a></li>
									<li><a href="service-details.html">Face Care</a></li>
									<li><a href="service-details.html">Grooming & Styling</a></li>
									<li><a href="service-details.html">Hair Treatments</a></li>
									<li><a href="service-details.html">Layered Hair</a></li>
									<li><a href="service-details.html">Hair Wash</a></li>
									<li><a href="service-details.html">Hair Straightening</a></li>
									<li><a href="service-details.html">Custom Hair Spa</a></li>
								</ul>
							</aside>
						</div>
						<div class="col-md-6 col-lg-4 pbmit-footer-widget pbmit-footer-widget-col-2">
							<aside class="widget widget-text text-lg-center">
								<div class="pbmit-footer-logo">
									<img src="images/logo.png" alt="" class="img-fluid">
								</div>
								<p>The Glamr is a full-service barber shop that provides specialized Beard trimming and maintenance</p>
								<ul class="pbmit-social-links">
									<li class="pbmit-social-li pbmit-social-facebook">
										<a title="Facebook" href="https://www.facebook.com/" target="_blank">
											<span><i class="pbmit-base-icon-facebook-f"></i></span>
										</a>
									</li>
									<li class="pbmit-social-li pbmit-social-twitter">
										<a title="Twitter" href="https://www.twitter.com/" target="_blank">
											<span><i class="pbmit-base-icon-twitter-2"></i></span>
										</a>
									</li>
									<li class="pbmit-social-li pbmit-social-linkedin">
										<a title="LinkedIn" href="https://www.linkedin.com/" target="_blank">
											<span><i class="pbmit-base-icon-linkedin-in"></i></span>
										</a>
									</li>
									<li class="pbmit-social-li pbmit-social-instagram">
										<a title="Instagram" href="https://www.instagram.com/" target="_blank">
											<span><i class="pbmit-base-icon-instagram"></i></span>
										</a>
									</li>
								</ul>
							</aside>
						</div>
						<div class="col-md-12 col-lg-4 pbmit-footer-widget pbmit-footer-widget-col-3">
							<aside class="widget widget-text">
								<h2 class="widget-title">Our Location</h2>
								<div class="pbmit-timelist-ele-wrapper">
									<div class="pbmit-timelist-wrapper">
										<p class="pbmit-timelist-address">0665 Broadway NY, New York 10001<br> United States of America</p>
										<ul class="pbmit-timelist-list">
											<li>
												<span class="pbmit-timelist-li-title">Working Days</span>
												<span class="pbmit-timelist-time">9AM - 9PM</span>
											</li>
											<li>
												<span class="pbmit-timelist-li-title">Saturday</span>
												<span class="pbmit-timelist-time">10AM - 8PM</span>
											</li>
											<li>
												<span class="pbmit-timelist-li-title">Sunday</span>
												<span class="pbmit-timelist-time">Closed</span>
											</li>
										</ul>
									</div>
								</div>
							</aside>
						</div>
					</div>
				</div>
			</div>
			<div class="pbmit-footer-text-area">
				<div class="container">
					<div class="pbmit-footer-text-inner">
						<div class="row">
							<div class="col-md-6">
								<div class="pbmit-footer-copyright-text-area"> Copyright © 2026 <a href="index.html">HairStudio763</a>, All Rights Reserved.</div>
							</div>
							<div class="col-md-6">
								<div class="pbmit-footer-menu-area">
									<div class="menu-footer-menu-container">
										<ul class="pbmit-footer-menu">
											<li class="menu-item">
												<a href="about-us.html">Privacy Policy</a>
											</li>
											<li class="menu-item">
												<a href="contact-us.html">Terms of use</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`;
