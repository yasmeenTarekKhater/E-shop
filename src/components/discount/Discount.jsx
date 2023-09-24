import React from "react";
import Dcard from "./Dcard";

const Discount = () => {
    return(
        <>
            <section className="disocunt background NewArrivals">
                <div className="container">
                    <div className='heading d_flex'>
                        <div className='heading-left roow  f_flex'>
                            <img src='https://img.icons8.com/windows/32/fa314a/gift.png' alt="" />
                            <h2>Big Discounts </h2>
                        </div>
                        <div className='heading-right roow '>
                            <span>View all</span>
                            <i className='fa fa-caret-right'></i>
                        </div>
                    </div>
                    <Dcard/>
                </div>
            </section>
        </>
    )
}

export default Discount ;