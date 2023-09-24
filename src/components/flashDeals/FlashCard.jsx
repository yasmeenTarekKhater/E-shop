import React, { useState } from "react";
import Slider from "react-slick";

const NextArrow = (props) => {
    const { onClick } = props
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='next'>
          <i className='fa fa-long-arrow-alt-right'></i>
        </button>
      </div>
    )
  }
  const PrevArrow = (props) => {
    const { onClick } = props
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='prev'>
          <i className='fa fa-long-arrow-alt-left'></i>
        </button>
      </div>
    )
  }

const FlashCard=({productItems,addToCard})=>{
    const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1)
  }
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const [pShow,setname] = useState({});
      var displayProduct = (e) => {
        setname(productItems.filter((element)=> {
          return(
            element.name === e.target.innerText
          )
        })[0])
      }
    return(
       <>
       <Slider {...settings}>
         {productItems.map((productItems) => {
          return (
            <div className='box' key={productItems.id}>
              <div className='product mtop'>
                <div className='img'>
                  <span className="discount">{productItems.discount}% Off</span> 
                  <img src={productItems.cover} className='w-100' alt='' />
                  <div className='product-like'>
                    <label>{count}</label> <br />
                    <i className="fa fa-heart" onClick={increment}></i>
                  </div>
                </div>
                <div className='product-details'>
                  <button className=" bg-transparent" onClick={displayProduct} data-bs-toggle="modal" data-bs-target="#productModal">{productItems.name}</button>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className="price">
                  <h4>{productItems.price}.00</h4>
                  <button onClick={()=>addToCard(productItems)}><i className="fa fa-plus p-2"></i></button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        </Slider>
        <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productLable" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="productLable">{pShow.name}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div className='img'>
                  <span className="discount">{pShow.discount}% Off</span> 
                  <img src={pShow.cover} className='w-100' alt='' />
                </div>
              </div>
              <div class="modal-footer d-flex price justify-content-between">
                  <h4 className="ps-2">price: $ {pShow.price}.00</h4>
                  <button onClick={()=>addToCard(productItems)}><i className="fa fa-plus p-2"></i></button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}
export default FlashCard;