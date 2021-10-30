import React from 'react';
import "./Benefits.css";

const Benefits = () => {
    return (
        <div className=" mt-4 benefits-bg-color p-4">
             <span className="text-danger">MULTIPLE BENEFITS INCLUDED</span>
            <h3 className="text-danger">OUR SERVICES</h3>
        <div className="benefits-container ">
           
            <div className="p-4 mx-2">
                <span><i class="fas fa-car-crash fa-3x"></i></span>
                <h3>Insurance</h3>
                <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.</p>
                <button className="benefits-button ">view more</button>
            </div>
            <div className="p-4 mx-2">
                <span><i class="fas fa-procedures fa-3x"></i></span>
                <h3>Medical Care</h3>
                <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.</p>
                <button className="benefits-button">view more</button>
            </div>
            <div className="p-4 mx-2">
                <span><i class="fas fa-utensils fa-3x"></i></span>
                <h3>Meals Included</h3>
                <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.</p>
                <button className="benefits-button">view more</button>
            </div>
            <div className="p-4 mx-2">
                <span><i class="fas fa-key fa-3x"></i></span>
                <h3>Accessibility</h3>
                <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.</p>
                <button className="benefits-button">view more</button>
            </div>
            <div className="p-4 mx-2">
                <span><i class="fas fa-people-arrows fa-3x"></i></span>
                <h3>Customer Care</h3>
                <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.</p>
                <button className="benefits-button">view more</button>
            </div>
            <div className="p-4 mx-2">
                <span><i class="fas fa-shuttle-van fa-3x"></i></span>
                <h3>Shuttle Included</h3>
                <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.</p>
                <button className="benefits-button">view more</button>
            </div>
        </div>
        </div>
    );
};

export default Benefits;