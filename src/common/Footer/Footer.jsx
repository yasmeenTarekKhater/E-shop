import React from "react";
import './Footer.css';

const Footer = () => {
    return(
        <>
            <footer>
                <div className="container grid2">
                    <div className="box">
                    <i class="fab fa-slack fa-3x mb-2 text-danger"></i>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni aut exercitationem. Asperiores quaerat sunt maxime delectus rerum? Voluptate hic in esse atque excepturi, natus</p>
                        <div className="icon d_flex">
                            <div className="img d_flex">
                            <i class="fab fa-google-play"></i>
                                <span>Google Play</span>
                            </div>
                            <div className="img d_flex">
                            <i class="fab fa-app-store-ios"></i>
                                <span>App Store</span>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <h4>About us</h4>
                        <ul>
                            <li>Careers</li>
                            <li>Our Stores</li>
                            <li>Our Cares</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h4>Customer Care</h4>
                        <ul>
                            <li>Help Center</li>
                            <li>How to Buy</li>
                            <li>Track Your Order</li>
                            <li>Corporate & Bulk Purchasing</li>
                            <li>Returns & Refunds</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h4>Contact Us</h4>
                        <ul>
                            <li>70 Washington Square South, New York, NY 10012, United States</li>
                            <li>Email: uilib.help@gmail.com</li>
                            <li>Phone: +1 1123 456 780</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;