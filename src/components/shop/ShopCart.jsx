import React, { useState } from "react";

const ShopCart=({shopItems,addToCard})=>{
    const [count, setCount] = useState(0);
    const increment = () => {
    setCount(count + 1)
}
    return(
    <>
        {shopItems.map((shopItems) => {
        return (
            <div className="col-12 col-md-6 col-lg-4" >
            <div className='product mtop'>
                <div className='img'>
                <span className="discount">{shopItems.discount}% Off</span> 
                <img src={shopItems.cover} alt='' />
                <div className='product-like'>
                    <label>0</label> <br />
                    <i className="fa fa-heart" onClick={increment}></i>
                </div>
                </div>
                <div className='product-details'>
                <h3>{shopItems.name}</h3>
                <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                </div>
                <div className="price">
                <h4>{shopItems.price}.00</h4>
                <button onClick={()=>addToCard(shopItems)}><i className="fa fa-plus p-2"></i></button>
                </div>
                </div>
            </div>
            </div>
           
        )
        })}
    </>
    )
}
export default ShopCart;