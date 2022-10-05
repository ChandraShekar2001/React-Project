import React, { useState } from 'react'
import classes from './styles/Product.module.css'
import AllReveiws from './OldComponents.js/AllReveiws'
import DisplayImage from './OldComponents.js/DisplayImage'
import CarouselItem from './OldComponents.js/CarouselItem';
import ImagesRow from './OldComponents.js/ImagesRow'
import ProductDetailsNav from './OldComponents.js/ProductDetailsNav'
import ProductNameDescription from './OldComponents.js/ProductNameDescription'
import ProductSpecs from './OldComponents.js/ProductSpecs'
import RecomendedProducts from './OldComponents.js/RecomendedProducts'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar, faIndianRupeeSign, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
// import {faStar} from "@fortawesome/free-regular-svg-icons"
import ReactStars from "react-rating-stars-component";


const rating = {
	size: 20,
	count: 5,
	color: "grey",
	activeColor: "orange",
	value: 2.5,
	a11y: true,
	isHalf: true,
	emptyIcon: <FontAwesomeIcon icon={faStar} />,
	halfIcon: <FontAwesomeIcon icon={faStarHalfStroke} />,
	filledIcon: <FontAwesomeIcon icon={faStar} />,
  };


  
  function Product() {
	
	const [state1, setState1] = useState(true)
	const [state2, setState2] = useState(false)
	const [state3, setState3] = useState(false)
	const [state4, setState4] = useState(false)

	const clickHandler1 = () => {
		setState1(true)
		setState2(false)
		setState3(false)
		setState4(false)
	}
	const clickHandler2 = () => {
		setState1(false)
		setState2(true)
		setState3(false)
		setState4(false)
	}
	const clickHandler3 = () => {
		setState1(false)
		setState2(false)
		setState3(true)
		setState4(false)
	}
	const clickHandler4 = () => {
		setState1(false)
		setState2(false)
		setState3(false)
		setState4(true)
	}

	return (
		<body>
			<div className={`${classes["product-main-info"]} `}>
				<div className={classes["product-row"]}>
					<div className={`${classes['product-col-md-8']} ${classes["product-images"]}`}>

						{/* ---------------------------IMages row--------------------------- */}
						<div className={`${classes["all-product-images"]}`}>
							<div className={classes["grid-img-box"]} onClick = {clickHandler1}>
								<img src="./Images/realme Book.png" alt="..." className={classes["grid-img"]} />
							</div>
							<div className={classes["grid-img-box"]} onClick = {clickHandler2}>
								<img src="./Images/realme Band 2.png" alt="..." className={classes["grid-img"]} />
							</div>
							<div className={classes["grid-img-box"]} onClick = {clickHandler3}>
								<img src="./Images/realme Cobble Bluetooth.png" alt="..." className={classes["grid-img"]} />
							</div>
							<div className={classes["grid-img-box"]} onClick = {clickHandler4}>
								<img src="./Images/realme Pad.png" alt="..." className={classes["grid-img"]} />
							</div>
						</div>

						{/* ---------------------------Display Image--------------------------- */}
						<div className={`${classes["product-current-image"]}`}>
							{state1 && <img src="./Images/realme Book.png" alt="..." className={`${classes["main-img"]}`} />}
							{state2 && <img src="./Images/realme Band 2.png" alt="..." className={`${classes["main-img"]}`} />}
							{state3 && <img src="./Images/realme Cobble Bluetooth.png" alt="..." className={`${classes["main-img"]}`} />}
							{state4 && <img src="./Images/realme Pad.png" alt="..." className={`${classes["main-img"]}`} />}
						</div>
					</div>


					{/*------------------------------ Product Name Description Purchase--------------------------- */}
					{/* <ProductNameDescription /> */}
					<div className={`${classes["col-md-4"]} ${classes['product-info']}`}>
						<div className={`${classes["product-details"]} ${classes['font-poppin']}`}>
							<div className={classes["product-name"]}>Realme 9 5G</div>
						</div>

						<div className={`${classes["product-price-rating"]} ${classes['font-poppin']}`}>
							<div className={classes["product-price-box "]}>
								<div className={classes["product-price"]}>
									<FontAwesomeIcon icon={faIndianRupeeSign} style={{ fontSize: '1.3rem', margin: '0 auto' }} />
									14,999
								</div>
							</div>
							<div className={classes["product-rating"]}>
								Rating
								<ReactStars {...rating} />
							</div>
						</div>

						<div className={`${classes["product-description"]} ${classes["font-poppin"]}`} >
							MediaTek Helio G85 Octa-core Processor <br />
							4 GB RAM | 128 GB ROM | Expandable Upto 256 GB <br />
							16.51 cm (6.5 inch) HD+ Display <br />
							50MP+2MP+2MP Primary Camera | 8MP Front Camera <br />
							6000 mAh Battery <br />
						</div>

						<div className={classes["product-purchase"]}>
							<div className={`${classes["add-cart"]}`}>
								<Button variant="outline-warning">Add to Cart</Button>
							</div>
							<div className={`${classes['buy-now']} ${classes["btn-outline-primary"]}`}>
								<Button variant="outline-primary">Buy now</Button>
							</div>
						</div>

					</div>
				</div>
			</div>

			{/* ------------------------------------Recomended Deals--------------------------------------- */}
			<div className={classes["recomended-deals"]}>
				<div className={classes["recomended-products-heading"]}>
					Recomended Products
				</div>
				<div className={`${classes["background-1"]}`}>
					{/*---------------------------------------------- <RecomendedProducts />----------------------Carousel-------------- */}
					<Carousel autoPlay infiniteLoop interval={5000}>
						{/* -------------------------Carousel Slide------------------------- */}
						<div className={`${classes['row']} ${classes["slide-1"]}`}>
							{/*---------------------------- <CarouselItem /> ---------------------------------*/}
							<div className={`${classes["deal-1"]} ${classes['slide-col-3']}`}>
								<div className={classes["card"]}>
									<div className={classes["offer"]}><FontAwesomeIcon icon={faIndianRupeeSign} style={{ fontSize: '0.8rem', margin: '0 auto', color: "#efefef" }} />
										500 Off
									</div>
									<img src="./Images/realme Pad.png" className={classes["card-img-top"]} alt="..." />
									<div className={classes["card-body"]}>
										<p className={classes["card-text"]}><strong>realme Pad</strong></p>
										<p className={classes["card-text"]}>From,<FontAwesomeIcon icon={faIndianRupeeSign} style={{ fontSize: '1rem', margin: '0 auto' }} />
										13,999</p>
									</div>
								</div>
							</div>
							{/*---------------------------- <CarouselItem /> ---------------------------------*/}
							<div className={`${classes["deal-1"]} ${classes['slide-col-3']}`}>
								<div className={classes["card"]}>
									<div className={classes["offer"]}><i className={`${classes["fa-indian-rupee-sign"]} ${classes['fa-solid']}`}
										style={{ fontSize: '0.8rem', margin: '0 auto', color: "#efefef" }}></i>500 Off</div>
									<img src="./Images/realme Pad.png" className={classes["card-img-top"]} alt="..." />
									<div className={classes["card-body"]}>
										<p className={classes["card-text"]}><strong>realme Pad</strong></p>
										<p className={classes["card-text"]}>From,<i className={`${classes["fa-indian-rupee-sign"]} ${classes['fa-solid']}`}
											style={{ fontSize: '1rem', margin: '0 auto' }}></i>13,999</p>
									</div>
								</div>
							</div>
							{/*---------------------------- <CarouselItem /> ---------------------------------*/}
							<div className={`${classes["deal-1"]} ${classes['slide-col-3']}`}>
								<div className={classes["card"]}>
									<div className={classes["offer"]}><i className={`${classes["fa-indian-rupee-sign"]} ${classes['fa-solid']}`}
										style={{ fontSize: '0.8rem', margin: '0 auto', color: "#efefef" }}></i>500 Off</div>
									<img src="./Images/realme Pad.png" className={classes["card-img-top"]} alt="..." />
									<div className={classes["card-body"]}>
										<p className={classes["card-text"]}><strong>realme Pad</strong></p>
										<p className={classes["card-text"]}>From,<i className={`${classes["fa-indian-rupee-sign"]} ${classes['fa-solid']}`}
											style={{ fontSize: '1rem', margin: '0 auto' }}></i>13,999</p>
									</div>
								</div>
							</div>
							{/*---------------------------- <CarouselItem /> ---------------------------------*/}
							<div className={`${classes["deal-1"]} ${classes['slide-col-3']}`}>
								<div className={classes["card"]}>
									<div className={classes["offer"]}><i className={`${classes["fa-indian-rupee-sign"]} ${classes['fa-solid']}`}
										style={{ fontSize: '0.8rem', margin: '0 auto', color: "#efefef" }}></i>500 Off</div>
									<img src="./Images/realme Pad.png" className={classes["card-img-top"]} alt="..." />
									<div className={classes["card-body"]}>
										<p className={classes["card-text"]}><strong>realme Pad</strong></p>
										<p className={classes["card-text"]}>From,<i className={`${classes["fa-indian-rupee-sign"]} ${classes['fa-solid']}`}
											style={{ fontSize: '1rem', margin: '0 auto' }}></i>13,999</p>
									</div>
								</div>
							</div>
						</div>
						{/* -------------------------Carousel Slide------------------------- */}
						<div className={`${classes['row']} ${classes["slide-2"]}`}>
							{/*---------------------------- <CarouselItem /> ---------------------------------*/}
							<div className={`${classes["deal-1"]} ${classes['slide-col-3']}`}>
								<div className={classes["card"]}>
									<div className={classes["offer"]}><i className={`${classes["fa-indian-rupee-sign"]} ${classes['fa-solid']}`}
										style={{ fontSize: '0.8rem', margin: '0 auto', color: "#efefef" }}></i>500 Off</div>
									<img src="./Images/realme Pad.png" className={classes["card-img-top"]} alt="..." />
									<div className={classes["card-body"]}>
										<p className={classes["card-text"]}><strong>realme Pad</strong></p>
										<p className={classes["card-text"]}>From,<i className={`${classes["fa-indian-rupee-sign"]} ${classes['fa-solid']}`}
											style={{ fontSize: '1rem', margin: '0 auto' }}></i>13,999</p>
									</div>
								</div>
							</div>
							{/*---------------------------- <CarouselItem /> ---------------------------------*/}
							<div className={`${classes["deal-1"]} ${classes['slide-col-3']}`}>
								<div className={classes["card"]}>
									<div className={classes["offer"]}><i className={`${classes["fa-indian-rupee-sign"]} ${classes['fa-solid']}`}
										style={{ fontSize: '0.8rem', margin: '0 auto', color: "#efefef" }}></i>500 Off</div>
									<img src="./Images/realme Pad.png" className={classes["card-img-top"]} alt="..." />
									<div className={classes["card-body"]}>
										<p className={classes["card-text"]}><strong>realme Pad</strong></p>
										<p className={classes["card-text"]}>From,<i className={`${classes["fa-indian-rupee-sign"]} ${classes['fa-solid']}`}
											style={{ fontSize: '1rem', margin: '0 auto' }}></i>13,999</p>
									</div>
								</div>
							</div>
							{/*---------------------------- <CarouselItem /> ---------------------------------*/}
							<div className={`${classes["deal-1"]} ${classes['slide-col-3']}`}>
								<div className={classes["card"]}>
									<div className={classes["offer"]}><i className={`${classes["fa-indian-rupee-sign"]} ${classes['fa-solid']}`}
										style={{ fontSize: '0.8rem', margin: '0 auto', color: "#efefef" }}></i>500 Off</div>
									<img src="./Images/realme Pad.png" className={classes["card-img-top"]} alt="..." />
									<div className={classes["card-body"]}>
										<p className={classes["card-text"]}><strong>realme Pad</strong></p>
										<p className={classes["card-text"]}>From,<i className={`${classes["fa-indian-rupee-sign"]} ${classes['fa-solid']}`}
											style={{ fontSize: '1rem', margin: '0 auto' }}></i>13,999</p>
									</div>
								</div>
							</div>
							{/*---------------------------- <CarouselItem /> ---------------------------------*/}
							<div className={`${classes["deal-1"]} ${classes['slide-col-3']}`}>
								<div className={classes["card"]}>
									<div className={classes["offer"]}><i className={`${classes["fa-indian-rupee-sign"]} ${classes['fa-solid']}`}
										style={{ fontSize: '0.8rem', margin: '0 auto', color: "#efefef" }}></i>500 Off</div>
									<img src="./Images/realme Pad.png" className={classes["card-img-top"]} alt="..." />
									<div className={classes["card-body"]}>
										<p className={classes["card-text"]}><strong>realme Pad</strong></p>
										<p className={classes["card-text"]}>From,<i className={`${classes["fa-indian-rupee-sign"]} ${classes['fa-solid']}`}
											style={{ fontSize: '1rem', margin: '0 auto' }}></i>13,999</p>
									</div>
								</div>
							</div>
						</div>
						{/* -------------------------Carousel Slide------------------------- */}
					</Carousel>
				</div>
			</div>

			<div className={classes["all-product-details"]}>
				{/* ---------------------------<ProductDetailsNav />-------------------------- */}
				<div className={`${classes["details-navigation"]} ${classes['border']}`}>
					<div className={classes["product-specs"]}>
						SPECS
					</div>
					<div className={classes["product-reviews"]}>
						<p>
							Reviews
						</p>
						<ReactStars {...rating} />
						<p>
							3.0
						</p>
					</div>
				</div>
				{/* --------------------------------------------<ProductSpecs />----------------------------------- */}
				<div className={`${classes['product-specs-main']} ${classes["border"]}`}>
					<div className={classes["main-heading"]}>
						Specifications
					</div>
					<div className={`${classes['general-specs']} ${classes["all-specs-category-box"]}`}>
						<div className={classes["heading"]}>
							General
						</div>
						<div className={`${classes["individual-spec"]} ${classes['row']}`}>
							<div className={`${classes['col-md-3']} ${classes["spec-name"]}`}>
								Whats in the box
							</div>
							<div className={`${classes['specs-details']} ${classes['col-md-6']} ${classes["offset-3"]}`}>
								laptop, charger, waranty card, user manual
							</div>
						</div>

						<div className={`${classes['individual-spec']} ${classes["row"]}`}>
							<div className={`${classes['spec-name']} ${classes["col-md-3"]}`}>
								Model number
							</div>
							<div className={`${classes['specs-details']} ${classes['col-md-6']} ${classes["offset-3"]}`}>
								CB 11ODS8
							</div>
						</div>
						<div className={`${classes['individual-spec']} ${classes["row"]}`}>
							<div className={`${classes['spec-name']} ${classes["col-md-3"]}`}>
								Model name
							</div>
							<div className={`${classes['specs-details']} ${classes['col-md-6']} ${classes["offset-3"]}`}>
								vivo book
							</div>
						</div>
						<div className={`${classes['individual-spec']} ${classes["row"]}`}>
							<div className={`${classes['spec-name']} ${classes["col-md-3"]}`}>
								color
							</div>
							<div className={`${classes['specs-details']} ${classes['col-md-6']} ${classes["offset-3"]}`}>
								Onyx black
							</div>
						</div>
						<div className={`${classes['individual-spec']} ${classes["row"]} ${classes['last']}`}>
							<div className={`${classes['spec-name']} ${classes["col-md-3"]}`}>
								Power Supply
							</div>
							<div className={`${classes['specs-details']} ${classes['col-md-6']} ${classes["offset-3"]}`}>
								65W USB type-C
							</div>
						</div>
					</div>
				</div>
				{/* --------------------------------------------------<AllReveiws />---------------------------------- */}
				<div className={`${classes['product-reviews-all']}`}>
					<div className={classes["main-heading"]}>
						Reviews
					</div>
					{/* -------------------------------<IndividualReview />---------------------------- */}
					<div className={classes["individual-review"]}>
						<div className={classes["individual-review-box"]}>
							<div className={`${classes['row']} ${classes["user-id-rating"]}`}>
								<div className={`${classes['col-md-1']} ${classes["user-dp"]}`}>
									<img src="./Images/Dp-for-reviews.jpeg" alt="..." />
								</div>
								<div className={`${classes['col-3']} ${classes["user-name-review-time"]}`}>
									<div className={classes["user-name"]}>
										User name
									</div>
									<div className={classes["review-time"]}>
										date time
									</div>
								</div>
								<div className={`${classes['col-md-8']} ${classes["user-rating"]}`}>
									<ReactStars {...rating} />
								</div>
							</div>
							<div className={`${classes['row']} ${classes["user-images"]}`}>
								<div className={classes["image"]}>
									<img src="./Images/realme Cobble Bluetooth.png" alt="" />
								</div>

								<div className={classes["image"]}>
									<img src="./Images/realme Cobble Bluetooth.png" alt="" />
								</div>

								<div className={classes["image"]}>
									<img src="./Images/realme Cobble Bluetooth.png" alt="" />
								</div>

								<div className={classes["image"]}>
									<img src="./Images/realme Cobble Bluetooth.png" alt="" />
								</div>
							</div>
							<div className={`${classes['row']} ${classes["user-review"]}`}>
								<div className={classes["user-review-txt"]}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, error?
								</div>
								<div className={classes["like-review"]}>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</body>
	)
}

export default Product