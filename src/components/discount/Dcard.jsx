import React from "react";
import Ddata from "./Ddata";
import Slider from "react-slick";

const Dcard = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed:500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        responsive:[
            {
            breakpoint:687,
            settings:{
                slidesToShow:2,
                slidesToScroll:1.
            }
            },
            {
                breakpoint:882,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1,
                }
                },
                {
                    breakpoint:1024,
                    settings:{
                        slidesToShow:4,
                        slidesToScroll:1,
                    }
                    }
            
        ]
    }
    return (
    <>
        <Slider {...settings}>
        {Ddata.map((value, index) => {
            return (
            <>
           
            <div className='product' key={index}>
                <div key={index}>
                    <div>
                        <img src={value.cover} alt='' width='100%' />
                    </div>
                    <h4>{value.name}</h4>
                    <span>{value.price}</span>
                </div>
            </div>
           
            </>
            )
        })}
        </Slider>
    </>
    )
}

export default Dcard