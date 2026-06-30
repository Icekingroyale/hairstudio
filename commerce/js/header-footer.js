// Shared Header and Footer templates for HairStudio763 Commerce pages
const COMMERCE_HEADER_HTML = `
        <style>
            .brand-logo img {
                width: 70px !important;
            }
        </style>
        <div class="top_header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 welcome">
                        <div class="greeting">
                            <ul class="list-unstyled mb-0">
                                <li class="list-inline-item">
                                    <h6 class="h6 mb-0">Welcome to HairStudio763 Shop</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6  col-md-6 col-sm-6 ">
                        <ul class="list-inline list-unstyled  mb-0">
                            <li class="list-inline-item">
                                <div class="dropdown">
                                    <button class="btn" type="button" onclick="location.href='login.html'">Login</button>
                                </div>
                            </li>
                            <li class="list-inline-item">
                                <div class="dropdown">
                                    <button class="btn" type="button" onclick="location.href='register.html'">Register</button>
                                </div>
                            </li>
                            <li class="d-inline-block">
                                <span class="list-inline-item"><a href="https://www.facebook.com/"><i
                                            class="fa fa-facebook" aria-hidden="true"></i></a>
                                </span>
                                <span class="list-inline-item"><a href="https://twitter.com/"><i class="fa fa-twitter"
                                            aria-hidden="true"></i></a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- menu -->
        <div class="menu">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="menu-content">
                            <div class="menu-left">
                                <div class="brand-logo" style="display: flex; align-items: center;">
                                    <a href="shop.html" style="display: flex; align-items: center; text-decoration: none;">
                                        <img src="images/logo.png" alt="logo">
                                        <span style="font-size: 16px; font-weight: 700; color: #333; margin-left: 12px; white-space: nowrap; text-transform: uppercase;">Shop @ HairStudio763</span>
                                    </a>
                                </div>
                            </div>
                            <div class="menu-right ms-auto">
                                <div class="toggle-nav"><i class="fa fa-bars sidebar-bar"></i></div>
                                <nav id="main-nav">
                                    <!-- Sample menu definition -->
                                    <ul id="main-menu" class="sm pixelstrap sm-horizontal">
                                        <li>
                                            <div class="mobile-back text-right">Back<i class="fa fa-angle-right ps-2"
                                                    aria-hidden="true"></i></div>
                                        </li>
                                       
                                        <li><a href="shop.html">SHOP</a>
                                        </li>
                                        <li><a href="product-page(right-slidebar).html">PRODUCT</a></li>
                                        <li>
                                            <a href="wishlist.html">WISHLIST</a>                        
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">Mega menu</a>
                                            <ul class="mega-menu full-mega-menu">
                                                <li>
                                                    <div>
                                                        <div class="row">
                                                            <div class="col mega-box">
                                                                <div class="link-section">
                                                                    <div class="menu-title">
                                                                        <h5>mens's fashion</h5>
                                                                    </div>
                                                                    <div class="mega-content">
                                                                        <ul>
                                                                            <li><a href="javascript:void(0);">sports
                                                                                    wear</a></li>
                                                                            <li><a href="javascript:void(0);">top</a>
                                                                            </li>
                                                                            <li><a href="javascript:void(0);">bottom</a>
                                                                            </li>
                                                                            <li><a href="javascript:void(0);">ethic
                                                                                    wear</a></li>
                                                                            <li><a href="javascript:void(0);">sports
                                                                                    wear</a></li>
                                                                            <li><a href="javascript:void(0);">shirts</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col mega-box">
                                                                <div class="link-section">
                                                                    <div class="menu-title">
                                                                        <h5>women's fashion</h5>
                                                                    </div>
                                                                    <div class="mega-content">
                                                                        <ul>
                                                                            <li><a
                                                                                    href="javascript:void(0);">dresses</a>
                                                                            </li>
                                                                            <li><a href="javascript:void(0);">skirts</a>
                                                                            </li>
                                                                            <li><a href="javascript:void(0);">westarn
                                                                                    wear</a></li>
                                                                            <li><a href="javascript:void(0);">ethic
                                                                                    wear</a></li>
                                                                            <li><a href="javascript:void(0);">sport
                                                                                    wear</a></li>
                                                                            <li><a href="javascript:void(0);">bottom
                                                                                    wear</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col mega-box">
                                                                <div class="link-section">
                                                                    <div class="menu-title">
                                                                        <h5>kids's fashion</h5>
                                                                    </div>
                                                                    <div class="mega-content">
                                                                        <ul>
                                                                            <li><a href="javascript:void(0);">sports
                                                                                    wear</a></li>
                                                                            <li><a href="javascript:void(0);">ethic
                                                                                    wear</a></li>
                                                                            <li><a href="javascript:void(0);">sports
                                                                                    wear</a></li>
                                                                            <li><a href="javascript:void(0);">top</a>
                                                                            </li>
                                                                            <li><a href="javascript:void(0);">bottom</a>
                                                                            </li>
                                                                            <li><a href="javascript:void(0);">ethic
                                                                                    wear</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col mega-box">
                                                                <div class="link-section">
                                                                    <div class="menu-title">
                                                                        <h5>Accessories</h5>
                                                                    </div>
                                                                    <div class="mega-content">
                                                                        <ul>
                                                                            <li><a href="javascript:void(0);">fashion
                                                                                    jewellery</a></li>
                                                                            <li><a href="javascript:void(0);">caps and
                                                                                    hats</a></li>
                                                                            <li><a href="javascript:void(0);">precious
                                                                                    jewellery</a></li>
                                                                            <li><a
                                                                                    href="javascript:void(0);">necklaces</a>
                                                                            </li>
                                                                            <li><a
                                                                                    href="javascript:void(0);">earrings</a>
                                                                            </li>
                                                                            <li><a href="javascript:void(0);">wrist
                                                                                    wear</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col mega-box">
                                                                <div class="link-section">
                                                                    <div class="menu-title">
                                                                        <h5>men's accessories</h5>
                                                                    </div>
                                                                    <div class="mega-content">
                                                                        <ul>
                                                                            <li><a href="javascript:void(0);">ties</a>
                                                                            </li>
                                                                            <li><a
                                                                                    href="javascript:void(0);">cufflinks</a>
                                                                            </li>
                                                                            <li><a href="javascript:void(0);">pockets
                                                                                    squares</a></li>
                                                                            <li><a
                                                                                    href="javascript:void(0);">helmets</a>
                                                                            </li>
                                                                            <li><a
                                                                                    href="javascript:void(0);">scarves</a>
                                                                            </li>
                                                                            <li><a href="javascript:void(0);">phone
                                                                                    cases</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="d-lg-none">
                                            <a href="login.html">Login</a>
                                        </li>
                                        <li class="d-lg-none">
                                            <a href="register.html">Register</a>
                                        </li>
                                    </ul>
                                </nav>
                                 <div class="main_menu_right">
                                     <button onclick="openSearch()"><span class="ti-search"></span></button>
                                     <button onclick="location.href='profile.html'"><span class="ti-user"></span></button>                                
                                     <button onclick="openCart()"><span class="ti-bag"></span></button>                                     
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`;

