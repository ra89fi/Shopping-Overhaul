import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="half left">
                <h1>Shopping Overhaul</h1>
                <p>
                    Welcome! This week we are offering excellent T-Shirts at
                    even more excellent prices. Grab one for you and one for
                    your loved one too!
                </p>
                <p>
                    <button className="btn btn-primary">Live Demo</button>
                </p>
            </div>
            <div className="half">
                <img
                    src="https://render.fineartamerica.com/images/rendered/default/t-shirt/23/30/images/artworkimages/medium/1/coffee-coding-syntax-aadil-farooq-transparent.png"
                    alt="T shirt"
                />
            </div>
        </div>
    );
};

export default Home;
