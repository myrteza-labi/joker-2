import React from 'react'; 
import './HomeImage.css'; 
import Joker from '../images/joker/joker-home.jpg';  

function HomeImage(){
    return (
        <img id='HomeImage' alt='' className='HomeImage' src={Joker}/>
    )
}

export default HomeImage; 