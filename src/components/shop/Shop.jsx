import React from "react";
import Catg from "./Catg";
import ShopCart from "./ShopCart";
import "./Style.css";

const Shop = ({shopItems, addToCard}) =>{
    return(
        <>
            <section className="shop background">
                <div className="container d_flex">
                    <Catg/>
                    <div className="container">
                        <div className='heading d_flex'>
                            <div className='heading-left row  f_flex'>
                                <h2>Mobile Phones </h2>
                            </div>
                            <div className='heading-right row '>
                                <span>View all</span>
                                <i className='fa fa-caret-right'></i>
                            </div>
                        </div>
                             <div className="product-content" >
                                <div className="row">
                                    <ShopCart shopItems={shopItems} addToCard={addToCard}/>
                                </div>
                             </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shop ;