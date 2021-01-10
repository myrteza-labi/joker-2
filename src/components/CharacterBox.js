// ce composant réunis CharacterBoxThumbnail 
// et CharactereBoxDescription

import React from 'react'; 
import './CharacterBox.css'; 
import CharacterBoxMainImage from './CharacterBoxMainImage';
import CharacterBoxDescription from './CharacterBoxDescritpion' 
import CharactersBoxContainer from './CharactersBoxContainer';
import CharacterBoxThumbnail from './CharacterBoxThumbnail';

function CharacterBox(props){
    const joker= props.joker; 
    const order = props.order; 
    

    return (
        <div className={props.className}>
            <CharacterBoxThumbnail order={order} joker={joker}/>
            <CharacterBoxDescription order={order} joker={joker}/>        
        </div>
        
    )
}

export default CharacterBox; 