import React from "react";
import Sdata from "./Sdata";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlideCard =()=>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        
        appendDots: (dots) => {
            return <ul style={{ margin: "0px" }}>{dots}</ul>
          },
      };
return(
<> 
<Slider {...settings}>
{Sdata.map((value,index)=>{
    return(
        <div className="d-flex align-content-center" key={index}>
        <div>
        <h1>{value.title}</h1>
        <p>{value.desc}</p>
        <button className='btn-primary'>Visit Collections</button>
        </div>
        <div className='w-100 d-none d-md-block'>
                <img src={value.cover} alt=''/>
                </div>
        </div>
    )

    
})
}
</Slider>
</>

)

}
export default SlideCard