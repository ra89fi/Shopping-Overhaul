import React from 'react';
import Reviews from './Reviews';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const goToReviews = () => {
        navigate('/reviews');
    };
    return (
        <div className="content">
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
            <div className="home-reviews">
                <h3>Customer Reviews</h3>
                <Reviews itemNum={3}></Reviews>
                <p style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <button onClick={goToReviews} className="btn btn-primary">
                        See All Reviews
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Home;
