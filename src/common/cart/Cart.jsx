import React from "react";
import"./style.css"
import { Link } from "react-router-dom";
const Cart=({cartItem,addToCard, decreaseQty,removeCard})=>{
    const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0);
    let flag = (localStorage.getItem('Flag'));
    //var newNdata = Ndata ;
    return(
        <>
        <section className='cart-items'>
        <div className='container d_flex'>
        <div className='cart-details'>
            {cartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}
            
            {cartItem.map((item) => {
              const productQty = item.price * item.qty

            return (
                <div className='cart-list product d_flex' key={item.id}>
                <div className='img'>
                    <img src={item.cover} alt='' />
                </div>
                <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                        <span>${productQty}.00</span>
                        </h4>
                    </div>
                    <div className='cart-items-function'>
                    <div className='removeCart'>
                    <button className='removeCart'onClick={() =>removeCard(item)}>
                        <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div className='cartControl d_flex'>
                        <button className='incCart' onClick={() => addToCard(item)}>
                        <i className='fa fa-plus'></i>
                        </button>
                        <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa fa-minus'></i>
                        </button>
                    </div>
                    </div>
                    <div className='cart-item-price'></div>
                </div>
                )
                })}
                </div>

                <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
                <h4>Total Price :</h4>
                <h3>${totalPrice}.00</h3>
            </div>
            {/* <button className="btn btn-danger  mt-5 ms-2" id="login">buy</button> */}

            {(flag ==="false")?(
        <div className='col-5 col-sm-3 col-lg-2 m-1 position-relative adding d-flex justify-content-center'>
            <button className="bg-transparent">
                <Link to='/buy'>
                <button className="btn btn-danger  mt-5 ms-2" id="login">buy</button>
                </Link>
            </button>
        </div>
        ):(
        <div className='col-5 col-sm-3 col-lg-1 m-1 position-relative adding d-flex justify-content-center'>
            <button className="bg-transparent" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <button className="btn btn-danger  mt-5 ms-2" id="login">buy</button>
            </button>
            {/* Modal  */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Attention</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                    <h3>Sorry You Should Sign Up First</h3>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <Link to='/signUp'>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Sign Up</button>
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        )}
            </div>
            
                </div>
                
                </section>
        </>
    )
}
export default Cart;