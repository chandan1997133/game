import React from 'react'
import '../App.css';
import pic from '../image/well 2.png';
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function MainPage() {
    
    const [Email, setEmail] = useState();
    const navigate = useNavigate();

    function handaleSbmit(event) {
        event.preventDefault();
        sessionStorage.setItem('Email', Email)
        navigate("/spinwheel");
    };

    return (
        <div className='mainPage'>
            <div className='main'>
                <div className='fhalf'>
                    <img src={pic} alt="SpinImage" />
                </div>
                <form className='rhalf' onSubmit={handaleSbmit}>
                    <h1>Spin a wheel for</h1>
                    <h1> serprise offer</h1>
                    <input type="email" onChange={(event) => setEmail(event.target.value)} name="Email" placeholder='Enter the valid Email' required /><br></br><br></br>
                    <input type='submit' className='btn' value="Try Your Luck" /><br></br>
                </form>
            </div>
            <Outlet />
        </div>
    )
}

export default MainPage;
