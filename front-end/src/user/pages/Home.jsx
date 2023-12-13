import imageSlider1 from '../../../public/imgs/slider/slider-1.png'

const Home = () => {
  const slideStyle1 = {
    backgroundImage: `url(${imageSlider1})`,
  };

  return (
    <>
    <section className="home-slider position-relative mb-30">
            <div className="container">
                <div className="home-slide-cover mt-30">
                    <div className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                        <div className="single-hero-slider single-animation-wrap" style={ slideStyle1 }>
                            <div className="slider-content">
                                <h1 className="display-2 mb-40">
                                    Do not miss amazing<br />
                                    grocery deals
                                </h1>
                                <p className="mb-65">Sign up for the daily newsletter</p>
                                <form className="form-subcriber d-flex">
                                    <input type="email" placeholder="Your emaill address" />
                                    <button className="btn" type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="slider-arrow hero-slider-1-arrow"></div>
                </div>
            </div>
        </section>

        <section className="banners mb-25">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="banner-img wow animate__animated animate__fadeInUp" data-wow-delay="0">
                            <img src="./imgs/banner/banner-1.png" alt="" />
                            <div className="banner-text">
                                <h4>
                                    Everyday Fresh & <br />Clean with Our<br />
                                    Products
                                </h4>
                                <a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="banner-img wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                            <img src="./imgs/banner/banner-2.png" alt="" />
                            <div className="banner-text">
                                <h4>
                                    Make your Breakfast<br />
                                    Healthy and Easy
                                </h4>
                                <a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-md-none d-lg-flex">
                        <div className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                            <img src="./imgs/banner/banner-3.png" alt="" />
                            <div className="banner-text">
                                <h4>The best Organic <br />Products Online</h4>
                                <a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="product-tabs section-padding position-relative">
            <div className="container">
                <div className="section-title style-2 wow animate__animated animate__fadeIn">
                    <h3>Popular Products</h3>
                    <ul className="nav nav-tabs links" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="nav-tab-one" data-bs-toggle="tab" data-bs-target="#tab-one" type="button" role="tab" aria-controls="tab-one" aria-selected="true">All</button>
                        </li>
                    </ul>
                </div>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                        <div className="row product-grid-4">
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img className="default-img" src="./imgs/shop/product-1-1.jpg" alt="" />
                                                <img className="hover-img" src="./imgs/shop/product-1-2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                            <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="hot">Hot</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2><a href="shop-product-right.html">Seeds of Change Organic Quinoa, Brown, & Red Rice</a></h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: '90%' }}></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$28.85</span>
                                                <span className="old-price">$32.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img className="default-img" src="./imgs/shop/product-2-1.jpg" alt="" />
                                                <img className="hover-img" src="./imgs/shop/product-2-2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                            <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="sale">Sale</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                        </div>
                                        <h2><a href="shop-product-right.html">All Natural Italian-Style Chicken Meatballs</a></h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: "80%" }}></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (3.5)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">By <a href="vendor-details-1.html">Stouffer</a></span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$52.85</span>
                                                <span className="old-price">$55.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img className="default-img" src="./imgs/shop/product-3-1.jpg" alt="" />
                                                <img className="hover-img" src="./imgs/shop/product-3-2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                            <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="new">New</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2><a href="shop-product-right.html">Angie’s Boomchickapop Sweet & Salty Kettle Corn</a></h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: '85%' }}></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">By <a href="vendor-details-1.html">StarKist</a></span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$48.85</span>
                                                <span className="old-price">$52.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img className="default-img" src="./imgs/shop/product-4-1.jpg" alt="" />
                                                <img className="hover-img" src="./imgs/shop/product-4-2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                            <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Vegetables</a>
                                        </div>
                                        <h2><a href="shop-product-right.html">Foster Farms Takeout Crispy Classic Buffalo Wings</a></h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: '90%' }}></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$17.85</span>
                                                <span className="old-price">$19.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img className="default-img" src="./imgs/shop/product-5-1.jpg" alt="" />
                                                <img className="hover-img" src="./imgs/shop/product-5-2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                            <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="best">-14%</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Pet Foods</a>
                                        </div>
                                        <h2><a href="shop-product-right.html">Blue Diamond Almonds Lightly Salted Vegetables</a></h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: '90%' }}></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$23.85</span>
                                                <span className="old-price">$25.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img className="default-img" src="./imgs/shop/product-6-1.jpg" alt="" />
                                                <img className="hover-img" src="./imgs/shop/product-6-2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                            <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                        </div>
                                        <h2><a href="shop-product-right.html">Chobani Complete Vanilla Greek Yogurt</a></h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: '90%' }}></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$54.85</span>
                                                <span className="old-price">$55.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img className="default-img" src="./imgs/shop/product-7-1.jpg" alt="" />
                                                <img className="hover-img" src="./imgs/shop/product-7-2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                            <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Meats</a>
                                        </div>
                                        <h2><a href="shop-product-right.html">Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g</a></h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: '90%' }}></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$32.85</span>
                                                <span className="old-price">$33.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img className="default-img" src="./imgs/shop/product-8-1.jpg" alt="" />
                                                <img className="hover-img" src="./imgs/shop/product-8-2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                            <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="sale">Sale</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2><a href="shop-product-right.html">Encore Seafoods Stuffed Alaskan Salmon</a></h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: '90%' }}></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$35.85</span>
                                                <span className="old-price">$37.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img className="default-img" src="./imgs/shop/product-9-1.jpg" alt="" />
                                                <img className="hover-img" src="./imgs/shop/product-9-2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                            <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="hot">Hot</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Coffes</a>
                                        </div>
                                        <h2><a href="shop-product-right.html">Gorton’s Beer Battered Fish Fillets with soft paper</a></h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: '90%' }}></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">By <a href="vendor-details-1.html">Old El Paso</a></span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$23.85</span>
                                                <span className="old-price">$25.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                                <div className="product-cart-wrap wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img className="default-img" src="./imgs/shop/product-10-1.jpg" alt="" />
                                                <img className="hover-img" src="./imgs/shop/product-10-2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                            <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Cream</a>
                                        </div>
                                        <h2><a href="shop-product-right.html">Haagen-Dazs Caramel Cone Ice Cream Ketchup</a></h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: '50%' }}></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (2.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">By <a href="vendor-details-1.html">Tyson</a></span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$22.85</span>
                                                <span className="old-price">$24.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home