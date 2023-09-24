import React from "react";
import FlashDeals from "../components/flashDeals/FlashDeals";
import Home from "../components/MainPage/Home";
import TopCate from "../components/top/TopCate";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Discount from "../components/discount/Discount";
import Shop from "../components/shop/Shop";
import Annu from "../components/annocuments/Annu";
import Wrapper from "../components/Wrapper/Wrapper";
import Counter from "../components/counter";
const pages =({productItems,cartItem,addToCard,shopItems})=>{
return(
    <> 
        <Home  cartItem={cartItem}/>
        <FlashDeals productItems={productItems} addToCard={addToCard} />
        <TopCate />
        <Counter/>
        <NewArrivals />
        <Discount />
        <Shop shopItems={shopItems} addToCard={addToCard} />
        <Annu />
        <Wrapper />
    </>
    )
}
export default pages