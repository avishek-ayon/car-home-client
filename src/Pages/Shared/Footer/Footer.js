import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div>
                    <h2>Car <br />Home</h2>
                    <p>Gulshan <br /> Bangladesh</p>
                </div>
                <div>
                    <h3>About Us</h3>
                    <p>Car Home is one of the first and largest website about Car in Bangladesh. We have started our journey since 2021. We have experienced and hard working team and our prime goal is to provide car  related necessary information to the visitors in easy way</p>
                </div>

                <div>
                    <h3>Join With Us</h3>
                    <i class="fas fa-phone-alt"></i> 00000000000 <br />
                    <i class="far fa-envelope"></i> car@m.com <br />
                    <i class="fab fa-facebook"></i> facebook.com
                </div>

            </div>
            <p>Copyright © 2021Car Home A Company subject to the Management and Coordination activities of AUDI AG. All rights reserved. VAT 0000142</p>

        </div>
    );
};

export default Footer;