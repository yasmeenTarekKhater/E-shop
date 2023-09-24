import React from "react";
import { Link } from "react-router-dom";
const Buy = () => {
    
    return ( <>
    
        <div className="sectionn">
           <div className="innerSection">
        <form  className="container ">
            <h4 className="text-center">Shipping Adress</h4>
            <div className="form-group ">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control text-center" name="email" placeholder="Enter Email" required/>
            </div>
            <div className="form-group ">
                <label htmlFor="text">Adress</label>
                <input type="text" className="form-control text-center" name="address" placeholder="Enter Adress"required/>
            </div>
            <div className="form-group my-2">
                    <label htmlFor="Phone">Phone No.</label>
                    <input type="phone" className="form-control" name="Phone" placeholder="Enter Your Number" required/>
                </div>
                
                <Link to="/cart">
            <button type="submit" className="btn btn-success w-25 d-block mx-auto mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Save</button>
            </Link>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                
                <div class="modal-body text-center ">
                    <h3>Successful Buy</h3>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    
                </div>
                </div>
            </div>
            </div>
                
        </form>
        </div>
    </div> 
    
        
    
    

    </> );
}

export default Buy;