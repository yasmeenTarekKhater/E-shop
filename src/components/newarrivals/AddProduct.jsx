import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Ndata from "./Ndata";

const AddProduct = () => {
    
    const[name , setName] = useState('');
    const[price , setPrice] = useState('');
    const[imgURL , setURL] = useState('');
    const[FieldFlag , setFild] = useState(false);
    const[AddFlag , setAdd] = useState(true);
    
    const handleAdd = (e) => {
        e.preventDefault();
        if(name === "" || price === "" || imgURL === ""){
            setFild(true);
            console.log(FieldFlag);
        }else{
            var path = JSON.stringify(imgURL).split('\\\\');
            var NewObject = {
                cover: `./images/arrivals/${path[2].replace(/"/g,"").replace(/\\/g,"")}`,
                name: JSON.stringify(name).replace(/"/g,""),
                price: JSON.stringify(price).replace(/"/g,"")
            };
            Ndata.push(NewObject);
            setFild(false);
            setAdd(false);
        }
    }

    return(
        <>
        <div className="mx-auto container m-5 p-5 rounded-3 boxShadow w-75 text-center">
            {AddFlag ? (
            <>
            <h1>Enter Details of The New Product</h1>
            <form className="m-5" onSubmit={handleAdd}>
                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Name of Product</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"onChange={(event)=> setName(event.target.value)}/>
                </div>
                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Price of Product</span>
                <input type="number" class="form-control" placeholder="Price" aria-label="Username" aria-describedby="basic-addon1"onChange={(event)=> setPrice(event.target.value)}/>
                </div>
                <div class="mb-3">
                <label for="formFile" class="form-label">Image for product</label>
                <input class="form-control" type="file" id="formFile"onChange={(event)=> setURL(event.target.value)}/>
                </div>
                <button type="submit" className="btn btn-success w-25 d-block mx-auto my-5">Add</button>
                
                {FieldFlag && (
                    <div className="alert alert-danger" role="alert">
                    Should Fill All Fields
                    </div>
                )}
            </form>
            </>
            ) : (
                <div className="alert alert-success" role="alert">
                Product has been added 
                <Link to='/' className="btn btn-outline-success ms-1" >Home</Link>
            </div>
            )}
        </div>
        </>
    )
}

export default AddProduct;