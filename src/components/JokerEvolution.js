import React from 'react'; 
import './JokerEvolution.css'
import joker1 from '../images/joker/joker-evolution-1.jpeg'; 
import joker2 from '../images/joker/joker-evolution-2.jpeg'; 
import joker3 from '../images/joker/joker-evolution-3.jpeg'; 
import joker4 from '../images/joker/joker-evolution-4.jpeg'; 


function JokerEvolution(props){
    const joker = props.joker; 

    
    if (joker ==='1'){
        return (
            <div className="carousel-item active">
                <img src={joker1} className="img-fluid w-100" alt="Responsive image"></img>
            </div>
        )
    } else if (joker === '2'){
        return (
            <div className="carousel-item ">
                <img src={joker2} className="img-fluid w-100" alt="Responsive image"></img>
            </div>        
        )
    } else if (joker ==='3'){
        return (
            <div className="carousel-item ">
                <img src={joker3} className="img-fluid w-100" alt="Responsive image"></img>
            </div>        
        )
    } else if(joker === '4'){
        return (
            <div className="carousel-item ">
                <img src={joker4} className="img-fluid w-100" alt="Responsive image"></img>
            </div>        
        )
    } else {
        return (
            <p></p>
        )
    } 
}

export default JokerEvolution; 