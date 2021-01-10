import React from 'react'; 
import './AsideCharacterBox.css'; 
import Batman from '../images/ennemies/batman.jpg'; 
import Robin from '../images/ennemies/robin.jpg'; 
import Batgirl from '../images/ennemies/batgirl.jpg'; 
import Nightwing from '../images/ennemies/nightwing.jpg'; 

function AsideCharacterBox(props){
    const character = props.character; 
    const batman =  <div className='AsideCharacterBox'>
                        <img className='AsideCharacterImage' src={Batman}></img>
                        <div className='AsideCharactherdescription'>
                            <h2 className='AsideCharactherTitle'>BATMAN</h2>
                            <p className='AsideCharactherText'>Je suis le pire ennemie du Joker</p>
                        </div>
                    </div>
                    
    const robin =  <div className='AsideCharacterBox'>
                        <img className='AsideCharacterImage' src={Robin}></img>
                        <div className='AsideCharactherdescription'>
                            <h2 className='AsideCharactherTitle'>ROBIN</h2>
                            <p className='AsideCharactherText'>Fidèle compagnon de Batman</p>
                        </div>
                    </div>
    const batgirl =  <div className='AsideCharacterBox'>
                        <img className='AsideCharacterImage' src={Batgirl}></img>
                        <div className='AsideCharactherdescription'>
                            <h2 className='AsideCharactherTitle'>BATGIRL</h2>
                            <p className='AsideCharactherText'>Je souhaite tué Joker à tout prix</p>
                        </div>
                    </div>
    const nightwing =  <div className='AsideCharacterBox'>
                        <img className='AsideCharacterImage' src={Nightwing}></img>
                        <div className='AsideCharactherdescription'>
                            <h2 className='AsideCharactherTitle'>NIGHTWING</h2>
                            <p className='AsideCharactherText'>Je suis les ailles de la nuit</p>
                        </div>
                    </div>

    const harleyQuinn =  <div className='AsideCharacterBox'>
                        <img className='AsideCharacterImage' src={Batman}></img>
                        <div className='AsideCharactherdescription'>
                            <h2 className='AsideCharactherTitle'>BATMAN</h2>
                            <p className='AsideCharactherText'>Je suis le pire ennemie du Joker</p>
                        </div>
                    </div>

    const penguin =  <div className='AsideCharacterBox'>
                        <img className='AsideCharacterImage' src={Batman}></img>
                        <div className='AsideCharactherdescription'>
                            <h2 className='AsideCharactherTitle'>BATMAN</h2>
                            <p className='AsideCharactherText'>Je suis le pire ennemie du Joker</p>
                        </div>
                    </div>

    const blackMask =  <div className='AsideCharacterBox'>
                        <img className='AsideCharacterImage' src={Batman}></img>
                        <div className='AsideCharactherdescription'>
                            <h2 className='AsideCharactherTitle'>BATMAN</h2>
                            <p className='AsideCharactherText'>Je suis le pire ennemie du Joker</p>
                        </div>
                    </div>

    const lexLuthor =  <div className='AsideCharacterBox'>
                        <img className='AsideCharacterImage' src={Batman}></img>
                        <div className='AsideCharactherdescription'>
                            <h2 className='AsideCharactherTitle'>BATMAN</h2>
                            <p className='AsideCharactherText'>Je suis le pire ennemie du Joker</p>
                        </div>
                    </div>


    if(character== 'batman'){
        return (
            batman
        )
    } else if(character=='robin'){
        return (
            robin
        )
    } else if(character=='batgirl'){
        return (
            batgirl
        )
    } else if(character=='nightwing'){
        return (
            nightwing
        )
    } else {
        return (
            <h2>error</h2>
        )
    }
    /*return (
        batman
    )
        <div className='AsideCharacterBox'>
            <img className='AsideCharacterImage' src={Batman}></img>
            <div className='AsideCharactherdescriptionContainer'>
                <h2 className='AsideCharactherdescription'>Je suis Batman</h2>
            </div>
        </div>*/
    
}

export default AsideCharacterBox; 