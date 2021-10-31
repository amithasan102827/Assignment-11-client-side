import React from 'react';
import "./Benefits.css";

const Benefits = () => {
    return (
        <div className=" mt-4 benefits-bg-color p-4 ">
             <span className="text-danger">MULTIPLE BENEFITS INCLUDED</span>
            <h3 className="text-danger">OUR SERVICES</h3>
        <div className="benefits-container service-container">
           
            <div className="p-4 mx-2">
                <span><i class="fas fa-car-crash fa-3x"></i></span>
                <h3>Insurance</h3>
                <p>Travel Lets You Disconnect & Recharge.One of the best things you can do for your mental health every now and again,</p>
                <button className="benefits-button ">view more</button>
            </div>
            <div className="p-4 mx-2">
                <span><i class="fas fa-procedures fa-3x"></i></span>
                <h3>Medical Care</h3>
                <p>The researchers found that Traveling Relieves Stress and Anxiety</p>
                <button className="benefits-button">view more</button>
            </div>
            <div className="p-4 mx-2">
                <span><i class="fas fa-utensils fa-3x"></i></span>
                <h3>Meals Included</h3>
                <p>Travel Exposes You to New ThingsWhen you travel, you are stepping outside your comfort zone, for one thing.</p>
                <button className="benefits-button">view more</button>
            </div>
            <div className="p-4 mx-2">
                <span><i class="fas fa-key fa-3x"></i></span>
                <h3>Accessibility</h3>
                <p>Travel Makes You Physically Healthier.If you’re an active individual and asking why is travel important, there are some... </p>
                <button className="benefits-button">view more</button>
            </div>
            <div className="p-4 mx-2">
                <span><i class="fas fa-people-arrows fa-3x"></i></span>
                <h3>Customer Care</h3>
                <p>Traveling Can Boost Your Creativity.Are you a student, artist, writer, photographer, chef, advertising manager, or video game..</p>
                <button className="benefits-button">view more</button>
            </div>
            <div className="p-4 mx-2">
                <span><i class="fas fa-shuttle-van fa-3x"></i></span>
                <h3>Shuttle Included</h3>
                <p>Improve your communication skills.you have probably been to places where your native language is not spoken.Sometimes you need..</p>
                <button className="benefits-button">view more</button>
            </div>
        </div>
        </div>
    );
};

export default Benefits;