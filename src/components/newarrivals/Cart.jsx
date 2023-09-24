import React from "react";
import Ndata from "./Ndata";
import { Link } from "react-router-dom";

const Cart = () => {
    
    let flag = (localStorage.getItem('Flag'));
    var newNdata = Ndata ;

    const handleDelete = (e) =>{
        if(flag ==="false"){
            newNdata = newNdata.filter((elm) => {
                return(
                    elm.name !== e.target.parentElement.nextSibling.innerText
                    )
                })
                e.target.parentElement.parentElement.remove();
        }
    }
    return (
    <>
        <div className='product d-flex flex-wrap justify-content-evenly'>
        {newNdata.map((val, index) => {
            return (
            <div className='col-10 col-sm-6 col-md-4 col-lg-2 my-1 p-2 position-relative' key={index}>
                <div className="P-image">
                    <i class="fas fa-trash-alt position-absolute end-0 top-0 m-3 p-2 rounded-3" onClick={handleDelete} data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                    <img src={val.cover}className='w-100 rounded-4' alt='' />
                </div>
                <p>{val.name}</p>
                <span className=" position-absolute bottom-0">${val.price}</span>
            </div>
        )
        })}
        {(flag ==="false")?(
        <div className='col-5 col-sm-3 col-lg-2 m-1 position-relative adding d-flex justify-content-center'>
            <button className="bg-transparent">
                <Link to='/addProduct'>
                <i class="fa fa-plus p-2 fa-3x p-5 rounded-3"></i>
                </Link>
            </button>
        </div>
        ):(
        <div className='col-5 col-sm-3 col-lg-1 m-1 position-relative adding d-flex justify-content-center'>
            <button className="bg-transparent" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fa fa-plus p-2 fa-3x p-5 rounded-3"></i>
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
    </>
)
}

export default Cart