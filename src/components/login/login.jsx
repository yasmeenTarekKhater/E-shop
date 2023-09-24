import React, { useState } from "react";
import { Link } from "react-router-dom";
import './sign.css'
const Login = () => {

    const[emaillog , setEmaillog] = useState('');
    const[passwordlog , setPasswordlog] = useState('');
    const[flag , setFlag] = useState(false);
    const[home , setHome] = useState(true);

    const handleLogin = (e) => {
        e.preventDefault();

        let mail = localStorage.getItem('Email').replace(/"/g,"");
        let pass = localStorage.getItem('Password').replace(/"/g,"");
        
        if( emaillog === '' || passwordlog === '' || emaillog !== mail || passwordlog !== pass){
            setFlag(true);
            localStorage.setItem('Flag',true);
        }else{
            setHome(false);
            setFlag(false);
            localStorage.setItem('Flag',false);
        }
    }

    return(
        <>
        {home ? (
        <div className="sectionn">
           <div className="innerSection">
        <form onSubmit={handleLogin} className="container ">
            <h1 className="text-center">Login</h1>
            <div className="form-group ">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control text-center" name="email" placeholder="Enter Email"onChange={(event)=> setEmaillog(event.target.value)}/>
            </div>
            <div className="form-group ">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control text-center" name="password" placeholder="Enter Password"onChange={(event)=> setPasswordlog(event.target.value)}/>
            </div>
            <button type="submit" className="btn btn-success w-25 d-block mx-auto mt-3">Login</button>
            {flag && (
                    <div className="alert alert-danger" role="alert">
                        Please Fill All Fields With Correct Data
                    </div>
                )}
                
        </form>
        </div>
       </div> 
        ) : (
            <div class="alert alert-success " role="alert">
                A simple success alert—check it out!
                Now you can Back to <Link to='/' className="btn btn-outline-success" onClick={()=>{setTimeout(() => {
                    window.location.reload();
                }, 0);}}>Home</Link>
            </div>
            
        )
        }
        </>
    )
}

export default Login ;
