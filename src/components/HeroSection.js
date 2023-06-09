import React from 'react'
import {Button} from './Button';
import './HeroSection.css';


function HeroSection(){
    return(
        <div className='hero-container'>
            <video src="C:\Users\rw607294\Downloads\travel-project\react-travel-website\public\videos\video-2.mp4" autoPlay loop muted />
            <h1>Adventure Awaits</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
          </div>
        </div>
    )
}