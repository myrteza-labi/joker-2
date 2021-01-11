import React from 'react'; 
import './AsideCharacterBox.css'; 
import Batman from '../images/ennemies/batman.jpg'; 
import Robin from '../images/ennemies/robin.jpg'; 
import Batgirl from '../images/ennemies/batgirl.jpg'; 
import Nightwing from '../images/ennemies/nightwing.jpg'; 

function AsideCharacterBox(props){
    const character = props.character; 
    
    const batman = character=='Batman'?<div className="carousel-item active">
                        <img src={Batman} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h2>First slide label</h2>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>: null; 


    const robin =   character=='Robin'?<div className="carousel-item active">
                        <img src={Robin} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h2>First slide label</h2>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>: null; 


    const batgirl = character=='Batgirl'?<div className="carousel-item">
                        <img src={Batgirl} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Second slide label</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>: null; 


    const nightwing =  character=='Nightwing'?<div className="carousel-item">
                            <img src={Nightwing} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Third slide label</h2>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </div>
                        </div>: null ; 

    const characterTest = props.characterTest; 

    if (characterTest=='Batman'){
        return (
            <div className="carousel-item active">
                <img src={Batman} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h2>BATMAN</h2>
                    <h3>Le pire ennemie du Joker</h3>
                </div>
            </div>
        )
    }else if (characterTest=='Robin'){
        return (
            <div className="carousel-item ">
                <img src={Robin} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h2>ROBIN</h2>
                    <h3>Il soutient Batman dans sa lutte contre le Joker</h3>
                </div>
            </div>
        )
    } else if (characterTest=='Batgirl'){
        return(
            <div className="carousel-item ">
                <img src={Batgirl} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h2>BATGIRL</h2>
                    <p>Ennemie juré du Joker</p>
                </div>
            </div>
        )
    } else if (characterTest=='Nightwing'){
        return (
            <div className="carousel-item ">
                <img src={Nightwing} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h2>NIGHTWING</h2>
                    <h3>Il trouve toujour un moyen de contrecarer les plan du Joker</h3>
                </div>
            </div>
        )
    }
 

    return (
        {characterTest}
    )
}

export default AsideCharacterBox; 


