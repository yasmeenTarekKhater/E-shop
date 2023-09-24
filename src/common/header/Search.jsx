import React from "react"
import { Link } from "react-router-dom"

const Search = ({cartItem}) => {

  let flag = (localStorage.getItem('Flag'));
  let name = (localStorage.getItem('Name'));

  const ShowUser = () => {
    if(flag ==="false"){
      return(
        <>
          <span className="ms-2">{JSON.stringify(name).replace(/"/g,"").replace(/\\/g,"")}</span>
          <i className='fa fa-user icon-circle'></i>
        </>
        )
      }else{
        return(null)
      }
  }

return (
  <>
    <section className='navbar bg-light pt-2'>
      <div className='container d-flex justify-content-evenly'>
        <div className='logo width '>
        <Link class="navbar-brand" to="/"><i class="fab fa-slack fa-2x text-danger"></i></Link>
        </div>
        <div className='align-items-center w-50 d-none d-md-flex'>
          <i className='fa fa-search pe-2'></i>
          <input class="form-control rounded-5 me-2" type="search" placeholder="Search" aria-label="Search"/>
        </div>

        <div className='d-flex align-items-center'>
          <Link to='/signUp'>
            <button className="btn btn-danger ms-2" id="login">Login</button>
          </Link>
            <button className="btn btn-secondary ms-2"onClick={() =>{
              localStorage.setItem('Flag',true);
              window.location.reload()
            }}>logOut</button>
            {ShowUser()}
          <div className='cart position-relative'>
            <Link to='/cart' className="cart-icon">
              <i className='fa fa-shopping-bag icon-circle'></i>
              <span className="bg-danger text-light rounded-5 px-2 position-absolute end-0">{cartItem.length === 0 ? "":cartItem.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Search;
