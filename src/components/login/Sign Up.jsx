import React, { useState } from "react";
import Login from "./login";
import './sign.css'
const SignUp = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [flag,setFlag] = useState(false);
    const [login,setLogin] = useState(true)
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !email || !password || !phone){
            setFlag(true);
        }else{
            setFlag(false);
            localStorage.setItem('Name',JSON.stringify(name));
            localStorage.setItem('Email',JSON.stringify(email));
            localStorage.setItem('Password',JSON.stringify(password));
            setLogin(!login);
        }
    }

    const handleClick = () => {
        setLogin(!login);
    }
    return(
        <>
        
        {login ? (
           
           <div className="sectionn">
           <div className="innerSection">
            <form onSubmit={handleSubmit} className="container ">
                <h1 className="text-center">Sign Up</h1>
                <div className="form-group my-2">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" placeholder="Enter Your Name" onChange={(event)=> setName(event.target.value)}/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter Your Email" onChange={(event)=> setEmail(event.target.value)}/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Enter Your Password" onChange={(event)=> setPassword(event.target.value)}/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="Phone">Phone No.</label>
                    <input type="phone" className="form-control" name="Phone" placeholder="Enter Your Number" onChange={(event)=> setPhone(event.target.value)}/>
                </div>
                <div className="d-flex flex-column my-4 align-items-center">
                    <button type="submit" className="btn btn-success mb-2 w-25">Save</button>
                    <p>Already Signed in ! <span onClick={handleClick} className="text-primary">Login</span></p>
                </div>

                {flag && (
                    <div className="alert alert-danger" role="alert">
                        Please Fill All Fields
                    </div>
                )}
            </form>
            </div>
            </div>  ):(<Login />)
            }
            
        </>
    )
}

export default SignUp ;