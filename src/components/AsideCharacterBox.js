import React from 'react'; 
import './AsideCharacterBox.css'; 
import Batman from '../images/ennemies/batman.jpg'; 
import Robin from '../images/ennemies/robin.jpg'; 
import Batgirl from '../images/ennemies/batgirl.jpg'; 
import Nightwing from '../images/ennemies/nightwing.jpg'; 
import Penguin from '../images/allies/penguin.jpg'; 
import HarleyQuinn from '../images/allies/harley-quinn-2.jpg'; 
import LexLuthor from '../images/allies/lex-luthor.jpg'; 
import BlackMask from '../images/allies/black-mask.jpg'; 


function AsideCharacterBox(props){
    const character = props.character; 
    
    


    if (character==='Batman'){
        return (
            <div className="carousel-item active">
                <img src={Batman} className="d-block w-100" alt=""/>
                <div className="carousel-caption d-none d-md-block">
                    <h2 className='AsideCharacterTitle'>BATMAN</h2>
                    <h3 className='AsideCharacterDescription'>Le pire ennemie du Joker</h3>
                </div>
            </div>
        )
    }else if (character==='Robin'){
        return (
            <div className="carousel-item ">
                <img src={Robin} className="d-block w-100" alt=""/>
                <div className="carousel-caption d-none d-md-block">
                    <h2 className='AsideCharacterTitle'>ROBIN</h2>
                    <h3 className='AsideCharacterDescription'>Il soutient Batman dans sa lutte contre le Joker</h3>
                </div>
            </div>
        )
    } else if (character==='Batgirl'){
        return(
            <div className="carousel-item ">
                <img src={Batgirl} className="d-block w-100" alt=""/>
                <div className="carousel-caption d-none d-md-block">
                    <h2 className='AsideCharacterTitle'>BATGIRL</h2>
                    <h3 className='AsideCharacterDescription'>Ennemie juré du Joker</h3>
                </div>
            </div>
        )
    } else if (character==='Nightwing'){
        return (
            <div className="carousel-item ">
                <img src={Nightwing} className="d-block w-100" alt=""/>
                <div className="carousel-caption d-none d-md-block">
                    <h2 className='AsideCharacterTitle'>NIGHTWING</h2>
                    <h3 className='AsideCharacterDescription'>Il trouve toujour un moyen de contrecarer les plan du Joker</h3>
                </div>
            </div>
        )
    } else if (character==='Harley-quinn'){
        return (
            <div className="carousel-item active ">
                <img src={HarleyQuinn} className="d-block w-100" alt=""/>
                <div className="carousel-caption d-none d-md-block">
                    <h2 className='AsideCharacterTitle'>HARLEY QUINN</h2>
                    <h3 className='AsideCharacterDescription'>Compgne du joker</h3>
                </div>
            </div>
        )
    } else if (character==='Penguin'){
        return (
            <div className="carousel-item ">
                <img src={Penguin} className="d-block w-100" alt=""/>
                <div className="carousel-caption d-none d-md-block">
                    <h2 className='AsideCharacterTitle'>PENGUIN</h2>
                    <h3 className='AsideCharacterDescription'>Associer du joker</h3>
                </div>
            </div>
        )
    } else if (character==='Black-mask'){
        return (
            <div className="carousel-item ">
                <img src={BlackMask} className="d-block w-100" alt=""/>
                <div className="carousel-caption d-none d-md-block">
                    <h2 className='AsideCharacterTitle'>BLACK MASK</h2>
                    <h3 className='AsideCharacterDescription'>Ennemie de Batman</h3>
                </div>
            </div>
        )
    } else if (character==='Lex-luthor'){
        return (
            <div className="carousel-item ">
                <img src={LexLuthor} className="d-block w-100" alt=""/>
                <div className="carousel-caption d-none d-md-block">
                    <h2 className='AsideCharacterTitle'>LEX LUTHOR</h2>
                    <h3 className='AsideCharacterDescription'>Ennemie de la justice</h3>
                </div>
            </div>
        )
    } else {
        return(
            <p>erreur</p>
        )
    }
}

export default AsideCharacterBox; 


