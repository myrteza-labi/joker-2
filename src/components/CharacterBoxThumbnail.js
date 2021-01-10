// Ce composant est limage miniature ou l'icone d'un joker selon la props passé

import React from 'react'; 
import './CharacterBoxThumbnail.css'; 
import joker1 from '../images/joker-1-icon.png';
import joker2 from '../images/joker-2-icon.png';
import joker3 from '../images/joker-3-icon.png';
import joker4 from '../images/joker-4-icon.png';

function CharacterBoxThumbnail(props){
    const joker = props.joker; 
    const order = props.order; 
    const thumbnailOrder = order=='right'? 'order-1' : 'order-2'; 
    if (joker =='1') {
        return (
            <div className={thumbnailOrder}>
                <img src={joker1}/>
            </div>
        ) 
    } else if(joker=='2'){
        return (
            <div className={thumbnailOrder}>
                <img src={joker2}/>
            </div>
        )
    } else if(joker=='3'){
        return (
            <div className={thumbnailOrder}>
                <img src={joker3}/>
            </div>
        )
    } else if(joker=='4'){
        return (
            <div className={thumbnailOrder}>
                <img src={joker4}/>
            </div>
        )
    }
    else {
        return (
            <p>null</p>
        )
    }
    

    // JEN SUIS LA SUR CETTE PAGE J'ESSAYE DE FAIRE APPARAITRE LES ICON DES JOKER
    // JY SUIS ARIVER POUR UNE CA Y EST JAI TROUVE

    /*
    if (joker== '1') {
        return(
            <div>
                <img src={joker1}/>
            </div>
            );
    } else if (joker== '2'){
        return(
            <div>
                <h1>ok</h1>
            </div>
            );
    } else {
        return(
            <div>
                <h1>ok</h1>
            </div>);
    }*/
}

export default CharacterBoxThumbnail; 