const COMMERCE_FOOTER_HTML = `
        <style>
            .footer-title img {
                width: 70px !important;
            }
        </style>
        <section class="footer common-bg">
            <ul class="common-decor">
                <li class="circel"></li>
                <li class="circel"></li>
                <li class="circel"></li>
                <li class="plus"></li>
                <li class="plus"></li>
            </ul>
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-md-6 col-sm-6">
                        <div class="footer-title">
                            <img src="images/logo_light.png" alt="" class="mb-3" />
                        </div>
                        <div class="footer-content">
                            <p>Duis sed odio sit amet nibh vulputate cursus a sit amet odio sit amet nibh mauris.</p>
                            <div class="social-icon">
                                <ul class="mb-0">
                                    <li><a href="javascript:void(0);"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa fa-linkedin"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-md-3 col-sm-3 links">
                        <div class="footer-title">
                            <h5>Useful Links</h5>
                        </div>
                        <div class="footer-content">
                            <ul class="useful-link">
                                <li><a href="javascript:void(0);">Email Us</a></li>
                                <li><a href="javascript:void(0);">Help Center</a></li>
                                <li><a href="javascript:void(0);">Gift Plans</a></li>
                                <li><a href="javascript:void(0);">Order Status</a></li>
                                <li><a href="javascript:void(0);">Shipping</a></li>
                                <li><a href="javascript:void(0);">Skins Problems?</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6 col-sm-6">
                        <div class="footer-title">
                            <h5>Portfolio</h5>
                        </div>
                        <div class="footer-content">
                            <ul class="portfolio">
                                <li><a href="portfolio-grid-3.html"><img src="images/photo-gallery/1.jpg" alt="" /> </a>
                                </li>
                                <li><a href="portfolio-grid-3.html"><img src="images/photo-gallery/2.jpg" alt="" /> </a>
                                </li>
                                <li><a href="portfolio-grid-3.html"><img src="images/photo-gallery/3.jpg" alt="" /> </a>
                                </li>
                                <li><a href="portfolio-grid-3.html"><img src="images/photo-gallery/4.jpg" alt="" /> </a>
                                </li>
                                <li><a href="portfolio-grid-3.html"><img src="images/photo-gallery/7.jpg" alt="" /> </a>
                                </li>
                                <li><a href="portfolio-grid-3.html"><img src="images/photo-gallery/9.jpg" alt="" /> </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6 col-sm-6">
                        <div class="footer-title">
                            <h5>contact us</h5>
                        </div>
                        <div class="footer-content">
                            <ul class="contact-list">
                                <li><i class="fa fa-map-marker"></i>Styling demo Store Demo Store India-3654123</li>
                                <li><i class="fa fa-phone"></i>Call Us: 123-456-7898</li>
                                <li><i class="fa fa-envelope-o"></i>Email Us: Support@styling.com</li>
                                <li><i class="fa fa-fax"></i>Fax: 123456</li>
							</ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="copyright">
            <div class="container">
                <div class="text-muted text-center">
                    <h6>Copyrights &copy; 2019 Styling theme. All Rights is Reserved.</h6>
                </div>
            </div>
        </div>
`;
