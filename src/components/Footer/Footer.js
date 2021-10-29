 import React from 'react';
 import './Footer.css';
 
 const Footer = () => {
     return (
        <div className="backgroudColor mt-4 pt-5">
        <div className="row mx-4 ">
            <div className="col-md-4">
                <div>
                    <h1>travel.com</h1>
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, ab.</span>
                </div>
                <div>
                    <i class="fab fa-facebook icon"></i>
                    <i class="fab fa-twitter icon"></i>
                    <i class="fab fa-youtube icon"></i>
                    <i class="fab fa-linkedin icon"></i>
                </div>
            </div>
            <div className="col-md-4">
                <div>
                    <h4>Useful Links</h4>
                  
                 <p>  <span> Premises</span></p>
                   <p> <span>FAQ's</span></p>
                   <p> <span>Appointment</span></p>
                </div>
            </div>
            <div className="col-md-4">
                <div>
                    <h4>Quick Contact</h4>
                    <div>
                      <p>
                           <i class="fas fa-map-marked-alt contact-icon"></i>
                         A108 Demo Street New York, NY 535022, United States
                            care@mediyot.com
                            +1 234 567 8910
                            2021 © travel.com Design by Amit Hasan.</p>
                          <p>
                            <i class="fas fa-envelope-open-text contact-icon"></i>
                                travel@gmail.com
                                </p>
                            <p>
                            <i class="fas fa-phone contact-icon"></i>
                                +12345678910
                                </p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">

            </div>
        </div>
    </div>
     );
 };
 
 export default Footer;