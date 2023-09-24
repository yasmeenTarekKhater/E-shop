import React from "react";
import './about.css'
const About = () => {
    return ( 
        <>
        <div className=" sectionn">
            <div className="containerr">
                <div className="titlee">
                    <h1 className="mb-5">About Us</h1>
                </div>
                <div className="contenttt">
                    <div className="articaleee"><h3>Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Hic reprehenderit inventore ipsam libero rem soluta,
                        dolore saepe
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
                        Culpa non saepe quo accusamus exercitationem deleniti nostrum vero sapiente repellat nihil 
                        dolor, maxime dolorum ducimus, id iusto aperiam et! Dolorum, neque.</p>
                        <div className="buttonnn">
                            <a href="https://www.google.com/">Read More</a>
                        </div>
                        </div>
                </div>
                <div className="image-sectionnn">
                    <img src="./images/8.jpg" alt="" />
                </div>
                <div className="scoiall">
                    <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.facebook.com/"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.facebook.com/"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
        {/* *******************************************8 */}
        <div className="team-sectionn">
            <div className="containerrr">
                <div className="row">
                    <div className="titleee">
                        <h1>Our Team</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ad minima dolore tempora consequuntur necessitatibus recusandae,
                            </p>
                    </div>
                </div>
                <div className="team-cardd">
                    <div className="carddd">
                        <div className="imagge-section">
                            <img src="./images/1.jpg " alt="" />
                        </div>
                        <div className="conntent">
                            <h3>Omar</h3>
                            <h4>Web Developer</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nostrum hic quo blanditiis quod error ratione tempora
                            </p>
                        </div>
                    </div>
                    <div className="carddd">
                        <div className="imagge-section">
                            <img src="./images/2.jpg " alt="" />
                        </div>
                        <div className="conntent">
                            <h3>Mona</h3>
                            <h4>Web Designer</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nostrum hic quo blanditiis quod error ratione tempora
                            </p>
                        </div>
                    </div>
                    <div className="carddd">
                        <div className="imagge-section">
                            <img src="./images/3.jpg " alt="" />
                        </div>
                        <div className="conntent">
                            <h3>Ali</h3>
                            <h4>Back end Developer</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nostrum hic quo blanditiis quod error ratione tempora
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
);
}

export default About;