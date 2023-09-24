import React from "react";
import Navbar from "./Navbar";
import"./Header.css";
import Search from "./Search";

const Header=({cartItem})=>{
return(
    <div className="Header sticky-top">
        <Search cartItem={cartItem} />
        <Navbar />
    </div>
)

}
export default Header