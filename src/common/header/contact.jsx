import { useRef } from "react";
import emailjs from '@emailjs/browser';

import "./form.css"
const Contact = () => {
    const form =useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ntj8pyo', 'template_jn9rqzp', form.current, 'YZ7ckoaKeFb_lFfqB')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
     return (
      
 <>
 <h2 className="text-center headh2 mt-5">Contact Us</h2>
   <section className="container" id="form_sect"> 
    <div className="row justify-between w-100">
    <div className="col-12 col-lg-6" id="form_img">
    <img src="./images/7.jpg " alt="" />
    </div>
    <div className="col-12 col-lg-6 ">
        <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
    <label for="name" className="form-label mt-3">Name :</label>
    <input type="text" name="user_name" className="form-control" id="name" placeholder="Full Name" required/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address:</label>
    <input type="email" name="user_email" className="form-control" id="exampleInputEmail1" placeholder="Email Address" required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    
  </div>
  <div className="mb-3">
    <label for="subject" className="form-label">Subject:</label>
    <input type="text" name="subject" className="form-control" id="subject" placeholder="subject" required/>
  </div>
  <textarea className="form-control"name="message" placeholder="Enter your message"></textarea>
  <button type="submit" className="btn btn-outline-primary mt-4 w-50  " id="butt">Send</button>
</form>
    </div>
    </div>
    </section>

   {/* **************************** */}

    <section className="container mt-5 sectionnn w-75">
    <div className="row w-100">
      <div className="col-sm-6 col-md-4 try">
      <div className="img-area">
      <img src="./images/4.jpg" alt="" />
      <div className="imgg-text">
        <h3>Easy shopping</h3>
        <h5>Enjoy With our Products</h5>
      </div>
      </div>
      </div>
      <div className="col-sm-6 col-md-4 try">
      <div className="img-area">
      <img src="./images/5.jpg " alt="" />
      <div className="imgg-text">
        <h3>Take Alook</h3>
        <h5>Enjoy With our Products</h5>
      </div>
      </div>
      </div>
      
      <div className="col-md-4 col-sm-6 try">
      <div className="img-area">
      <img src="./images/6.jpg " alt="" />
      <div className="imgg-text">
        <h3>Find your order</h3>
        <h5>Enjoy With our Products</h5>
      </div>
      </div>
      </div>

    </div>
   </section>
    </> 
);
}

export default Contact;