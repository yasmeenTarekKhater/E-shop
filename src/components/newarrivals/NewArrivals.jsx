import React from "react"
import Cart from "./Cart"
import "./style.css"

const NewArrivals = () => {
  return (
    <>
        <section className='NewArrivals background'>
        <div className='container'>
            <div className='heading d_flex'>
              <div className='heading-left roow  f_flex'>
              <i class="fas fa-box"></i>
              <h2>New Arrivals </h2>
              </div>
              <div>
                <span>View all</span>
                <i className='fa fa-caret-right'></i>
              </div>
            </div>
          <Cart />
        </div>
      </section>
    </>
)
}

export default NewArrivals